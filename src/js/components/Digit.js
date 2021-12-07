/**
* Digit recebe um nome ao ser instanciado, para identificação.
* Na função create, são criados os elementos necessários para ele como o corpo do dígito e cada seguimento. (<div class="display__segment"><span></span></div>)
* Em seguida os elementos são injetados no HTML.
* Na função updateDigit, cada seguimento que deve ficar visível recebe uma classe CSS modificadora "--active", da seguinte maneira:
* O número recebido é encontrado na tabela "segmentCode", então um loop é feito no array do índice correspondente.
* O objeto "segmentCode" contem os estados dos seguimentos de cada dígito (0 ou 1), começando pelo do topo e indo em sentido horário, sendo que o do meio é o último.
* Para cada valor (0 ou 1) do array de números, o seguimento recebe ou não a classe modificadora;
*/


export function Digit(name){

    this.reset = () => {
        document.querySelectorAll(`.${name}>.display__segment`).forEach(el=>{
            el.classList.remove("display__segment--active");
        });
    }

    this.create = () =>{

        const display = document.querySelector(".display");
    
        const displayDigit = document.createElement("div");
        displayDigit.className = `${name} display__digit`;
        displayDigit.style.display = "none";

        const segmentOff = document.createElement("div");
        segmentOff.innerHTML = "<span></span>";
        segmentOff.className = "display__segment";

        display.appendChild(displayDigit);
        
        for(let i=0; i<7; i++){
            displayDigit.appendChild(segmentOff.cloneNode(true));
        }
    }
}

export function updateDigit(digitValue, digitId){

    const segments = document.querySelectorAll(`.digit-${digitId}>.display__segment`);
    
    segments.forEach(el => {
        el.classList.remove("display__segment--active");
    });

    segmentCode[digitValue].forEach((seg,i) => {
        if(seg == "1"){
            segments[i].classList.add("display__segment--active");
        }
    });

    document.querySelector(`.digit-${digitId}`).style.display = "block";
}

/**
*Representação dos segmentos ativos ou não para cada número.
*/
const segmentCode = {
    0: ['1','1','1','1','1','1','0'],
    1: ['0','1','1','0','0','0','0'],
    2: ['1','1','0','1','1','0','1'],
    3: ['1','1','1','1','0','0','1'],
    4: ['0','1','1','0','0','1','1'],
    5: ['1','0','1','1','0','1','1'],
    6: ['1','0','1','1','1','1','1'],
    7: ['1','1','1','0','0','0','0'],
    8: ['1','1','1','1','1','1','1'],
    9: ['1','1','1','1','0','1','1']
}

