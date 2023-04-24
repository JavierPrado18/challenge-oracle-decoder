//para dar valores a las palabras
let lettersKeys="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[]^_{|} "
let lettersInput="abcdefghijklmnopqrstuvwxyz0123456789 ";

//para almacenar las letras con su letra de encriptacion
let encryptedLetters={};
let decryptedLetters={}


//Para que haga un recorrido con las letras y genere las valores de encriptacion para cada letra
for (let i = 0; i < lettersInput.length; i++) {
    const randomIndex=Math.floor(Math.random() *lettersKeys.length)
    
    encryptedLetters[lettersInput[i]]=lettersKeys[randomIndex]
    lettersKeys=lettersKeys.slice(0,randomIndex)+lettersKeys.slice(randomIndex+1);
    
}

//invertimos los valores para que podamos desencriptar 
decryptedLetters=Object.fromEntries(
    Object.entries(encryptedLetters).map(([key, value]) => [value, key])
);

function encript(phrase) {
    let EncrytedLetters=encryptedLetters;
    let messageEncript=""
    //asignamos los valores encriptados segun las letras
    for (let i = 0; i < phrase.length; i++) {
        if(phrase[i] in EncrytedLetters){
            console.log(i);
            console.log(phrase[i]);
            messageEncript=messageEncript + EncrytedLetters[phrase[i]];
            
        }      
    }
    return messageEncript
}

function decript(phrase) {
    let DecrytedLetters=decryptedLetters;
    let messageDecript=''
    //obtenemos los valores desencriptados 
    for (let i = 0; i < phrase.length; i++) {
        if(phrase[i] in DecrytedLetters){
            messageDecript=messageDecript + DecrytedLetters[phrase[i]];
        }
    }
    return messageDecript
}

function copyMessage(message) {
    const text = message.innerText;
    // Copiar el texto al portapapeles del usuario
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('Texto copiado al portapapeles!'+text);
    })
    .catch((err) => {
        console.error('Error al copiar texto: ', err);
    });
}

//variables obtenidos del DOM

let buttonEncrypt= document.getElementById("encript");
let buttonDecrypt= document.getElementById("decript");
let responseMessage=document.getElementById("responseMessage")
let messageNone=document.getElementById("messageNone");
let responseContainer=document.getElementById("responseContainer");
let copyButton=document.getElementById("copyButton")
const tooltip = document.getElementById('tooltip');

//Funciones para encriptar e desencriptar

buttonEncrypt.addEventListener("click",()=>{
    let inputMessage = document.getElementById("inputMessage").value;
    console.log(inputMessage);
    responseMessage.innerText=encript(inputMessage)
    responseContainer.style.display="flex";
    messageNone.style.display="none";
  } 
);

buttonDecrypt.addEventListener("click",()=>{
    let inputMessage = document.getElementById("inputMessage").value;
    console.log(inputMessage);
    responseMessage.innerText=decript(inputMessage)
    responseContainer.style.display="flex";
    messageNone.style.display="none";
  } 
  
);

//evento cuando copiamos un texto
copyButton.addEventListener("click",()=>{
    copyMessage(responseMessage);
    tooltip.style.visibility = 'visible';
    setTimeout(()=>tooltip.style.visibility = 'hidden',2000)
})