const qrinput=document.getElementById('qr-input');
const qrimg=document.getElementById('qr-img');
const qrbutton=document.getElementById('qr-button');

console.log(qrinput,qrimg,qrbutton)

qrbutton.addEventListener('click', () =>{
    const inputvalue = qrinput.value;

    if(!inputvalue){
        alert('Please Enter Valid Url');
        return;
    }
    else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
        qrimg.alt = `QR CODE FOR ${inputvalue}`;
    }
});