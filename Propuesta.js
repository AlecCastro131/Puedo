document.getElementById('answer-button').addEventListener('click', function() {
    var answer = document.getElementById('answer-input').value;
    console.log('Respuesta: ' + answer);

    if (answer === "Si") {
        alert('Gracias por darme otra oportunidad, no te voy a decepcionar, te voy a amar como te lo mereces y voy a dar lo mejor de mi 😁.');
    } else if (answer === "No") {
        alert('Lo intente, tal vez no era el momento aún, gracias, tal vez debi esperar un poco más 🙂.');
    } else {
        alert('Solo acepta un "Si" o un "No"');
    }
});