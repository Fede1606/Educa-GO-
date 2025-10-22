// Cargar las secciones dinámicamente
async function cargarSecciones() {
    try {
        const presentacion = await fetch('presentacion.html').then(r => r.text());
        const nosotros = await fetch('nosotros.html').then(r => r.text());
        const juegos = await fetch('juegos.html').then(r => r.text());
        
        const app = document.getElementById('app');
        app.innerHTML = presentacion + nosotros + juegos;
        
        // Agregar interactividad a los botones después de cargar
        agregarInteractividad();
    } catch (error) {
        console.error('Error al cargar las secciones:', error);
    }
}

// Cargar secciones al iniciar
document.addEventListener('DOMContentLoaded', cargarSecciones);

function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('section');
    secciones.forEach(seccion => seccion.classList.remove('active'));
    
    const seccion = document.getElementById(id);
    if (seccion) {
        seccion.classList.add('active');
    }
    
    window.scrollTo(0, 0);
}

function abrirModal(juego) {
    const modal = document.getElementById('modal' + juego.charAt(0).toUpperCase() + juego.slice(1).replace(/([A-Z])/g, '$1'));
    if (modal) {
        modal.classList.add('active');
    }
}

function cerrarModal(juego) {
    const modal = document.getElementById('modal' + juego.charAt(0).toUpperCase() + juego.slice(1).replace(/([A-Z])/g, '$1'));
    if (modal) {
        modal.classList.remove('active');
    }
}

// Cerrar modal al hacer click fuera
window.onclick = function(event) {
    if (event.target.classList && event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

// Agregar interactividad
function agregarInteractividad() {
    document.querySelectorAll('.play-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', function() {
            const gameName = this.closest('.game-card').querySelector('h3').textContent;
            alert('¡Pronto podrás jugar ' + gameName + '!');
        });
    });
}