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

(function(){
    
    const sliders = [...document.querySelectorAll('.us__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.us__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('us__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('us__body--show');

    }

})();


async function getPlayer(){
    function exito() {
        var datos = JSON.parse(this.responseText); //convertir a JSON
        document.getElementById('player_name').innerHTML = datos.player[0].strPlayer
        document.getElementById('player_team').innerHTML = datos.player[0].strTeam
        document.getElementById('player_description').innerHTML = datos.player[0].strDescriptionEN
        document.getElementById('player_img').src = datos.player[0].strThumb
    }
    
    // funcion para la llamada fallida
    function error(err) {
        console.log('Solicitud fallida', err); //los detalles en el objecto "err"
    }
    let jugador = document.getElementById('player').value;
    console.log(jugador.replace(" ","_"))
    let request = 'https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p='+jugador.replace(" ","_");
    console.log(request)
    
    var xhr = new XMLHttpRequest(); //invocar nueva instancia de XMLHttpRequest
    xhr.onload = exito; // llamar a la funcion exito si exitosa
    xhr.onerror = error;  // llamar a la funcion error si fallida
    xhr.open('GET', request); // Abrir solicitud GET
    xhr.send(); // mandar la solicitud al servidor.


    
}