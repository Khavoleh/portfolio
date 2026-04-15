const addAndRemoveNoTransitions = () => {
  document.documentElement.classList.add('no-transitions');

  setTimeout(() => {
    document.documentElement.classList.remove('no-transitions');
  }, 1000);
};

addAndRemoveNoTransitions();
document.addEventListener('astro:page-load', addAndRemoveNoTransitions);
