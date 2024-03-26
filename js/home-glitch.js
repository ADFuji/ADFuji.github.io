function glitch() {
    const container = document.querySelector('.glitch-container');
    const txt = container.innerText;
    container.innerHTML = txt.split('').map(char => `<span>${char}</span>`).join('');

    function getRandomChar() {
        const start = 33, end = 126;
        return String.fromCharCode(Math.floor(Math.random() * (end - start) + start));
    }

    function glitchEffect() {
        for (let i = 0; i < txt.length; i++) {
            if (Math.random() < 0.5) { // Probabilité de 50% pour chaque caractère de subir un glitch
                setTimeout(() => {
                    const char = getRandomChar();
                    container.children[i].innerText = char;
                    container.children[i].classList.add('glitch');
                    container.children[i].setAttribute('data-text', char);
                }, Math.random() * 250); // Délai aléatoire pour le début du glitch
            }
        }

        setTimeout(() => {
            for (let i = 0; i < txt.length; i++) {
                container.children[i].innerText = txt[i];
                container.children[i].classList.remove('glitch');
            }
        }, Math.random() * 750);
    }

    setInterval(glitchEffect, Math.random() * 1500);
}

glitch();
