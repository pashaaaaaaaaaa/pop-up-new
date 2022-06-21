let openPopUp = document.querySelector('.pop-up')
let closePopUp = document.querySelector('.pop__up-close')
let popUp = document.querySelector('.pop__up')

openPopUp.addEventListener('click', function(e){
    e.preventDefault()
    popUp.classList.add('active')
})
closePopUp.addEventListener('click', ()=>{
    popUp.classList.remove('active')
})