
let darkmode=localStorage.getItem("darkmode"); //retrieving darkmode value from local storage
const themeSwitch= document.getElementById("theme-switch"); //getting the button element

const enableDarkmode=()=>{
    document.body.classList.add("darkmode"); //adding darkmode class to body
    localStorage.setItem("darkmode","active"); //to remember the mode preference, setting darkmode value to active in local storage
}   

const disableDarkmode=()=>{
    document.body.classList.remove("darkmode"); //removing darkmode class from body
    localStorage.setItem("darkmode",null); //to remember the mode preference, setting darkmode value to null in local storage
}

if (darkmode ==="active") enableDarkmode(); //enables dark mode if its stored in the local storage (previously selected by user)

themeSwitch.addEventListener("click",()=>{
    darkmode= localStorage.getItem("darkmode"); //retrieving mode value from local storage again when button is clicked (to get updated value)
    darkmode !== "active"? enableDarkmode() : disableDarkmode(); //when clicked, check if darkmode is active or not. If not active, enable it, else disable it.
})
