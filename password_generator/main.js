//I created this mini-task to show how fast and easy you can create a mini application to generate code. I am aware that there are better ways to make such an application


const btnGenerate = document.querySelector('.generate');
const section = document.querySelector('section');

const charsNumber = 16;

const passwordGenerator = () =>{
        
    let password = "";        

    for(let i=0; i<charsNumber; i++){
        password += getRandomChar();
        document.getElementById('result').value = password;
    }

}

function getRandomChar(){
    return String.fromCharCode(Math.floor(Math.random()*93)+33);
}

btnGenerate.addEventListener('click', passwordGenerator);