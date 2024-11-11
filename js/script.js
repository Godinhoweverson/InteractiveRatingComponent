"use strict";

const cicleValue = document.querySelectorAll('#cicle-value');
const btnSub = document.getElementById('btn-sub');
const containerRating = document.querySelector('#container-rating');
const main = document.querySelector('main');



let ratingValue = null;

const getValue = () => {
    cicleValue.forEach( (el) =>{   
        el.addEventListener('click', () =>{
            cicleValue.forEach((elReset) =>{
                elReset.style.backgroundColor = '';
                elReset.style.color = '';
            })
            el.style.backgroundColor = 'hsl(25, 97%, 53%)';
            el.style.color = 'hsl(0, 0%, 100%)';
            ratingValue = el.innerHTML; 
        }); 
    });
};
 
const subFeedback = () =>{
    btnSub.addEventListener('click', () => {
        console.log(ratingValue);
        containerRating.style.display = 'none';

        const divConteiner = document.createElement('div');
        divConteiner.setAttribute('class', 'container');
        main.appendChild(divConteiner);

        const imgContainer = document.createElement('div');
        imgContainer.setAttribute('class', 'img-container');
        divConteiner.appendChild(imgContainer);

        const img = document.createElement('img');
        img.setAttribute('src', "images/illustration-thank-you.svg");
        imgContainer.appendChild(img);

        const ratingScore = document.createElement('div');
        ratingScore.setAttribute('class', 'rating-score');

        const rating = document.createElement('p');
        rating.innerHTML = `You selected ${ratingValue} of 5`;
        rating.style.color = 'hsl(25, 97%, 53%)';

        ratingScore.appendChild(rating);
        divConteiner.appendChild(ratingScore)

        const thankYouMsg = document.createElement('div');
        thankYouMsg.setAttribute('class', 'thankYou-msg');

        const h1 = document.createElement('h1');
        h1.innerHTML = 'Thank You!';

        thankYouMsg.appendChild(h1);
        divConteiner.appendChild(thankYouMsg);

        const paragphMsg = document.createElement('div');
        paragphMsg.setAttribute('class', 'paragph-msg');

        const text = document.createElement('p');
        text.innerHTML = `We appreciate you taking the time to give a rating. ${'<br>'} If you ever need more support, don’t hesitate ${'<br>'} to get in touch!`;

        paragphMsg.appendChild(text);
        divConteiner.appendChild(paragphMsg)


    });
};

subFeedback();
 getValue();
