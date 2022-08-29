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

// Compteur automatique
let valueDisplays = document.querySelectorAll(".num");
let interval = 1600;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    startValue += 2;
    valueDisplay.style.fontSize = 4 + "rem";
    valueDisplay.textContent = "+ " + startValue;
    if(startValue == endValue){
      clearInterval(counter);
    }
  }, duration);
})