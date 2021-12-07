/**
* Display é um singleton. Responsável pelo controle de cada dígito.
* Recebe o objeto com o valor, status e mensagem.
* Quando é instanciado, chama o digit.create em loop, que injeta 3 dígitos no HTML. 
* A função render primeiramente seta a classe CSS conforme o status e renderiza a mensagem.
* Então faz um loop pelos caracteres do valor, passando o número correspondente e o identificador do dígito.
* Também contém a função reset que oculta todos os dígitos da tela.
*/

import { Digit, updateDigit } from './Digit.js' 

export function Display() {

	if (typeof Display.instance === 'object') {
		return Display.instance;
	}

    const display = document.querySelector(".display");
    const messageArea = document.querySelector(".display>span");

    for(let i = 0; i<3; i++){
        const digit = new Digit(`digit-${i}`);
        digit.create();
    }
    
	this.render = (renderObj) => {
        
        const {value, status, message} = renderObj;
        display.classList.add(`display--${status}`);
        messageArea.innerHTML = message;

        value.toString().split('').forEach((number, i) => {
            updateDigit(number, i)
        });
        
    }

    this.reset = () => {
        display.classList.remove(`display--error`);
        display.classList.remove(`display--success`);
        document.querySelectorAll('.display__digit').forEach(el=>{
            el.style.display = "none";
        });
    }
	
	Display.instance = this;
}

