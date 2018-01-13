//mobile articles list
(function () {
    const circleBtn = document.querySelector('.mobile-circle'),
        positionCircleBtn = document.querySelector('.mobile__circle--position'),
        listBlock = document.querySelector('.articles__list-block'),
        list = document.querySelector('.articles__list'),
        screenHeight = window.screen.height;
        articles = document.querySelectorAll('.article'),
        article1 = document.querySelector('#article1'),
        article2 = document.querySelector('#article2'),
        article3 = document.querySelector('#article3'),
        articlesNavItem = document.querySelectorAll('.articles__item'),
        articlesLink = document.querySelectorAll('.articles__link');
   
    //functional of button
    circleBtn.addEventListener('click', ()=>{
        if (listBlock.classList.contains('articles__list-block--active') === true) {
            listBlock.classList.remove('articles__list-block--active');
            circleBtn.classList.remove("mobile__circle--position");
            document.querySelector('.header').classList.remove('header__z-index')
            
        }
        else{
            listBlock.classList.add('articles__list-block--active');
            document.querySelector('.header').classList.add('header__z-index')
            circleBtn.classList.toggle('mobile__circle--z-index')
            setTimeout(() => {
                circleBtn.classList.add('mobile__circle--position');
               
            }, 700);
        }
    })
    // навигация по статьям
     let coordinatesArticle1 = article1.getBoundingClientRect(),
         coordinatesArticle2 = article2.getBoundingClientRect(),
         coordinatesArticle3 = article3.getBoundingClientRect();
         console.log(coordinatesArticle1);

   

     window.onscroll = function () {
        
         if (scrollY > coordinatesArticle1.top && scrollY < coordinatesArticle2.top) {
             articlesNavItem[0].classList.add('articles__item_active'),
                 articlesNavItem[1].classList.remove('articles__item_active'),
                 articlesNavItem[2].classList.remove('articles__item_active');
                circleBtn.style.position = "fixed";
                list.style.position = "fixed";
         }
         else if (scrollY > coordinatesArticle2.top && scrollY < coordinatesArticle3.top) {
              articlesNavItem[1].classList.add('articles__item_active'),
                  articlesNavItem[0].classList.remove('articles__item_active'),
                  articlesNavItem[2].classList.remove('articles__item_active');
             circleBtn.style.position = "fixed";
             list.style.position = "fixed";
          }
         else if (scrollY > coordinatesArticle3.top) {
                    articlesNavItem[2].classList.add('articles__item_active'),
                    articlesNavItem[1].classList.remove('articles__item_active'),
                    articlesNavItem[0].classList.remove('articles__item_active');
             circleBtn.style.position = "fixed";
             list.style.position = "fixed";
          }
         else {
             articlesNavItem[2].classList.remove('articles__item_active'),
                 articlesNavItem[0].classList.remove('articles__item_active'),
                 articlesNavItem[1].classList.remove('articles__item_active');
             circleBtn.style.position = "static",
                 list.style.position = "static";
         }
         console.log(scrollY)
     }
 })();   
    


