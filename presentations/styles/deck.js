(function () {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const counter = document.getElementById('slide-count');
  let index = 0;

  function show(i) {
    index = Math.max(0, Math.min(i, slides.length - 1));
    slides.forEach((el, n) => el.classList.toggle('is-active', n === index));
    counter.textContent = `${index + 1} / ${slides.length}`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;
  }

  prevBtn.addEventListener('click', () => show(index - 1));
  nextBtn.addEventListener('click', () => show(index + 1));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      show(index + 1);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      show(index - 1);
    }
  });

  show(0);
})();
