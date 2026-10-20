// Booking page: keeps the "topic · format · time" summary in sync with the chip selections,
// defaults the time to the first slot if none is chosen (as the original template did),
// and clears the time on "New request".
const form = document.querySelector<HTMLFormElement>('form[data-booking]');
const wrap = form?.closest<HTMLElement>('[data-form-wrap]');

if (form && wrap) {
  const field = (name: string) => form.querySelector<HTMLInputElement>(`input[name="${name}"]`)!;
  const summaries = wrap.querySelectorAll<HTMLElement>('[data-booking-summary]');
  const slotChips = form.querySelectorAll<HTMLButtonElement>('.pro-slot');

  const update = () => {
    const text = `${field('topic').value} · ${field('format').value} · ${field('slot').value || 'choose a time'}`;
    summaries.forEach((el) => (el.textContent = text));
  };

  // Shared chip handler runs first (registered earlier), so read values after it.
  form.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('[data-chip]')) queueMicrotask(update);
  });

  form.addEventListener('submit', () => {
    if (!field('slot').value && slotChips[0]) {
      field('slot').value = slotChips[0].value;
      slotChips[0].setAttribute('aria-pressed', 'true');
    }
    update();
  });

  wrap.querySelector('[data-form-reset]')?.addEventListener('click', () => {
    // Topic and format stay as chosen (hidden inputs ignore form.reset()); only the time is cleared.
    field('slot').value = '';
    form.querySelectorAll<HTMLElement>('[data-chips]').forEach((group) => {
      const chips = group.querySelectorAll<HTMLButtonElement>('[data-chip]');
      const input = group.querySelector<HTMLInputElement>('[data-chip-input]');
      chips.forEach((c) => c.setAttribute('aria-pressed', String(!!input?.value && c.value === input.value)));
    });
    update();
  });
}
