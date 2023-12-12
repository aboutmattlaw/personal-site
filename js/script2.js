
document.querySelector(".form").addEventListener("submit", gotoGoogle);       
function gotoGoogle(e){
    e.preventDefault()
    console.log(e)
    console.log(e.target.term.value)
    let term = e.target.term.value
    const searchUrl = `https://www.google.com/search?q=${term}+site%3Ahttps%3A%2F%2Fdeveloper.mozilla.org%2F+OR+site%3Ahttps%3A%2F%2Fwww.w3schools.com`
    console.log(searchUrl)
    window.location.href=searchUrl
}



document.querySelector(".form").addEventListener("submit", gotoGoogleJob);       
function gotoGoogleJob(e){
    e.preventDefault()
    console.log(e)
    console.log(e.target.term.value)
    let term = e.target.term.value
    const searchUrl = `https://www.google.com/search?q=${term}+site%3Ahttps%3A%2F%2Fgreenhouse.iom%2F+OR+site%3Ahttps%3A%2F%2FMyworkdayjobs.com%2F+OR+site%3Ahttps%3A%2F%2Fapply.workable.com%2F+OR+site%3Ahttps%3A%2F%2Flever.co`
    console.log(searchUrl)
    window.location.href=searchUrl
}




const time = new Date().getHours();
let greeting;
if (time < 12) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

