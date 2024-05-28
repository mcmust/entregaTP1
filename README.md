Trabajo Práctico Obligatorio Desarrollo Web HTML,CSS y JavaScript

Detalles del archivo index.html que contiene la estructura principal de la página web:

1. Estructura HTML: El archivo HTML sigue la estructura estándar, con etiquetas <head> y <body>. Utiliza metaetiquetas para el juego de caracteres y la escala inicial, y vincula hojas de estilo externas.

2. Secciones y Contenidos: Contiene varias secciones (<section>) como "El Estudio", "Nuestro equipo", "Nuestros valores" y "Contacto", cada una con su propio contenido.

3. Menú de Navegación: Se incluye un menú de navegación en la parte superior (<header>), con enlaces a diferentes secciones del sitio. También hay un menú para dispositivos móviles, activado por un botón con clase .open-menu-btn.

4. Formulario de Contacto: Se incluye un formulario de contacto dentro de la sección "Contacto", que cumple con los requisitos establecidos. Contiene campos como nombre, correo electrónico, teléfono, mensaje, motivo, imagen y opciones de fuero.

Explicaciones acerca del archivo script.js que contiene funciones JavaScript proporcionando interactividad a la página:

1. Evento de Cambio de Imagen: La función cambia el texto del elemento <span> para mostrar el nombre del archivo seleccionado cuando se carga una imagen en el campo de entrada de archivo.

2. Menú Móvil: Gestiona la apertura y cierre del menú móvil al pasar el cursor sobre el botón de menú y al salir del área del menú.

3. Validación del Formulario: La función validateForm(event) valida si todos los campos del formulario están completos antes de enviarlo. Si algún campo está vacío, muestra una alerta y evita el envío del formulario.

Detalles acerca del archivo styles.css que contiene estilos CSS para dar formato y diseño a la página:

1. Estilos Generales: Define estilos generales para el cuerpo de la página, encabezado, menús, secciones y pie de página.

2. Diseño Responsivo: Utiliza consultas de medios (@media) para hacer que el sitio sea sensible a diferentes tamaños de pantalla, ajustando el diseño y la disposición de los elementos en función del dispositivo.

3. Flexbox y Grid: Se utiliza Flexbox y Grid para maquetar las secciones y organizar el contenido de manera eficiente.

4. Estilos Específicos: Se definen estilos específicos para cada sección, como "El Estudio", "Nuestro equipo", "Nuestros valores" y "Contacto". También se aplican estilos a los elementos del formulario de contacto.

5. Animaciones y Transiciones: Se utilizan transiciones y animaciones para mejorar la experiencia del usuario, como el cambio de color al pasar el cursor sobre los enlaces del menú.
