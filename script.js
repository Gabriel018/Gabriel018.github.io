const DisplayText =  document.getElementById('text')
const frase =  ['Ola,Meu nome e Gabriel Dev  ','Curto explorar novas tecnologias 💻 e aproveitá-las para criar coisas interessantes 🛠️']
let i = 0
let j = 0
let isDelete = false
let Frase_Completa = []



const projeto_py = document.querySelector(".projeto_py")

const projeto_js = document.querySelector(".projeto_js")


function exibir(){

  
   if( projeto_py.style.display === "block" ){
    projeto_py.style.display = "none"
    }
     else{
        projeto_py.style.display = "block"
     }
  
 }
 

 function exibir_js(){

  
    if( projeto_js.style.display === "block" ){
     projeto_js.style.display = "none"
     }
      else{
         projeto_js.style.display = "block"
      }
   
  }
  



function loop () {
   DisplayText.innerHTML = Frase_Completa.join('')
   if (i < frase.length){
    
        if ( !isDelete && j <= frase[i].length){
            Frase_Completa.push(frase[i][j])
            j++ 
        }     
        if ( isDelete && j <= frase[i].length){
            Frase_Completa.pop(frase[i][j])
            j--
        } 
        if ( isDelete && j === 0){
            Frase_Completa = []
            isDelete = false
            i++
        }
        if (i === frase.length){
            i = 0
            
        }

        }
        if ( j == frase[i].length){
            isDelete = true  
        }

    const  time = isDelete ? 30 : 80
    setTimeout(loop, time)
}
loop()