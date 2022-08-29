//Capturar evento de submit do forms
const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Prevenido");
    addPopup();

    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value); //catching values from inputs
    const altura = Number(inputAltura.value);

    if(!altura && !peso){
        addPopup('Peso e Altura invalidos', false);
        return
    }
    if(!peso){
        addPopup('Peso inválido', false);
        return;
    }
    if(!altura){
        addPopup('Altura inválida', false);
        return;
    }
   
    const imc = getImc(peso, altura);
    const levelImc = getImcLevel(imc);
    const msg = `Seu IMC é ${imc} (${levelImc}).`;
     console.log(msg);
    addPopup(msg, true);

})

function getImcLevel(imc){
    const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9) return level[5]
    if(imc >= 34.9) return level[4]
    if(imc >= 29.9) return level[3]
    if(imc >= 24.9) return level[2]
    if(imc >= 18.5) return level[1]
    if(imc < 18.5) return level[0]
    
}
function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// function Result(msg){
//     const resultado = document.querySelector('#resultado');
//     resultado.innerHTML = '';

//     const paragrafo = document.createElement('p');
//     paragrafo.classList.add('paragrafo-resultado');
//     paragrafo.innerHTML = 'paragrafo';
//     resultado.appendChild(paragrafo)
// }

// Add mensage
function addPopup(msg, isValid){
    const popUp = document.querySelector('#popup');
    popUp.classList.add('popupStyle')
    popUp.innerHTML = msg;

    if(isValid){
        document.body.style.backgroundColor = 'green';
    }
    else if(!isValid){
        document.body.style.backgroundColor = 'red';
    }
}