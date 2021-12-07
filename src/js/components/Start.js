/**
* Start é responsável por receber o objeto com o número (ou erro) do Storage. 
* Depois, seta o valor inicial do jogo, enviando '0' para o display, limpar a mensagem e cores.
* Retorna um objeto para o App renderizar.
*/

import { Storage } from './Storage'

export function Start(){
    
    const storage = new Storage();
    const container = document.querySelector(".container");

    this.startGame = async () => {

        const numberObj = await storage.createNumberObj();
        container.classList.add("container--visible");

        if(numberObj.status === "error"){
            return numberObj
        }else{
            return {
                value: 0,
                status: 'neutral',
                message: ""
            }
        }
    };
}


