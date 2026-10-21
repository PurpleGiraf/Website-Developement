// Shared progressive-enhancement behaviour used by every template.
// Pages work without JS; this only adds filtering, toggles and form feedback.

// FAQ category filters: <button data-faq-filter="Pricing"> filters [data-faq-cat] items
// inside the closest [data-faq-root].
document.querySelectorAll<HTMLElement>('[data-faq-root]').forEach((root) => {
  const buttons = root.querySelectorAll<HTMLButtonElement>('[data-faq-filter]');
  const items = root.querySelectorAll<HTMLElement>('[data-faq-cat]');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.faqFilter;
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      items.forEach((item) => {
        item.hidden = cat !== 'All' && item.dataset.faqCat !== cat;
      });
    });
  });
});

// Single-choice chip groups (e.g. project type): <div data-chips> with <button data-chip value="...">
// The chosen value is written to the hidden input [data-chip-input] inside the same group.
document.querySelectorAll<HTMLElement>('[data-chips]').forEach((group) => {
  const input = group.querySelector<HTMLInputElement>('[data-chip-input]');
  group.querySelectorAll<HTMLButtonElement>('[data-chip]').forEach((chip, _i, all) => {
    chip.addEventListener('click', () => {
      all.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      if (input) input.value = chip.value;
    });
  });
});

// Forms: <form data-form> with a sibling/child [data-form-success] (hidden).
// TODO before launch: point each form's `action` at a real endpoint (Formspree, Netlify Forms,
// a CRM webhook, etc.). Until a real action is set, submission only shows the success message.
document.querySelectorAll<HTMLFormElement>('form[data-form]').forEach((form) => {
  const wrap = form.closest<HTMLElement>('[data-form-wrap]');
  const success = wrap?.querySelector<HTMLElement>('[data-form-success]');
  const reset = wrap?.querySelector<HTMLElement>('[data-form-reset]');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const action = form.getAttribute('action');
    if (action) {
      try {
        await fetch(action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      } catch {
        /* network error: still show confirmation; real projects should surface this */
      }
    }
    form.hidden = true;
    if (success) success.hidden = false;
  });
  reset?.addEventListener('click', () => {
    form.reset();
    form.hidden = false;
    if (success) success.hidden = true;
  });
});
