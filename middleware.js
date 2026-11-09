// Password gate for the whole site (Vercel Routing Middleware, runs before every request).
// The client proposal at /proposals/AWIW/1/ stays open so the link sent to AWIW keeps working;
// everything else (the draft agency site, templates, other proposal versions) asks for the password.
// Only a SHA-256 hash of the password is stored here. To change the password, replace PASSWORD_HASH with
// sha256('pg-site-gate:v1:' + newPassword) in hex; everyone will then need to sign in again.

const PASSWORD_HASH = '7974bb4feeae3916a73696bf45d410b5e23b71a40e8616f3e05522c134fc67df';
const COOKIE = 'pg_site_gate';
const LOGIN_PATH = '/__site-login';
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

// Paths anyone can open without the password.
const PUBLIC = [/^\/proposals\/AWIW\/1(\/.*)?$/, /^\/favicon(-32)?\.(ico|svg|png)$/, /^\/apple-touch-icon(-precomposed)?\.png$/, /^\/robots\.txt$/];

export const config = { matcher: '/:path*' };

// Same as next() from @vercel/functions: let the request continue to the static file.
const next = () => new Response(null, { headers: { 'x-middleware-next': '1' } });

async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function readCookie(request, name) {
  const raw = request.headers.get('cookie') || '';
  for (const part of raw.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === name) return decodeURIComponent(v.join('='));
  }
  return '';
}

// Only allow redirects back to a path on this site.
function safePath(p) {
  return typeof p === 'string' && p.startsWith('/') && !p.startsWith('//') && !p.startsWith('/\\') ? p : '/';
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function loginPage(nextPath, failed) {
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><title>Password required | Purple Giraffe</title>
<style>
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px;background:#F4F1F6;color:#2E1A47;font-family:system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif}
.card{width:100%;max-width:400px;background:#fff;border-radius:20px;padding:36px 32px;box-shadow:0 30px 80px -40px rgba(46,26,71,.45)}
.brand{font-weight:700;font-size:15px;letter-spacing:.02em;color:#2E1A47;margin:0 0 28px}
h1{margin:0 0 8px;font-size:24px;line-height:1.2}p{margin:0 0 22px;color:#545454;font-size:15px;line-height:1.5}
label{display:block;font-size:13px;font-weight:600;margin:0 0 8px}
input{width:100%;font-size:16px;padding:13px 14px;border:1px solid #D9D3E0;border-radius:12px;outline:none;color:#2E1A47}
input:focus{border-color:#2E1A47;box-shadow:0 0 0 3px rgba(46,26,71,.12)}
button{width:100%;margin-top:14px;border:0;border-radius:999px;padding:14px;background:#2E1A47;color:#fff;font-size:16px;font-weight:600;cursor:pointer}
button:hover{background:#3d2660}.err{margin:12px 0 0;color:#a1281b;font-size:14px}
</style></head><body><main class="card">
<p class="brand">Purple Giraffe</p>
<h1>This site is private</h1>
<p>Please enter the password to continue.</p>
<form method="post" action="${LOGIN_PATH}">
<input type="hidden" name="next" value="${esc(nextPath)}">
<label for="pw">Password</label>
<input id="pw" name="password" type="password" autocomplete="current-password" required autofocus>
${failed ? '<p class="err" role="alert">That password is not right. Please try again.</p>' : ''}
<button type="submit">Continue</button>
</form></main></body></html>`;
  return new Response(html, {
    status: 401,
    headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex, nofollow' },
  });
}

export default async function middleware(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  if (PUBLIC.some((re) => re.test(path))) return next();

  // Password form submitted.
  if (path === LOGIN_PATH && request.method === 'POST') {
    let password = '';
    let nextPath = '/';
    try {
      const form = await request.formData();
      password = String(form.get('password') || '');
      nextPath = safePath(String(form.get('next') || '/'));
    } catch (e) { /* treat as a wrong password */ }
    if ((await sha256('pg-site-gate:v1:' + password)) === PASSWORD_HASH) {
      return new Response(null, {
        status: 303,
        headers: {
          location: nextPath,
          'set-cookie': `${COOKIE}=${PASSWORD_HASH}; Path=/; Max-Age=${MAX_AGE}; HttpOnly; Secure; SameSite=Lax`,
          'cache-control': 'no-store',
        },
      });
    }
    return loginPage(nextPath, true);
  }

  if (readCookie(request, COOKIE) === PASSWORD_HASH) {
    if (path === LOGIN_PATH) return new Response(null, { status: 303, headers: { location: '/' } });
    return next();
  }

  return loginPage(path === LOGIN_PATH ? '/' : path + url.search, false);
}
