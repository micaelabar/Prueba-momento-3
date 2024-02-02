function starGame() {
    alert("¡Isabel y Fernando  renunciaron a varios aspectos durante su reinado, pero una de las decisiones más significativas fue la promulgación del Edicto de Granada en 1492, que marcó el final de la Reconquista y la expulsión de los moriscos de Granada.!");
  
    const confirmacion = confirm("Ayuda a la familia Aragón a cambiar su destino y escapar del manto de la muerte, viajaremos al pasado a ayudarles con la sabiduria del presente.");
    
    if (confirmacion) {
      alert("¡Excelente! Cambiemos todo de la historia, este juego ayudara a tomar las decisiones, correctas pero ojo, por cada pregunta erronea una de las mascotas de la familia Aragòn morira y por ende nuestros personajes");
  
    
      showLevel1();
    } else {
      alert("¡Hasta luego! Si cambias de opinión, recarga la página para volver a intentarlo.");
    }
  }