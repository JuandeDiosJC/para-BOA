// Manejo de flujo de secciones
const mainContent = document.getElementById('sacriContentMain');
const mabelContent = document.getElementById('mabelContent');
const letterContent = document.getElementById('letterContent');
const syContent = document.getElementById('syContent');
const pardonContent = document.getElementById('pardonContent');
const finContent = document.getElementById('finContent');
const mainBg = document.getElementById('mainBg');

function showSection(section) {
    document.querySelectorAll('.content').forEach(s => s.classList.add('hidden'));
    section.classList.remove('hidden');
}

// Lógica "Al ni la topo"
document.getElementById('btnSacriNo').addEventListener('click', function() {
    mainBg.classList.add('funny-bg'); // Cambiar fondo
    showSection(mabelContent);
});

document.getElementById('btnReturnMabel').addEventListener('click', function() {
    window.location.href = 'index.html';
});

// Lógica "Obvio soy yo" -> Carta
document.getElementById('btnSacriYes').addEventListener('click', function() {
    showSection(letterContent);
    // Cambiar fondo a corazones y víboras en JS
    removeBalloons();
    createHeartsAndSnakes(40, mainBg);
});

// Lógica Carta -> SY
document.getElementById('btnLetterNext').addEventListener('click', function() {
    showSection(syContent);
    removeHeartsAndSnakes(mainBg);
    createHeartsSY(50, mainBg);
});

// Lógica SY -> Perdón
document.getElementById('btnSyNext').addEventListener('click', function() {
    showSection(pardonContent);
});

// Lógica Perdón "Si" -> Fin
document.getElementById('btnPardonYes').addEventListener('click', function() {
    showSection(finContent);
    // Cambiar fondo a estrellas y abrazos
    removeHeartsSY(mainBg);
    createStarsAndHugs(40, mainBg);
});

// --- BOTÓN "NEL PRRO" QUE SE ESCAPA ---
const btnNo = document.getElementById('btnPardonNo');

// Escuchamos cuando el mouse pasa por encima o cuando intenta tocarlo en el celular
btnNo.addEventListener('mouseover', moveButton);
btnNo.addEventListener('touchstart', function(e) {
    e.preventDefault(); // Evita que un toque rápido en el celular lo logre presionar
    moveButton.call(this);
}, { passive: false }); 

function moveButton() {
    // Lo sacamos de su contenedor para que pueda volar por toda la pantalla
    this.style.position = 'fixed';
    
    // Obtenemos el tamaño del botón y de la pantalla
    const btnWidth = this.offsetWidth;
    const btnHeight = this.offsetHeight;
    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    // Calculamos una nueva posición aleatoria
    const newLeft = Math.floor(Math.random() * maxX);
    const newTop = Math.floor(Math.random() * maxY);

    // Lo movemos súper rápido a la nueva posición
    this.style.left = `${newLeft}px`;
    this.style.top = `${newTop}px`;
    
    // Le agregamos una transición para que el movimiento se vea chistoso y fluido
    this.style.transition = 'all 0.2s ease-out';
}
// ----------------------------------------

// Lógica Fin -> Fin
document.getElementById('btnFin').addEventListener('click', function() {
    alert("¡Feliz Cumpleaños, Maricruz!");
    window.location.href = 'index.html';
});

// --- Funciones de animación de fondo ---
function createHeartsAndSnakes(num, container) {
    const emojis = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🐍', '🐍', '🐍'];
    for (let i = 0; i < num; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-item';
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.position = 'absolute';
        heart.style.left = `${Math.floor(Math.random() * 100)}%`;
        heart.style.top = `${Math.floor(Math.random() * 100)}%`;
        heart.style.fontSize = `${Math.floor(Math.random() * 20) + 15}px`;
        heart.style.animation = `heart-fall ${Math.floor(Math.random() * 3) + 4}s linear infinite`;
        container.appendChild(heart);
    }
}
function removeHeartsAndSnakes(container) { removeItemsByClass(container, 'heart-item'); }

function createHeartsSY(num, container) {
    const emojis = ['💖', '❤️', '💝'];
    for (let i = 0; i < num; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-item';
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.position = 'absolute';
        heart.style.left = `${Math.floor(Math.random() * 100)}%`;
        heart.style.top = `${Math.floor(Math.random() * 100)}%`;
        heart.style.animation = `heart-fall ${Math.floor(Math.random() * 2) + 2}s linear infinite`;
        container.appendChild(heart);
    }
}
function removeHeartsSY(container) { removeItemsByClass(container, 'heart-item'); }

function createStarsAndHugs(num, container) {
    const emojis = ['🌟', '🤗'];
    for (let i = 0; i < num; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-item';
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.position = 'absolute';
        heart.style.left = `${Math.floor(Math.random() * 100)}%`;
        heart.style.top = `${Math.floor(Math.random() * 100)}%`;
        heart.style.animation = `heart-fall ${Math.floor(Math.random() * 4) + 3}s linear infinite`;
        container.appendChild(heart);
    }
}

// Funciones auxiliares
function removeBalloons() { document.getElementById('balloon-container').style.opacity = 0; }
function removeItemsByClass(container, className) {
    const items = container.getElementsByClassName(className);
    while (items.length > 0) { items[0].parentNode.removeChild(items[0]); }
}