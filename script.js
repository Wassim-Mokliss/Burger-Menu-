console.log('connecté !')

// Je selectionne et stocke les elements
// Icone burger
const icone = document.querySelector('.navbar-mobile i');
console.log(icone);
// DIV modal
const modal = document.querySelector('.modal');
console.log(modal);

// Ajout ecouteurs evenement
icone.addEventListener('click', function(){
    console.log('clické');
    modal.classList.toggle('change-modal');
    icone.classList.toggle('fa-times')
});










