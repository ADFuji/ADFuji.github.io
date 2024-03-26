function animateAboutMe() {
    const container = document.querySelector('#anim-about-me');
    
    function getCube(color) {
        function createFace(color, side) {
            const face = document.createElement('div');
            face.classList.add('face');
            face.classList.add(color);
            face.classList.add(side);
            return face;
        }
        function createCube(color) {
            const cube = document.createElement('div');
            cube.classList.add('cube');
            cube.appendChild(createFace(color, 'front'));
            cube.appendChild(createFace(color, 'back'));
            cube.appendChild(createFace(color, 'right'));
            cube.appendChild(createFace(color, 'left'));
            cube.appendChild(createFace(color, 'top'));
            cube.appendChild(createFace(color, 'bottom'));
            return cube;
        }
        const cube = createCube(color);
        cube.style.animationDuration = (Math.random() * 2 + 5) + 's';
        cube.style.animationIterationCount = 'infinite';
        z = Math.random() * 1000;
        cube.style.transform = `translateZ(${z}px)`;
        return cube;
    }

    container.innerHTML = '';
    const red = getCube('red');
    const green = getCube('green');
    const blue = getCube('blue');
    const yellow = getCube('yellow');

    container.appendChild(red);

    
}

animateAboutMe();

