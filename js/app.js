document.getElementById('añadir').addEventListener('click', function() {
    const title = document.getElementById('card-titulo').value;
    const description = document.getElementById('card-descripcion').value;
    const imagenUrl = document.getElementById('card-url').value;

    if (title && description && imagenUrl) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${imagenUrl}" alt="${title}">
            <h3 ondblclick="editartitulo(this)">${title}</h3>
            <p ondblclick="editardescrip(this)">${description}</p>
            <button onclick="eliminar(this)">eliminar</button>
        `;
        document.getElementById('cardContainer').appendChild(card);

        document.getElementById('card-titulo').value = '';
        document.getElementById('card-descripcion').value = '';
        document.getElementById('card-url').value = '';
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

function editartitulo(element) {
    const nuevotitulo = prompt("Edita el título:", element.innerText);
    if (nuevotitulo) {
        element.innerText = nuevotitulo;
    }
}

function editardescrip(element) {
    const nuevadesp = prompt("Edita la descripción:", element.innerText);
    if (nuevadesp) {
        element.innerText = nuevadesp;
    }
}

function eliminar(element) {

    element.parentElement.remove();
}
