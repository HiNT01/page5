let btnOpenMenu = document.querySelector('.content__search-menu')
console.log(btnOpenMenu)
let btnCloseMenu = document.querySelector('.nav__btn-close')
let modalMenu = document.querySelector('.nav1')
function showMenu() {modalMenu.classList.add('drop')}
 {btnOpenMenu.addEventListener('click',showMenu)}

function hiddenMenu() {
    modalMenu.classList.remove('drop')
}
btnCloseMenu.addEventListener('click',hiddenMenu);