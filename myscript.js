const arrImages = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
];

const containerHighlighted = document.querySelector('.highlighted');
const containerThumbs = document.querySelector('.thumbs');

for (let i = 0; i < arrImages.length; i++) {
    containerHighlighted.innerHTML += `<img src="${arrImages[i]}" alt="" class="${i == 0 ? 'active' : ''}">`;
    containerThumbs.innerHTML += `<img src="${arrImages[i]}" alt="" class="${i == 0 ? 'active' : ''}">`;
}


// selezionimo le immagini nell'html
const listHighlighted = document.querySelectorAll('.highlighted img');
// selezioniamo le miniature
const listThumbs = document.querySelectorAll('.thumbs img');
// selezioniamo i bottoni
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');


// definito una variabile che rappresenta lo stato attuale del carosello
// cioe' l'indice dell'immagine attiva
let activeIndex = 0;

btnNext.addEventListener('click',
    function () {
        // dall'immagine attiva tolgo la classe active
        listHighlighted[activeIndex].classList.remove('active');
        listThumbs[activeIndex].classList.remove('active');
        // settiamo il nuovo valore di active index
        activeIndex++;
        if (activeIndex >= listHighlighted.length) {
            activeIndex = 0;
        }
        // alla nuova immagine attiva aggiungiamo la classe active
        listHighlighted[activeIndex].classList.add('active');
        listThumbs[activeIndex].classList.add('active');
    }
);

btnPrev.addEventListener('click',
    function () {
        // dall'immagine attiva tolgo la classe active
        listHighlighted[activeIndex].classList.remove('active');
        listThumbs[activeIndex].classList.remove('active');
        // settiamo il nuovo valore di active index
        activeIndex--;
        if (activeIndex < 0) {
            activeIndex = listHighlighted.length - 1;
        }
        // alla nuova immagine attiva aggiungiamo la classe active
        listHighlighted[activeIndex].classList.add('active');
        listThumbs[activeIndex].classList.add('active');
    }
);

// ciclo per aggiungere gli event listeners alle miniature
for (let i = 0; i < listThumbs.length; i++) {
    listThumbs[i].addEventListener('click',
        function () {
            console.log('cliccata la miniature in posizione ' + i)
            listHighlighted[activeIndex].classList.remove('active');
            listThumbs[activeIndex].classList.remove('active');
            activeIndex = i;
            listHighlighted[activeIndex].classList.add('active');
            listThumbs[activeIndex].classList.add('active');
        }
    )
}
