//ELEMENT INITIALIZATION

const fileInput = document.querySelector(".file-input");
var chooseImgBtn = document.querySelector(".choose-image");
var chooseImg = document.querySelector("#image"); 
var previewImg = document.querySelector(".preview img");

// DISPLAY INPUT FILE 

const loadImage = () => {
    let file = fileInput.files[0];
    if(!file) return;
    console.log(file);
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", ()=>{
        document.querySelector(".container").classList.remove("disable");
    });
}

// DISPLAY INPUT FILE 

fileInput.addEventListener("change", loadImage);


// IMAGE AND BTN CLICK TO INPUT FILE

chooseImgBtn.addEventListener("click", () => fileInput.click());
chooseImg.addEventListener("click", () => fileInput.click());


// DARK MODE FUNCTIONS 

function darkMode(){

    
    swal("SUCCESS", "Dark Mode Activated", "success");


    var conBg = document.getElementById("containerbg");
    var darkModeImg = document.getElementById("sun-moon");

    conBg.style.backgroundColor = "black";
    document.body.style.backgroundColor = "#2b2b2b";
    darkModeImg.style.color = "black";
    
    document.getElementById('light-mode-id').style.display = "none";
    document.getElementById('dark-mode-id').style.visibility = "visible";
        
}

// BACK TO LIGHT MODE FUNCTIONS

function lightMode(){

    swal("SUCCESS", "Light Mode Activated", "success");

    var conBg = document.getElementById("containerbg");
    var darkModeImg = document.getElementById("sun-moon");

    conBg.style.backgroundColor = "white";
    document.body.style.backgroundColor = "rgb(224, 239, 251)";
    darkModeImg.style.color = "#ccc";

    document.getElementById('light-mode-id').style.display = "block";
    document.getElementById('dark-mode-id').style.visibility = "hidden";
}


function resetimg() {

    swal("SUCCESS", "Image Successfully removed", "success");

    document.getElementById('image').src = "image-placeholder.jpg";
}  
