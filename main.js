const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:110
});

typewriter
    .typeString('Sómos plásticos Jerelvaq , más de 37 años de trayectoria en la industria del plástico.')
    .pauseFor(100)
    .start();