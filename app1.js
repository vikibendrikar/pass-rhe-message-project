//variable

const message = document.getElementById('message');
const text = document.getElementById('text');
const send = document.getElementById('send');
const clear = document.getElementById('clear');

//click event

send.addEventListener('click',deliverMessage);

function deliverMessage (){
    
    let textvalue = text.value;
    // alert(textvalue);
    message.innerText = textvalue ;
}

//second click event

clear.addEventListener('click',clearfield);

function clearfield (){
    message.innerText='';
    text.value='';
}