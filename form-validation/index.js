const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showError(input, message){
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
    
}

//check email
function isValidEmail(email){
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

function checkRequired(inputArr){

    inputArr.forEach(input => {        
        if(input.value.trim() === ''){
            console.log(input.id)
            showError(input, `${getFieldName(input)} is required`)
        } else{
            showSuccess(input)
        }
    });

}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}


//Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(username.value)


    checkRequired([username, email, password, password2])

    // if(username.value === ''){
    //     showError(username, 'Username is required')
    // } else {
    //     showSuccess(username)
    // }

    // if(email.value === ''){
    //     showError(email, 'Email is required')
    // } else if(!isValidEmail(email.value) ){
    //     showError(email, 'Email is not valid')
    // } else {
    //     showSuccess(email)
    // }

    // if(password.value === ''){
    //     showError(password, 'Password is required')
    // } else {
    //     showSuccess(password)
    // }

    // if(password2.value === ''){
    //     showError(password2, 'Password2 is required')
    // } else {
    //     showSuccess(password2)
    // }


  




})