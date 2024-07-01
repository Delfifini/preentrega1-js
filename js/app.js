//* Esto es un calculador de cannabis por persona para cocinar

function totalPrens(persona, gPPersona){
    return persona * gPPersona;
}

function totalFlor(persona, gFPersona){
    return persona * gFPersona;
}


function calcular(){
    let gPPersona = 1.25;
    let elegir = prompt(`Bienvenido al calculador de cannabis de cocina! \n Si tenés prensado elegí "1", si tenés flores elegí "2":`);

    if (elegir === '1'){
        let persona = parseFloat(prompt(`Uy que lástima, pero, ¿para cuántas personas querés cocinar?`));
        let totalCanna = totalPrens(persona, gPPersona);
        alert(`Si vas a cocinar para ${persona} personas, necesitás ${totalCanna} gramos de prensado`); 
    } else if(elegir === '2'){
        let gFPersona = 0.5;
        let persona = parseFloat(prompt(`Bien ahí! ¿Para cuántas personas querés cocinar?`));
        let totalCanna = totalFlor(persona, gFPersona)
        alert(`Si vas a cocinar para ${persona} personas necesitás ${totalCanna} gramos de flores`)
    } else {
        alert(`Alguien ya está re loco, ingresá un valor válido por favor.`)
    }

}

calcular();