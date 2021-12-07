/**
* Storage é um singleton recebe o objeto da requisição, trata e armazena o número para uso posterior do CheckNumber
* A função createNumberObj chama o ApiService para requisitar o número e o retorna.
* A função getNumberObj retorna o número anteriormente requisitado para a API
*/

import { ApiService } from '../api/ApiService'

export function Storage(){
    
    if (typeof Storage.instance === 'object') {
		return Storage.instance;
	}

    const api = new ApiService();
    let numberObj = null;

    this.createNumberObj = async () => {
        numberObj = await api.get();
        return numberObj;
    }

    this.getNumberObj = () => {
        return numberObj;
    }

    Storage.instance = this;
}
