const DisplayText =  document.getElementById('text');   
const frase =  ['Ola Mundo','E hora do codigo']
let i = 0
let j = 0

function loop () {


   if (i < frase.length){
    console.log(frase[i]);
    if (j < frase[i].length){
        console.log(frase[i][j]); 
    }
    j++;
    setInterval(loop,500);
}     

    if ( j == frase[i].length){
        i++;
        
    }
}

loop()