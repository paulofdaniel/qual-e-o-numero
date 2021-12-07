/**
* CheckNumber contém a função "check" que recebe o número que o usuário chutou e compara com o valor recebido por Start (getNumberObj).
* Retorna um objeto com o que deve ser renderizado na tela.
*/

import { Storage } from './Storage'

export function CheckNumber() {

    const storage = new Storage();
    const number = storage.getNumberObj().value;

    this.check = (guessNumber) => {
        if(number != null){
            if(number == guessNumber){
                return {
                    value: number,
                    status: 'success',
                    message: "Você acertou!!!!"
                }
            }else if(number < guessNumber){
                return {
                    value: guessNumber,
                    status: 'neutral',
                    message: "É menor"
                }
            }else if(number > guessNumber){
                return {
                    value: guessNumber,
                    status: 'neutral',
                    message: "É maior"
                }
            }
        }
    }
}
