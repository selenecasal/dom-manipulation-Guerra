# dom-manipulation-Guerra
# Integrantes:
Selene Guerra ||
Ibarguren Jeremias ||
Alan Sagrario
# Gestión de Tarjetas de Producto
Esta es una mini-aplicación que deja crear, editar y eliminar tarjetas de producto usando JavaScript para manipular el DOM.
#
# Index.html:
En el archivo index.html:
- Se incluye el archivo script.js para que se ejecute el código JavaScript
- Se crea un contenedor para las tarjetas y un boton para agregar una nueva tarjeta.
- Se incluye un archivo css para darle estilo a la aplicacion.
#
# App.js:
En el archivo app.js: 
- Tiene una función para crear una nueva tarjeta
- Otra para eliminar una tarjeta
- Te permite editar la tarjeta.
#
# Crear una tarjeta:
Para crear una tarjeta, se utiliza el método createElement() para crear un elemento div con la clase "tarjeta".
#
# Crear titulo, img y descripcion
Para crear el titulo, imagen y descripcion de la tarjeta, se utiliza el método createElement() para crear elementos h2, img y p con un texto designado.
# Editar una tarjeta:
Para editar una tarjeta , se utiliza el método setAttribute() para cambiar el contenido de la tarjeta.
#
# Eliminar una tarjeta:
Para eliminar una tarjeta, se utiliza el evento botoneliminar.addEventListener() para eliminar el elemento div con la clase "tarjeta".
#
# Style.css:
En el archivo style.css: 
- Se define el estilo de la aplicacion. 
- Dandole color y tamaño a las tarjetas e imagenes.