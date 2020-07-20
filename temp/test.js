




function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    console.dir(document.getElementsByClassName('card'))
    for (var i = 0; i < cards.length; i++) {
				console.dir(cards[i]);
			}
    let game = new japanCardGame(100, cards);
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });
    cards.forEach(card =>{
        card.addEventListener('click',()=>{
            game.flipCard(card);
        });
    });
}


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}