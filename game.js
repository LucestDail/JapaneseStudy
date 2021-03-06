class AudioController{
    constructor() {
        this.bgMusic = new Audio('assets/Audio/bgmusic.wav');
        this.clickSound = new Audio('assets/Audio/click.wav');
        this.matchSound = new Audio('assets/Audio/match.wav');
        this.victorySound = new Audio('assets/Audio/victory.wav');
        this.gameOverSound = new Audio('assets/Audio/gameOver.wav');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    click() {
        this.clickSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

class japanCardGame{
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining')
        this.ticker = document.getElementById('clicks');
        this.audioController = new AudioController();
    }
    startGame() {
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.cardToCheck = null;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(()=>{
            this.audioController.startMusic();
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;
        },500)
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
        
    }
    
    hideCards(){
        this.cardsArray.forEach(card =>{
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }
    
    clickCard(card) {
        if(this.canClickCard(card)) {
            this.audioController.click();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');
            if(this.cardToCheck){
                this.checkForCardMatch(card);
            }else{
                this.cardToCheck = card;
            }
            
        }
    }
    
    checkForCardMatch(card){
        if(this.getCardType(card) === this.getCardType(this.cardToCheck)){
            this.cardMatch(card, this.cardToCheck);
        }else{
            this.cardMissMatch(card, this.cardToCheck);
        }
        this.cardToCheck=null;
    }
    
    cardMatch(card1, card2){
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        this.audioController.match();
        if(this.matchedCards.length === this.cardsArray.length){
            this.gameVictory();
        }

    }
    
    cardMissMatch(card1, card2){
        this.busy = true;
        setTimeout(()=>{
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        },1000);
        
    }
    
    getCardType(card){
        console.dir(card.getElementsByClassName('card-value')[0])
        return card.getElementsByClassName('card-value')[0].id;
        
    }
    
    startCountDown(){
        return setInterval(()=> {
            this.timeRemaining--;
            this.timer.innerHTML = this.timeRemaining;
            if(this.timeRemaining === 0)
                this.gameOver();
        },1000)
    }
    
    gameOver(){
        clearInterval(this.countDown);
        this.audioController.gameOver();
        document.getElementById('lose-text').classList.add('visible');
    }
    
    gameVictory(){
        clearInterval(this.coundDown);
        this.audioController.victory();
        document.getElementById('win-text').classList.add('visible');
    }
    
    shuffleCards(){
        for(let i = this.cardsArray.length-1;i>0;i--){
            let randIndex = Math.floor(Math.random() * (i+1));
            this.cardsArray[randIndex].style.order = i;
            this.cardsArray[i].style.order = randIndex;
        }
    }
    
    canClickCard(card){
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
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
            game.clickCard(card);
        });
    });
}

