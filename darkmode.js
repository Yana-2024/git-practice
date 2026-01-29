
let Darkmode=localStorage.getItem("Darkmode"); //retrieving Darkmode value from local storage
const themeSwitch= document.getElementById("theme-switch"); //getting the button element

const enableDarkmode=()=>{
    document.body.classList.add("Darkmode"); //adding Darkmode class to body
    localStorage.setItem("Darkmode","active"); //to remember the mode preference, setting Darkmode value to active in local storage
}   

const disableDarkmode=()=>{
    document.body.classList.remove("Darkmode"); //removing Darkmode class from body
    localStorage.setItem("Darkmode",null); //to remember the mode preference, setting Darkmode value to null in local storage
}

if (Darkmode ==="active") enableDarkmode(); //enables dark mode if its stored in the local storage (previously selected by user)

themeSwitch.addEventListener("click",()=>{
    Darkmode= localStorage.getItem("Darkmode"); //retrieving mode value from local storage again when button is clicked (to get updated value)
    Darkmode !== "active"? enableDarkmode() : disableDarkmode(); //when clicked, check if Darkmode is active or not. If not active, enable it, else disable it.
})
