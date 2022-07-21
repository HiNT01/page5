let btnOpenNav = document.querySelector('.content__search-menu')
let btnCloseNav = document.querySelector('.nav__btn-close')
let modal = document.querySelector('.moblie__left')
function showMenuMobile() {modal.classList.add('open__left')}
 {btnOpenNav.addEventListener('click',showMenuMobile)}

function hiddenMenuMobile() {
    modal.classList.remove('open__left')
}
btnCloseNav.addEventListener('click',hiddenMenuMobile);
modal.addEventListener('click',hiddenMenuMobile)
let modalconatainer = document.querySelector('.nav')
modalconatainer.addEventListener('click',function(event) {
    event.stopPropagation()
})


let btnOpenRight = document.querySelector('.content__search-mess')
let btnCloseRight= document.querySelector('.account__btn-close')
let modalRight = document.querySelector('.moblie__right')
function showAccountMobile() {modalRight.classList.add('open__right')}
 {btnOpenRight.addEventListener('click',showAccountMobile)}

function hiddenAccountMobile() {
    modalRight.classList.remove('open__right')
}
btnCloseRight.addEventListener('click',hiddenAccountMobile);
modalRight.addEventListener('click',hiddenAccountMobile)
let modalconatainerRight = document.querySelector('.right')
modalconatainerRight.addEventListener('click',function(event) {
    event.stopPropagation()
})