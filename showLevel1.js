let remainingPets = 4;

function showLevel1() {
    while (remainingPets > 0) {
        const userResponse = prompt("Te has hecho pasar por un gran reino, ellos te pediran ayudaran te piden tu opinio sobre la su casamiento?\n1.Se casaron en 1469\n2.Se casaron 2000\n3.Se casaron 1979\n\nElige una opción (1, 2 o 3):");

        if (userResponse === null) {
           
            alert("¡Hasta luego! Gracias por jugar.");
            return;
        }

        if (userResponse === "1") {
            alert("¡Correcto! Los reyes te felicitan y confiaran en ti para poder seguir con sus investigaciones.");
            showLevel2();
            break;  
        } else if (userResponse === "2") {
            alert("Respuesta incorrecta. Los Reyes te toma como un ignorante y te sacan de su hogar");
            eliminatePet();
        } else if (userResponse === "3") {
            alert("Respuesta incorrecta. Isabel y Fernado desconfian de ti ya que no piensas, como ellos te piden amablemente que te vayas");
            eliminatePet();
        } else {
            alert("Respuesta no válida. Por favor, elige una opción válida.");
        }
    }

    if (remainingPets === 0) {
        alert("Lo siento, se han eliminado todas las mascotas. ¡Has perdido el juego!");
        restartGame();
    }
}

function eliminatePet() {
   
    const pets = {
        Conejo: "el conejo de la familia Aragòn ha muerto",
        Vaca: "la vaca de la familia Aragòn se escapó al ver a sus dueños tan enojados",
        Caballo: "el caballo de la familia Aragòn murio debido a la radiacion que habia en casa",
        Lobo: "el lobo no soporto las pruebas que se hacian se le cayeron las plumas y murio"
        
    };

    if (remainingPets > 0) {
        const randomIndex = Math.floor(Math.random() * Object.keys(pets).length);
        const eliminatedPet = Object.keys(pets)[randomIndex];
        remainingPets--;

        console.log(pets[eliminatedPet]);
    }
}

function restartGame() {
    
}


showLevel1();