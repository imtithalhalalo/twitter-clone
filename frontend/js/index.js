const popup_sign_up = this.document.getElementById('pop-sign-up')
const popup_sign_in = this.document.getElementById('pop-sign-in')

const open_sign_up = this.document.getElementById('open-sign-up')
const open_sign_in = this.document.getElementById('open-sign-in')


const close_sign_up = this.document.getElementById('close-sign-up')
const close_sign_in = this.document.getElementById('close-sign-in')
const container = this.document.getElementById('con')
const openPopupSignUp = () => {
    popup_sign_up.classList.add('open-popup')
    container.classList.add('grey-fade-over')
}

const openPopupSignIn = () => {
    popup_sign_in.classList.add('open-popup')
    container.classList.add('grey-fade-over')
}

open_sign_up.addEventListener('click', openPopupSignUp)
open_sign_in .addEventListener('click', openPopupSignIn)
console.log('Hi')

const closePopupSignUp = () => {
        popup_sign_up.classList.remove('open-popup')
        container.classList.remove('grey-fade-over')
}

const closePopupSignIn = () => {
    popup_sign_in.classList.remove('open-popup')
    container.classList.remove('grey-fade-over')
}
close_sign_up.addEventListener('click', closePopupSignUp)
close_sign_in.addEventListener('click', closePopupSignIn)
