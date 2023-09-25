function validateData(){
    var errorMsg = document.getElementById("error-msg");
    var email = document.getElementById("email");
    var password = document.getElementById("password")
    var male = document.getElementById("male")
    var female = document.getElementById("female")
    var cb = document.getElementById("terms")
    var phone = document.getElementById("phone")

  if(!email.value.endsWith("@gmail.com")){
        errorMsg.innerHTML = "Email must ends with @gmail.com"
        errorMsg.style.color = "red"
    }else if(!isAlphaNum(password.value)){
        errorMsg.innerHTML = "Password must be alphanumeric"
        errorMsg.style.color = "red"
    }else if (isNaN(phone.value)) {
        errorMsg.innerHTML = "Phone Must Be a Number"
        errorMsg.style.color = "red"
    } else if (phone.value.length!=12) {
        
        errorMsg.innerHTML = "Phone Must Be 12 Number"
        errorMsg.style.color = "red"
   }else if(!male.checked && !female.checked){
        errorMsg.innerHTML = "Gender must be choosed"
        errorMsg.style.color = "red"
    }else if(!cb.checked){
        errorMsg.innerHTML = "Terms & conditions must be agreed"
        errorMsg.style.color = "red"
    }
    else{
        errorMsg.innerHTML = "";
        alert("Data successfully uploaded")
        window.location.href = "home.html";
    }
}

function isAlphaNum(password){
    var isAlpha = false;
    var isNum = false;

    for(let i = 0; i < password.length; i++){
        //1. Alpha
        if(isNaN(password[i])){
            isAlpha = true;
        }
        // 2. Number
        else{
            isNum = true
        }
        // 3. Break
        if(isAlpha && isNum){
            return true;
        }
    }
    return false
}
