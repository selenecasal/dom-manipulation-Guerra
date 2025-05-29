document.getElementById('addCardButton').addEventListener('click', function() {
    const title = document.getElementById('cardTitle').value;
    const description = document.getElementById('cardDescription').value;
    const imageUrl = document.getElementById('cardImageUrl').value;

    if (title && description && imageUrl) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${imageUrl}" alt="${title}">
            <h3 ondblclick="editCardTitle(this)">${title}</h3>
            <p ondblclick="editCardDescription(this)">${description}</p>
            <button onclick="deleteCard(this)">×</button>
        `;
        document.getElementById('cardContainer').appendChild(card);

        // Limpiar los campos del formulario
        document.getElementById('cardTitle').value = '';
        document.getElementById('cardDescription').value = '';
        document.getElementById('cardImageUrl').value = '';
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

function editCardTitle(element) {
    const newTitle = prompt("Edita el título:", element.innerText);
    if (newTitle) {
        element.innerText = newTitle;
    }
}

function editCardDescription(element) {
    const newDescription = prompt("Edita la descripción:", element.innerText);
    if (newDescription) {
        element.innerText = newDescription;
    }
}

function deleteCard(element) {
    element.parentElement.remove();
}
