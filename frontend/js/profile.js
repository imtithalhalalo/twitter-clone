const popup_edit_profile = this.document.getElementById('pop-edit-profile')

const open_edit_popup = this.document.getElementById('open-edit-popup')

const close_edit_popup = this.document.getElementById('close-edit-profile')
const profile_name = document.getElementById('profile-name')
const days = document.getElementById('days_box')
const months = document.getElementById('month_box')
const years = document.getElementById('years_box')
const cover_input = document.getElementById('cover-input')
const profile_input = document.getElementById('profile-input')

let base64Profile;
let base64Cover;
const container = this.document.getElementById('con')
const openPopupEdit = () => {
    popup_edit_profile.classList.add('open-popup')
    
}


open_edit_popup.addEventListener('click', openPopupEdit)

const closePopupEdit = () => {
    popup_edit_profile.classList.remove('open-popup')
    
}

close_edit_popup.addEventListener('click', closePopupEdit)

const save = document.getElementById('save');
save.addEventListener('click', editProfile = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", profile_name.value);
    formData.append("user_id", localStorage.getItem('user_id'));
    formData.append("day", days.value);
    formData.append("month", months.value);
    formData.append("year", years.value);
    formData.append("base64Profile", base64Profile);
    formData.append("base64Cover", base64Cover);

    fetch(`http://localhost/twitter-clone/backend/edit_profile.php `, {
        method: 'POST',
        body: formData
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        if (data['success'] == true) {
           console.log(data); 
           alert('Profile Updated Successfully!')
        }
        else alert("error")
    });
})

function encodeImage(e) {
    e.preventDefault();
    let file = this.files[0];
    let reader = new FileReader();
    reader.onloadend = function() {
       base64String= reader.result;
    }
    reader.readAsDataURL(file);

  }
  cover_input.addEventListener("change",encodeImage)
  profile_input.addEventListener("change",encodeImage)