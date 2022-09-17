const popup_edit_profile = this.document.getElementById('pop-edit-profile')

const open_edit_popup = this.document.getElementById('open-edit-popup')

const close_edit_popup = this.document.getElementById('close-edit-profile')

const container = this.document.getElementById('con')
const openPopupEdit = () => {
    popup_edit_profile.classList.add('open-popup')
    container.classList.add('grey-fade-over')
}


open_edit_popup.addEventListener('click', openPopupEdit)

const closePopupEdit = () => {
    popup_edit_profile.classList.remove('open-popup')
    container.classList.remove('grey-fade-over')
}

close_edit_popup.addEventListener('click', closePopupEdit)
