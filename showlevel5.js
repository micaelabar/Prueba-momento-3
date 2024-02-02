function showLevel5() {
    while (remainingPets > 0) {
        const userResponse = prompt("Gracias a ti La pareja Arragòn ah podido salvarse tienes algo que decir\n1.fue bonito haberles ayudado, espero puedan vivir una vida propesra y feliz\n2.cuidense Adios\n3.hasta siempre\n\nElige una opción (1, 2 o 3):");

        if (userResponse === null) {
            
            alert("¡Hasta luego! Gracias por jugar.");
            return;
        }

        if (userResponse === "1") {
            alert("¡Respuesta correcta! cuidate y muchas gracias tus amigos Isabela y Fernado");
            
            alert("¡Felicidades! Has salvado a Isabel y Fernado. Gracias por jugar.");
            
            restartGame();
            return;
        } else if (userResponse === "2" || userResponse === "3") {
            alert("Respuesta incorrecta. no seas tan frio");
            eliminatePet();
        } else {
            alert("Respuesta no válida. nunca los volveras a ver");
        }
    }

    if (remainingPets === 0) {
        alert("Lo siento, se han eliminado todas las mascotas. ¡Has perdido el juego!");
        restartGame();
    }
}