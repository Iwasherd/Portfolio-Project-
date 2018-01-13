// animate skills on scroll
(function () {
    window.onscroll = function () {
        const baseCircle = document.querySelectorAll('.circle__second');
        const item = document.querySelectorAll('.about-skills__category-item');
        let circle0 = 'circle-0', circle5 = 'circle-5', circle10 = 'circle-10', circle15 = 'circle-15', circle20 = 'circle-20', circle25 = 'circle-25', circle30 = 'circle-30', circle35 = 'circle-35', circle40 = 'circle-40', circle45 = 'circle-45', circle50 = 'circle-50', circle55 = 'circle-55', circle60 = 'circle-60', circle65 = 'circle-65', circle70 = 'circle-70', circle75 = 'circle-75', circle80 = 'circle-80', circle85 = 'circle-85', circle90 = 'circle-90', circle95 = 'circle-95', circle100 = 'circle-100';

        if (window.pageYOffset > 320) {
            function animateSkill(circle, num) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        baseCircle[num].classList.add(circle);
                        item[num].classList.remove('about-skills__category-item_opacity');
                        resolve();
                    }, 200);

                })
            }
            animateSkill(circle85, 0)
                .then(() => animateSkill(circle80, 1))
                .then(() => animateSkill(circle50, 2))
                .then(() => animateSkill(circle30, 3))
                .then(() => animateSkill(circle40, 4))
                .then(() => animateSkill(circle30, 5))
                .then(() => animateSkill(circle30, 6))
                .then(() => animateSkill(circle80, 7))
                .then(() => animateSkill(circle75, 8))
                .then(() => animateSkill(circle80, 9))

        } else {
            for (let i = 0; i < item.length; i++) {
                item[i].classList.add('about-skills__category-item_opacity');
            };
            baseCircle[0].classList.remove(circle85);
            baseCircle[1].classList.remove(circle80);
            baseCircle[2].classList.remove(circle50);
            baseCircle[3].classList.remove(circle30);
            baseCircle[4].classList.remove(circle40);
            baseCircle[5].classList.remove(circle30);
            baseCircle[6].classList.remove(circle30);
            baseCircle[7].classList.remove(circle80);
            baseCircle[8].classList.remove(circle75);
            baseCircle[9].classList.remove(circle80);
        }
    }
})();