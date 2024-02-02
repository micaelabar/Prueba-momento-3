function showLevel2() {
    while (remainingPets > 0) {
        const userResponse = prompt("La pareja te pregunta, Como se llama su hijo\n1.Felipe I.\n2.Marco.\n3.Ismael.\n\nElige una opción (1, 2 o 3):");

        if (userResponse === null) {
          
            alert("¡Hasta luego! Gracias por jugar.");
            return;
        }

        if (userResponse === "1") {
            alert("¡Respuesta correcta! Se casaron en el año 1469.");
            showLevel3(); 
            break;  
        } else if (userResponse === "1" || userResponse === "3") {
            alert("Respuesta incorrecta.");
            eliminatePet();
        } else {
            alert("Respuesta no incorrecta. Por favor, elige una opción válida.");
        }
    }

    if (remainingPets === 0) {
        alert("Lo siento, se han eliminado todas las mascotas. ¡Has perdido el juego!");
        restartGame();
    }
}