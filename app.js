// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde guardaremos los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }

    // Guardamos en el array
    amigos.push(nombre);

    // Limpiamos el input
    input.value = "";

    // Mostramos la lista actualizada
    mostrarLista();

    alert("Amigo/a agregado con éxito!");
}

// Función para mostrar los amigos en pantalla
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar antes de volver a dibujar

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Primero debes agregar al menos un amigo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}


