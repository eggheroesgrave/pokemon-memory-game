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

    const grid = document.querySelector('.grid')

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/pikachu.png')
            card.setAttribute('data-id', i)
            //card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    createBoard()
})