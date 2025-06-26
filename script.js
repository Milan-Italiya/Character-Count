const TextareaEle = document.querySelector('#textarea')
const totalchar = document.querySelector('.total-char')
const RemainChar = document.querySelector('.remaining-char')
TextareaEle.addEventListener('keyup',()=>{
    updatecounter()
})

function updatecounter(){
    totalchar.innerText = TextareaEle.value.length

    RemainChar.innerText = TextareaEle.getAttribute('maxlength') - TextareaEle.value.length
}