// swiper

var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}

// accordian

const accordBtn = document.querySelector(".accordian-button");

accordBtn.addEventListener("click", () => {

    let content = accordBtn.previousElementSibling;
    
    if(content.style.height){
        content.style.height = null
    }else{
        content.style.height = content.scrollHeight + "px"
    }
    console.log(content)
})


// dark mode

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}


// sign Up

const form = document.getElementById("form");
const userName = document.getElementById("userName");
const number = document.getElementById("number");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    checkInput()
})

function checkInput () {
    const userNameValue = userName.value.trim();
    const numberValue = number.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    

    if(userNameValue === ""){
        setError(userName, "این فیلد نمیتواند خالی باشد")
    } else{
        setSuccess(userName)
    }

    if(numberValue === ""){
        setError(number, "این فیلد نمیتواند خالی باشد")
    } else{
        setSuccess(number)
    }

    if(emailValue === ""){
        setError(email, "ایمیل نمیتواند خالی باشد")
    }
    else{
        setSuccess(email)
    }

    if(passwordValue === "") {
        setError(password, "این فیلد نمیتواند خالی باشد")
    } else{
        setSuccess(password)
    }
}

function setError (input, message) {
    const formControl = input.parentElement;

    const span = formControl.querySelector("span");
    span.innerHTML = message;
    formControl.className = "form-controll error"
}

function setSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = "form-controll success"

}