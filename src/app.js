/**
* App.js é o JS principal e tem como função instanciar o Display, Input, CheckNumber e Start de novo jogo.
* A função makeAGuess recebe o valor do Input, testa-lo usando o CheckNumber e enviar o objeto de resultado para o Display.
* A função StartGame chama Start e envia o objeto para o Display.
* StartGame também é chamado pelo Reset, quando necessário.
*/

import './styles/style.scss';
import { Start } from './js/components/Start'
import { CheckNumber } from './js/components/CheckNumber'
import { Display } from './js/components/Display';
import { Input } from './js/components/Input';

const start = new Start();
const display = new Display();
const input = new Input();
let checkNumber;

export async function startGame(){
    const newGame = await start.startGame();
    checkNumber = new CheckNumber();

    display.reset();
    display.render(newGame);

    if(newGame.status == "error"){
        input.disableForm();
        input.enableNewGameButton();
    }
};

export function makeAGuess(value){

    const result = checkNumber.check(value);
    display.reset();
    display.render(result);

    if(result.status === "success"){
        input.disableForm();
        input.enableNewGameButton();
    }
}

startGame();