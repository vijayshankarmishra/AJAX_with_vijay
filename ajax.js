console.log("Ajax Tutorial in one video");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler)

function buttonClickHandler(){
    const xhr = new XMLHttpRequest()

    xhr.open("GET", "vijay.txt", true);

    xhr.onprogress = function(){
        console.log("OnProgress is running");
    }

    xhr.onload = function(){
        console.log(this.responseText);
        
    }

    xhr.send();
}
