const DisplayText =  document.getElementById('text')
const frase =  ['Ola,Meu nome e Gabriel SantAnna, trabalho com programação a um tempo, Curto explorar novas tecnologias 💻 e aproveitá-las para criar coisas interessantes 🛠️ utilizando tecnologias como .NET,Python,JS,Angular..']
let i = 0
let j = 0
let isDelete = false
let Frase_Completa = []

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
        // if ( j == frase[i].length){
        //     isDelete = true  
        // }

    const  time = isDelete ? 20 : 60
    setTimeout(loop, time)
}
loop()


document.getElementById("btn-csharp").addEventListener("click", () => {
    const cardsCsharp = document.getElementById("card-sharp");
  
    // Exibir ou esconder os cards
    if (cardsCsharp.style.display === 'none' || cardsCsharp.style.display === '') {
      cardsCsharp.style.display = 'flex';
    } else {
      cardsCsharp.style.display = 'none';
    }
  
    // Carregar o conteúdo do arquivo HTML externo
    fetch('cards/cards-cscharp.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro ao carregar arquivo: ${response.statusText}`);
        }
        return response.text();
      })
      .then(html => {
        cardsCsharp.innerHTML = html; // Insere o conteúdo no container
      })
      .catch(err => console.error('Erro ao carregar os cards:', err));
  });
  