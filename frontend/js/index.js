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
open_sign_in.addEventListener('click', openPopupSignIn)

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


//SignUp
const createBtn = document.getElementById("close");
const fullname = document.getElementById("name");
const password = document.getElementById("password");
const email = document.getElementById("email");
const success = document.getElementById("success");
const genderSelect = document.querySelectorAll('input[name="gender"]');
let gender;


const getGender = () => {
    for (i = 0; i < genderSelect.length; i++) {
        if (genderSelect[i].checked) {
            gender = genderSelect[i];
        }
    }
}

const createdSuccessfully = () => {
    success.style.color = "#4bb543";
    success.innerText = "Account Created!"
};

const failedToCreate = () => {
    success.style.color = "#FC100D";
    success.innerText = "Retry please!"
};
const signUp = (e) => {
    getGender();
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", fullname.value);
    formData.append("password", password.value);
    formData.append("email", email.value);
    formData.append("month", month_box.value);
    formData.append("date", days_box.value);
    formData.append("year", years_box.value);
    formData.append("gender", gender.value);
    fetch(`http://localhost/twitter-clone/backend/signup.php `, {
        method: 'POST',
        body: formData
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data)
        console.log('Hi')
        if (data['success'] == true) {
            popup_sign_up.classList.remove('open-popup')
            container.classList.remove('grey-fade-over')
        }
        else alert("sign up error")
    });
    
}
createBtn.addEventListener("click", signUp);



const store = () => {
    localStorage.setItem('email', email.value)
}
//login 
const loginBtn = document.getElementById("login-btn");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
function login(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("email", loginEmail.value);
    formData.append("password", loginPassword.value);
    fetch(`http://localhost/twitter-clone/backend/login.php`, {
        method: 'POST',
        body: formData
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data)
        if (data['success'] == true) {
            store();
            location.href = "./feed.html"
        }
        else alert("login error")
    });
}
loginBtn.addEventListener("click", login)