// VAlidation


const commentForm = document.querySelector("#comment-form")
const nameInput = document.querySelector("#name-input")
const nameError = document.querySelector("#name-error")
const emailInput = document.querySelector("#email-input")
const emailError = document.querySelector("#email-error")
const messageInput = document.querySelector("#message-input")
const messageError = document.querySelector("#message-error")
const submitBtn = document.querySelector("#submit-button")

commentForm?.addEventListener("submit", function(event){
    event.preventDefault()
    setSucces()
})


submitBtn.addEventListener("click", checkInputs)
function checkInputs(){
    if(nameInput.value === ""){
        nameError.innerText = "Please enter your name!"
    }else{
        nameError.innerText = "Well Done!"
        nameError.style.color = "green"
    }

    if(emailInput.value === "" ){
        emailError.textContent = "Please enter yor email!"
    } else if(!validateEmail(emailInput.value)){
        emailError.textContent = "Please enter a valid email!"
    }else{
        emailError.textContent = "Good Job!"
        emailError.style.color = "green"
    }

    if(messageInput.value === ""){
        messageError.innerText = "Please enter your message!"
    } else{
        messageError.innerText = "Thank you for your message!"
        messageError.style.color = "green"
    } 
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}