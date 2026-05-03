document.getElementById('btnBoaNo').addEventListener('click', function() {
    alert("Tons que haces aquí mensa? Largo… 🙄");
    // Ocultar elementos actuales, mostrar botón de volver
    document.getElementById('boaButtons').classList.add('hidden');
    document.getElementById('boaImage').classList.add('hidden');
    document.getElementById('boaQuestion').classList.add('hidden');
    document.getElementById('btnReturnMainBoa').classList.remove('hidden');
});

document.getElementById('btnBoaYes').addEventListener('click', function() {
    // Ocultar elementos actuales, mostrar el secreto
    document.getElementById('boaButtons').classList.add('hidden');
    document.getElementById('boaQuestion').innerText = "Ves... yo lo sabía.";
    document.getElementById('boaSecret').classList.remove('hidden');
});

document.getElementById('btnReturnMainBoa').addEventListener('click', function() {
    window.location.href = 'index.html';
});

// Modal de amor
const loveModal = document.getElementById('loveModalBoa');
const loveHearts = document.getElementById('loveHeartsBoa');

document.getElementById('btnSnakeSpecial').addEventListener('click', function() {
    createHearts(50, loveHearts);
    loveModal.style.display = 'block';
});

document.getElementById('btnCloseLoveBoa').addEventListener('click', function() {
    loveModal.style.display = 'none';
    removeHearts(loveHearts);
    window.location.href = 'index.html';
});

function createHearts(num, container) {
    const emojis = ['❤️', '💖', '🌸', '🌹', '💖', '❤️', '🐍'];
    for (let i = 0; i < num; i++) {
        const heart = document.createElement('div');
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.position = 'absolute';
        heart.style.left = `${random(100)}%`;
        heart.style.top = `${random(100)}%`;
        heart.style.animation = `heart-fall ${random(3) + 2}s linear infinite`;
        container.appendChild(heart);
    }
}

function removeHearts(container) {
    while (container.firstChild) { container.removeChild(container.firstChild); }
}