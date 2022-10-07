(function(){
    const titleTraining = [...document.querySelectorAll('.training__title')];
    console.log(titleTraining)

    titleTraining.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('training__padding--add');
            question.children[0].classList.toggle('training__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();