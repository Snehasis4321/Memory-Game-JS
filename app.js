document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            name: 'cat1',
            img: '100x100px/cat1.png'
        },
        {
            name: 'cat2',
            img: '100x100px/cat2.jpg'
        },
        {
            name: 'cat3',
            img: '100x100px/cat3.jpg'
        },
        {
            name: 'cat4',
            img: '100x100px/cat4.jpg'
        },
        {
            name: 'cat5',
            img: '100x100px/cat5.jpg'
        },
        {
            name: 'cat6',
            img: '100x100px/cat6.jpg'
        },
        {
            name: 'cat1',
            img: '100x100px/cat1.png'
        },
        {
            name: 'cat2',
            img: '100x100px/cat2.jpg'
        },
        {
            name: 'cat3',
            img: '100x100px/cat3.jpg'
        },
        {
            name: 'cat4',
            img: '100x100px/cat4.jpg'
        },
        {
            name: 'cat5',
            img: '100x100px/cat5.jpg'
        },
        {
            name: 'cat6',
            img: '100x100px/cat6.jpg'
        },
    ]
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector("#result")

    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    // create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', '100x100px/blank1.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }
    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert("You found a match")
            cards[optionOneId].setAttribute('src', '100x100px/blank.png')
            cards[optionTwoId].setAttribute('src', '100x100px/blank.png')
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute('src', '100x100px/blank1.png')
            cards[optionTwoId].setAttribute('src', '100x100px/blank1.png')
            alert('Please Try Again.')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length == cardArray.length / 2) {
            resultDisplay.textContent = ' Congratulations! You found all of them'
        }
    }
    // flip card 
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard()
})