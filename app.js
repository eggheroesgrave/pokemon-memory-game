document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'charmander',
            img: 'images/charmander.png'
        },
        {
            name: 'charmander',
            img: 'images/charmander.png'
        },
        {
            name: 'squirtle',
            img: 'images/squirtle.png'
        },
        {
            name: 'squirtle',
            img: 'images/squirtle.png'
        },
        {
            name: 'bulbasaur',
            img: 'images/bulbasaur.png'
        },        {
            name: 'bulbasaur',
            img: 'images/bulbasaur.png'
        },        {
            name: 'treecko',
            img: 'images/treecko.png'
        },        {
            name: 'treecko',
            img: 'images/treecko.png'
        },        {
            name: 'torchic',
            img: 'images/torchic.png'
        },        {
            name: 'torchic',
            img: 'images/torchic.png'
        },        {
            name: 'mudkip',
            img: 'images/mudkip.png'
        },        {
            name: 'mudkip',
            img: 'images/mudkip.png'
        }
    ]

    cardArray.sort(() => Math.random() - 0.5)

    //function shuffle(array) {
    // for (let i = cardArray.length - 1; i > 0; i--) {
    //     let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    
    //     // swap elements array[i] and array[j]
    //     // we use "destructuring assignment" syntax to achieve that
    //     // you'll find more details about that syntax in later chapters
    //     // same can be written as:
    //     // let t = array[i]; array[i] = array[j]; array[j] = t
    //     [cardArray[i], cardArray[j]] = [cardArray[j], Cardrray[i]];
    // }
     // }

    const resultDisplay = document.querySelector('#result')
    const grid = document.querySelector('.grid')
    var cardsChosen = [ ]
    var cardsChosenId = [ ]
    var cardsWon = [ ]

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/pikachu.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if ( cardsChosen[0] == cardsChosen[1] ) {
            alert('It\'s a match!')
            cards[optionOneId].setAttribute('src', 'images/ditto.png')
            cards[optionTwoId].setAttribute('src', 'images/ditto.png')
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute('src', 'images/pikachu.png')
            cards[optionTwoId].setAttribute('src', 'images/pikachu.png')
            alert('Nope, not the same')
        }

        cardsChosen = [ ]
        cardsChosenId = [ ]
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Game Over! You Win!'
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosenId.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }



    createBoard()
})