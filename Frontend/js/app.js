const API_URL = '../data/recetas.json'; // nuestro JSON con secciones
let todasRecetas = {}; // guardamos todo el JSON para usarlo después

async function cargarRecetas() {
  const respuesta = await fetch(API_URL);
  todasRecetas = await respuesta.json();

  // Mostrar inicialmente la primera sección (Carta)
  mostrarRecetasPorSeccion('carta');

  // Configurar botones del menú
  const botones = document.querySelectorAll('.boton');
  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      const seccion = btn.getAttribute('id');
      mostrarRecetasPorSeccion(seccion);
    });
  });

  // Configurar buscador
  const buscador = document.getElementById('buscador');
  buscador.addEventListener('input', () => {
    const filtro = buscador.value.toLowerCase();
    // Combinar todas las secciones para buscar
    let filtradas = [];
    Object.values(todasRecetas).forEach(seccion => {
      filtradas = filtradas.concat(seccion.filter(r => r.nombre.toLowerCase().includes(filtro)));
    });
    mostrarRecetas(filtradas);
  });
}

// Función para mostrar recetas de una sección
function mostrarRecetasPorSeccion(seccion) {
  const recetas = todasRecetas[seccion] || [];
  mostrarRecetas(recetas);
}

// Función que ya tenías para renderizar
function mostrarRecetas(recetas) {
  const container = document.getElementById('recetas');
  container.innerHTML = '';
  recetas.forEach(receta => {
    const tarjeta = crearTarjeta(receta);
    container.appendChild(tarjeta);
  });
}

// Inicializa la app
cargarRecetas();
