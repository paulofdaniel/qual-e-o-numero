/**
* Input seta os listeners referentes ao campo de número, botão enviar e botão de reset.
* Também tem as funções enableForm, disableForm, enableNewGameButton e disableNewGameButton para controle de estado dos botões e formulário.
*/

import {makeAGuess, startGame} from "../../app"

export function Input() {

    const form = document.querySelector(".input-guess>form");
    const input = document.querySelector(".input-guess>form>input");
    const sendButton = document.querySelector(".input-guess>form>button");
    const newGameButton = document.querySelector(".new-game>button");

    form.addEventListener("submit", ev => {
        ev.preventDefault();
    });

    sendButton.addEventListener("click", ev => {

        const value = input.value;

        if(value != "" && (value >= 1 || value <= 300)){
            makeAGuess(input.value);
            input.value = null;
        }
    });

    input.addEventListener("keyup", () => {
        if(input.value > 300){
            input.value = 300;
        }else if(input.value < 1){
            input.value = 1;
        }
    });

    input.onkeyup = function(e){
        if(e.keyCode == 13 || (e.keyCode == 8 && input.value.length == 1)){
          input.value = "";
        }
    };

    newGameButton.addEventListener("click", ev => {
        startGame();
        this.enableForm();
        this.disableNewGameButton();
    });

    this.enableForm = () => {
        sendButton.disabled = false;
        input.disabled = false;
        input.focus();
    }

    this.disableForm = () => {
        sendButton.disabled = true;
        input.disabled = true;
    }

    this.enableNewGameButton = () => {
        newGameButton.disabled = false;
        newGameButton.focus();
    }

    this.disableNewGameButton = () => {
        newGameButton.disabled = true;
    }
}