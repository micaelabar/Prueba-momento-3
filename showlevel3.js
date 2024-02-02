function showLevel3() {
    while (remainingPets > 0) {
        const userResponse = prompt("Te encuentras en el tercer nivel.Responde la siguiente pregunta, ¿Qué evento histórico significativo ocurrió en 1492 durante el reinado de los Reyes Católicos? :\n1.El consejero judío de los Reyes Católicos fue Isaac Abravanel. \n2.En 1492, ocurrieron varios eventos significativos, incluyendo la firma del Edicto de Expulsión de los Judíos y el viaje de Cristóbal Colón que llevó al descubrimiento de América.\n3.Isabel y Fernando por el Papa tras la victoria en Granada.\n\nElige una opción (1, 2 o 3):");

        if (userResponse === null) {
          
            alert("¡Hasta luego! Gracias por jugar.");
            return;
        }

        if (userResponse === "2") {
            alert("¡Respuesta correcta! En 1492, ocurrieron varios eventos significativos, incluyendo la firma del Edicto de Expulsión de los Judíos y el viaje de Cristóbal Colón que llevó al descubrimiento de América.");
            
        } else if (userResponse === "1" || userResponse === "3") {
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