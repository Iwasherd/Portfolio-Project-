
//hamburger menu
(function () {
    const show = document.querySelector('.hamburger');
    const line = document.querySelectorAll('.hamburger__line');
    const lineTop = line[0];
    const lineHide = line[1];
    const lineBottom = line[2];
    const menu = document.querySelector('.fullscreen-menu');

        if (show) {
        show.addEventListener("click", e => {
            e.preventDefault();
            lineTop.classList.toggle('hamburger__line-top-js');
            lineHide.classList.toggle('hamburger__line-hide-js');
            lineBottom.classList.toggle('hamburger__line-bottom-js');
            menu.classList.toggle('fullscreen-menu_show');
            document.body.classList.toggle('hidden');

        });

}})();
//arrow
(function () {
    const arrow = document.querySelector('.header__arrow-link');

    if (arrow) {
        
        arrow.addEventListener('click', function scrolling(e){
            e.preventDefault();
                window.scrollTo(0, 750);
        })
    }
})();
//preloader
(function () {

    const preloader = document.querySelector(".preloader");
    const preloaderSvg = document.querySelector(".preloader__svg");

    const circleOne = document.querySelector(".preloader__circle-one");
    const circleTwo = document.querySelector(".preloader__circle-two");
    const circleThree = document.querySelector(".preloader__circle-three");
    const preloaderText = document.querySelector(".preloader__text");
    let currentPercent = 0;

    let delayOfCircleOne = 30;
    let delayOfCircleTwo = 20;

    let animateInterval;

    let animatePreloader = () => {
      currentPercent += 5; // изменяется в зависимости от загрузки картинок

      if (currentPercent >= 100) {
        preloaderText.innerHTML = 100;
        currentPercent = 100;
        clearInterval(animateInterval);
        setTimeout(() => {
          preloaderSvg.style.opacity = 0;
          preloaderText.style.opacity = 0;
        }, 500);
        setTimeout(() => {
          preloader.style.opacity = 0;
          setTimeout(() => {
            preloader.style.display = "none";
            document.body.classList.remove('hidden');
            
          }, 1500);
        }, 1000);
      }
      if (currentPercent > delayOfCircleOne) {
        circleOne.style.strokeDashoffset = 440 - 440 / 100 * (currentPercent * (delayOfCircleOne / 100 + 1) - delayOfCircleOne);
      }
      if (currentPercent > delayOfCircleTwo) {
        circleTwo.style.strokeDashoffset = 350 - 350 / 100 * (currentPercent * (delayOfCircleTwo / 100 + 1) - delayOfCircleTwo);
      }
      circleThree.style.strokeDashoffset = 260 - 260 / 100 * currentPercent;
      preloaderText.innerHTML = currentPercent;
    };

    if (preloaderSvg) {
    document.body.classList.add("hidden");
      animateInterval = setInterval(animatePreloader, 100);
    }

})();


