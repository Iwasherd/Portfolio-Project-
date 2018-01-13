//flipper
(function () {
    const linkAutoriz = document.querySelector('.greeting__autoriz-link');
    const btnMain = document.querySelector('.block__btns-link--js');
    const flipperBlock = document.querySelector('.greeting__flipper');
    const btnAutoriz = document.querySelector('.greeting__autoriz-btn');

    if (linkAutoriz) {
        linkAutoriz.addEventListener("click", e => {
            e.preventDefault(),
                flipperBlock.style.transform = "rotateY(180deg)";
            btnAutoriz.style.opacity = "0";
            linkAutoriz.style.display = "none";

        })
    };
    if (btnMain) {
        btnMain.addEventListener("click", e => {
            e.preventDefault(),
                flipperBlock.style.transform = "rotateY(0deg)";
            btnAutoriz.style.opacity = "1";
            linkAutoriz.style.display = "flex";
        })
    };
})();
//parallax
(function () {
   const parallaxContainer = document.querySelector('.parallax');
    if(parallaxContainer) {var layers = parallaxContainer.children;}
    let moveLayers = (event) => {
        let initialX = (window.innerWidth / 2) - event.pageX;
        let initialY = (window.innerHeight / 2) - event.pageY;
        let i = 0;
        for (let layer of layers) {
            let divider = i / 80,
                positionX = initialX * divider,
                positionY = initialY * divider,
                bottomPosition = (window.innerHeight / 2) * divider,
                image = layer.firstElementChild;
                image.style.bottom = '-' + bottomPosition + 'px';
                if(event.pageY<=window.innerHeight){
                    layer.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px)';
                }
            i++;
        }  
    };
    
    if(parallaxContainer){
        var cloudOne = document.querySelector('#cloud__one');
        var cloudTwo = document.querySelector('#cloud__two');
        var cloudThree = document.querySelector('#cloud__three');
    }
    if(parallaxContainer){
        window.addEventListener('mousemove', moveLayers);
        let windowCritVal = window.innerWidth / 1.3
        let offsetLeftOne = windowCritVal*0.5;
        let offsetLeftTwo = windowCritVal*0.9;
        let offsetLeftThree = windowCritVal*0.6;
        let cloudOneOffset,
            cloudTwoOffset,
            cloudThreeOffset;
        let moveCloudOne = function(){
            offsetLeftOne += 1;
            if(cloudOneOffset < -windowCritVal) offsetLeftOne = 1;
            cloudOneOffset = windowCritVal - offsetLeftOne;
            cloudOne.style.left = cloudOneOffset + 'px'
        }
        let moveCloudTwo = function(){
            offsetLeftTwo += 1;
            if(cloudTwoOffset < -windowCritVal) offsetLeftTwo = 1;
            cloudTwoOffset = windowCritVal - offsetLeftTwo;
            cloudTwo.style.left = windowCritVal - offsetLeftTwo + 'px'
        }
        let moveCloudThree = function(){
            offsetLeftThree += 1;
            if(cloudThreeOffset < -windowCritVal) offsetLeftThree = 1;
            cloudThreeOffset = windowCritVal - offsetLeftThree
            cloudThree.style.left = windowCritVal - offsetLeftThree + 'px'
        }
        setInterval(moveCloudOne, 35);
        setInterval(moveCloudTwo, 65);
        setInterval(moveCloudThree, 85);
    } 
})();