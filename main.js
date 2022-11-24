const signup = document.querySelector("#signup-form");
let span = document.querySelector("span")
const regex = /^[a-zA-Z0-9]{5,12}$/;

signup.addEventListener("submit", (e)=>{
    e.preventDefault()// bu sahifani yangilab yubormedi 
    const inputval = signup.username.value;
    
    if (regex.test(inputval)){
        span.textContent = "Ma'lumotingiz to'g'iri kiritildi"
        span.setAttribute("class", 'togri')
    }else{
        span.textContent = "kiritilgan malumotingiz hato iltimos qayta kiriting"
        span.setAttribute("class", 'xato')
    }
})
// Live feadback
signup.username.addEventListener("keyup", (e)=>{
    if(regex.test(e.target.value)) {
        signup.username.setAttribute('class', 'yashil')
    }else{
        signup.username.setAttribute("class", 'error')
    }
})


