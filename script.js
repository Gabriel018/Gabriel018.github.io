const DisplayText =  document.getElementById('text');   
const frase =  ['Ola,Meu nome e Gabriel {Duke}']
let i = 0
let j = 0
let isDelete = false
let Frase_Completa = []
function loop () {
   DisplayText.innerHTML = Frase_Completa.join('')
   if (i < frase.length){
    

        if ( !isDelete && j <= frase[i].length){
            Frase_Completa.push(frase[i][j])
            j++ 
            console.log('Adicionando')  
        }     
        if ( isDelete && j <= frase[i].length){
            Frase_Completa.pop(frase[i][j])
            console.log('Removendo') 
            j--
        } 

        }
    
        if ( j == frase[i].length){
            isDelete = true
            

            
        }
    setTimeout(loop,100);
}



loop()