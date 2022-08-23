// Menu boutton toggle
var menu = document.querySelector(".menu");
var toggle_menu = document.querySelector(".toggle-menu");

toggle_menu.addEventListener('click', () => {
  toggle_menu.classList.toggle('active') ;
  menu.classList.toggle('responsive') ;
})


// Panneaux stylisés
const allBlocs = document.querySelectorAll('.bloc');


allBlocs.forEach(bloc => {
    bloc.addEventListener('click', (e) => {

        // console.log(e.target);
        e.target.classList.add('activer');

        for(let i = 0; i < allBlocs.length; i++ ){
            if(allBlocs[i] !== e.target){
                allBlocs[i].classList.remove('activer');
            }
        }
        

    })
})

// Boutton stop propagation des panneaux stilysés
const questionsButtons = document.querySelectorAll('#questions button');

questionsButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
    })
})