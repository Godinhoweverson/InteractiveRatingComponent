"use strict";

const cicleValue = document.querySelectorAll('#cicle-value');
const btnSub = document.getElementById('btn-sub');

let ratingValue = null;

const getValue = () => {
cicleValue.forEach( (el) =>{
    el.addEventListener('click', () =>{
        ratingValue = el.innerHTML; 
    })
});
};
 
const subFeedback = () =>{
    btnSub.addEventListener('click', () => {
        console.log(ratingValue)
    });
};

subFeedback();
 getValue();

