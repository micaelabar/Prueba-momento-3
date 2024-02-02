function showLevel4() {
    while (remainingPets > 0) {
        const userResponse = prompt("Te encuentras en el cuarto nivel. Responde la siguiente pregunta, cual fue su titulo :\n1.Titulo de reyes.\n2.Profesores.\n3.O de jardieneros.\n\nElige una opción (1, 2 o 3):");

        if (userResponse === null) {
            
            alert("¡Hasta luego! Gracias por jugar.");
            return;
        }

        if (userResponse === "1") {
            alert("¡Respuesta correcta!  Titulo de reyes.");
          showLevel5();
        } else if (userResponse === "2" || userResponse === "3") {
            alert("Respuesta incorrecta.");
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