document.getElementById('boton-agregar-tarjeta').addEventListener('click', function() {
  const nuevaTarjeta = document.createElement('div');
  nuevaTarjeta.className = 'tarjeta';

  const titulo = document.createElement('h2');
  titulo.setAttribute('contenteditable', 'true');
  titulo.textContent = 'Título de la Tarjeta';
  nuevaTarjeta.appendChild(titulo);
  
  const imagen = document.createElement('img');
  imagen.setAttribute('src', 'https://images.pagina12.com.ar/styles/focal_16_9_960x540/public/2021-12/296121-gato-andino-_0.jpg?h=ada05aa9&itok=D8n8mdev');
  nuevaTarjeta.appendChild(imagen);
  
  const descripcion = document.createElement('p');
  descripcion.setAttribute('contenteditable', 'true');
  descripcion.textContent = 'Descripción de la Tarjeta';
  nuevaTarjeta.appendChild(descripcion);
  
  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'X';
  nuevaTarjeta.appendChild(botonEliminar);
  
  document.getElementById('contenedor-tarjetas').appendChild(nuevaTarjeta);

  botonEliminar.addEventListener('click', function() {
    nuevaTarjeta.remove();
  });
});
