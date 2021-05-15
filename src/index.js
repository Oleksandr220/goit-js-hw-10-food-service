import cardsTpl from './teamplates/food-cards.hbs'
console.log(cardsTpl)
import cardsMenu from './menu.json'

const menuRef = document.querySelector('.js-menu')
const themeSwitchToggle = document.querySelector('.theme-switch__toggle')
const cardsMurcup = createCardsMenu(cardsMenu)

menuRef.insertAdjacentHTML('beforeend', cardsTpl)

function createCardsMenu(cardsMenu){
    return cardsTpl(cardsMenu)
}