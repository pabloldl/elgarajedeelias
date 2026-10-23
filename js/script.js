'use strict';

document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copy-phone');
const copyStatus = document.getElementById('copy-status');
const manualCopy = document.getElementById('manual-copy');
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('691417831');
    copyStatus.textContent = 'Teléfono copiado: 691 417 831';
    manualCopy.hidden = true;
  } catch {
    manualCopy.hidden = false;
    const input = document.getElementById('phone-value');
    input.focus();
    input.select();
    copyStatus.textContent = 'Copia el número del campo seleccionado.';
  }
});

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('revealing');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.shutter').forEach(photo => observer.observe(photo));
}
