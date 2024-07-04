function totalPrens(persona){
    let gPPersona = 1.25;
    return persona * gPPersona;
}

function totalFlor(persona){
    let gFPersona = 0.5;
    return persona * gFPersona;
}


function calcular(){
    let elegir = prompt(`Bienvenido al calculador de cannabis para cocinar! \n Primero contanos, vas a cocinar con: \n 1. prensadito \n 2. flores \n (Ingresá el número correspondiente a la opción correcta)`);
    if (elegir === '1' ){
        let persona = prompt(`Se hace lo que se puede, pero, ¿para cuántas personas querés cocinar? \n \n (Valores calculados en base a una persona de aprox 165cm y 70kg.)`);
        if (isNaN(persona) || persona <= 0){
            alert(`Ingresá un valor numérico por favor.`)
        } else {
        let totalCanna = totalPrens(persona);
        alert(`Si vas a cocinar para ${persona} personas, necesitás ${totalCanna} gramos de prensado.\n \n Te recomendamos descartar el producto una vez hecha la extracción ya que suele contener muchas partes molestas al consumir...\n y que asquito e.e `); 
        }
    } else if(elegir === '2'){
        let persona = prompt(`Bien ahí! ¿Para cuántas personas querés cocinar? \n \n (Valores calculados en base a una persona de aprox 165cm y 70kg.)`);
        if (isNaN(persona) || persona <= 0){
            alert(`Ingresá un valor numérico por favor.`)
        } else {
        let totalCanna = totalFlor(persona)
        alert(`Si vas a cocinar para ${persona} personas necesitás ${totalCanna} gramos de flores. \n \n Si son de buen pegue seguramente deberías usar un poquito menos y viceversa. Podés usar manicura fina reemplazando 1g de flores por 1.8g de manicura`)
        }
    } else if(elegir !== null && elegir !== undefined){
        alert(`Ingresá un valor numérico por favor.`)
    }
}

calcular();
