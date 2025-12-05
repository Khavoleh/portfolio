document.addEventListener('astro:page-load', () => {
  if (typeof globalThis !== 'undefined' && globalThis.initFlowbite) {
    globalThis.initFlowbite();
  }
});
