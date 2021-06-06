const animateScroll = () => {
  const divs = document.querySelectorAll('.js-scroll');
  const sixtyPercent = window.innerHeight * 0.6;

  const scrollAnimation = () => {
    divs.forEach((items) => {
      const distanceTopTop = items.getBoundingClientRect().top;
      const halfScreen = distanceTopTop - sixtyPercent;
      if (halfScreen < 0) {
        items.classList.add('animate');
      }
    });
  };
  scrollAnimation();
  window.addEventListener('scroll', scrollAnimation);
};
animateScroll();
