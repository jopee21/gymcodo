(function(){
    const titleTraining = [...document.querySelectorAll('.training__title')];
    console.log(titleTraining)

    titleTraining.forEach(training =>{
        training.addEventListener('click', ()=>{
            let height = 0;
            let answer = training.nextElementSibling;
            let addPadding = training.parentElement.parentElement;

            addPadding.classList.toggle('training__padding--add');
            training.children[0].classList.toggle('training__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();

(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    


})();