$("#No").click(function(event) {
    event.preventDefault();
    
    var wrongAnswer = new Audio("sounds/wrong answer Sound effect No Copyright.mp3");
    wrongAnswer.play();

    var lastRandomIndex = $(this).data("lastRandomIndex"); 
    var randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * 5);
    } while (randomIndex === lastRandomIndex); 

    $(this).data("lastRandomIndex", randomIndex); 

    switch (randomIndex) {
        case 0: 
            $("#No").text("Respuesta incorrecta");
            break;
        case 1:
            $("#No").text("Segura???");
            break;
        case 2:
            $("#No").text("Presiona 'sí' para confirmar");
            break;
        case 3:
            $("#No").text("Se te resbaló el dedo, intenta de nuevo");
            break;
        case 4:
            $("#No").text("Ya di que sí mi amorr");
            break;
        default:
            break;
    }
});
