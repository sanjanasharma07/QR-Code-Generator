let qrText = document.querySelector("#qrText");
let qrImage = document.querySelector("#qrImage");
let btn = document.querySelector("#btn");
let qrContainer = document.querySelector(".qrContainer");

btn.addEventListener("click",()=>{
    if(qrText.value.length >0){
        qrImage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qrContainer.classList.add("show");
    }else {
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000);
    }
})