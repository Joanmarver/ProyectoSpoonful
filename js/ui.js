
function crearTarjeta(receta) {
    // 1️⃣ Creamos el contenedor principal
    const card = document.createElement('div');
    card.classList.add('tarjeta');

    // Imagen del cóctel
    const img = document.createElement('img');
    img.src = receta.imagen || './img/bartender.jpg'; // Imagen por defecto
    img.alt = receta.nombre;
  
    // Contenedor de contenido
    const content = document.createElement('div');
    content.classList.add('tarjeta-content');
  
    // Título
    const titulo = document.createElement('h3');
    titulo.textContent = receta.nombre;
  
    // Lista de ingredientes
    const ingredientes = document.createElement('ul');
    (receta.ingredientes || []).forEach(ing => {
        const li = document.createElement('li');
        li.textContent = ing;
        ingredientes.appendChild(li);
    });

    // Preparación
    const preparacion = document.createElement('p');
    preparacion.classList.add('preparacion');
    preparacion.textContent = receta.preparacion;

    // Decoración
    const decoracion = document.createElement('p');
    decoracion.classList.add('decoracion');
    decoracion.textContent = Array.isArray(receta.decoracion) ? receta.decoracion.join(', ') : receta.decoracion;
  
    // Ensamblar la estructura
    content.appendChild(titulo);
    content.appendChild(ingredientes);
    content.appendChild(preparacion);
    content.appendChild(decoracion);
    
    card.appendChild(img);
    card.appendChild(content);
  
    return card;
  }
  