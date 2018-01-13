
//кнопка очистить
(function () {
    const resetBtn = document.querySelector('.block__btns--reset');
    const input = document.querySelectorAll('.form-block__input');
    const textarea = document.querySelector('.form-block__textarea');

    resetBtn.addEventListener('click', e => {
        e.preventDefault();
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
        textarea.value = '';
    })
})();

//slider
(function () {
    let sliderBlock = document.querySelector("#slider");
    let currentSliderImg = document.querySelector(".work__current-img");

    let sliderInit = () => {
      console.log("hi");
      let workNum = 0;
      let slider = new Vue({
        el: "#slider",
        data: {
          showCurrent: true,
          showNext: true,
          showPrevious: true,
          works: [
            {
              title: "Сайт школы онлайн образования",
              tech: "HTML, CSS, Javascript",
              href: "https://loftschool.com",
              linkText: "Посмотреть сайт",
              img: "styles/images/1.png"
            },
            {
              title: "Статичный сайт",
              tech: "HTML, CSS",
              href: "#",
              linkText: "Посмотреть сайт",
              img: "styles/images/2.png"
            },
            {
              title: "Лэндинг",
              tech: "HTML, CSS, Javascript, jQuery",
              href: "#",
              linkText: "Посмотреть сайт",
              img: "styles/images/3.png"
            }
          ],
          currentProject: {},
          previousProject: {},
          previousProject2: {},
          nextProject: {},
          nextProject2: {}
        },
        methods: {
          nextproject: function() {
            workNum < this.works.length - 1 ? workNum++ : (workNum = 0);
            let changeNext = new Promise((resolve, reject) => {
              resolve();
            })
              .then(() => {
                changeOthers(workNum, this);
              })
              .then(() => {
                this.showCurrent = !this.showCurrent;
                this.showNext = !this.showNext;
                this.showPrevious = !this.showPrevious;
              });
          },
          previousproject: function() {
            workNum > 0 ? workNum-- : (workNum = this.works.length - 1);
            let changePrevious = new Promise((resolve, reject) => {
              resolve();
            })
              .then(() => {
                changeOthers(workNum, this);
              })
              .then(() => {
                this.showCurrent = !this.showCurrent;
                this.showNext = !this.showNext;
                this.showPrevious = !this.showPrevious;
              });
          },
          afterLeaveCurrent: function() {
            this.showCurrent = !this.showCurrent;
            changeCurrent(workNum, this);
          },
          afterLeaveNext: function() {
            this.showNext = !this.showNext;
          },
          afterLeavePrevious: function() {
            this.showPrevious = !this.showPrevious;
          }
        }
      });

      /////////инициализация слайдов/////
      slider.currentProject = slider.works[workNum];
      slider.nextProject = slider.works[workNum + 1];
      slider.nextProject2 = slider.works[workNum + 2];
      slider.previousProject = slider.works[slider.works.length - 1];
      slider.previousProject2 = slider.works[slider.works.length - 2];
      //////функции по замене слайдов//////
      let changeCurrent = (workNum, $this) => {
        $this.currentProject = $this.works[workNum];
        workNum < $this.works.length - 1 ? ($this.nextProject = $this.works[workNum + 1]) : ($this.nextProject = $this.works[0]);
        workNum > 0 ? ($this.previousProject = $this.works[workNum - 1]) : ($this.previousProject = $this.works[$this.works.length - 1]);
      };
      let changeOthers = (workNum, $this) => {
        workNum < $this.works.length - 1 ? ($this.nextProject2 = $this.works[workNum + 1]) : ($this.nextProject2 = $this.works[0]);
        workNum > 0 ? ($this.previousProject2 = $this.works[workNum - 1]) : ($this.previousProject2 = $this.works[$this.works.length - 1]);
      };
    };

    if (sliderBlock) {
      sliderInit();
    }
})();
