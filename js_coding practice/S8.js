const background = document.querySelector('body');
const text = document.querySelector('h2');
const button = document.querySelector('button');

button.addEventListener('click', function () {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${R}, ${G}, ${B})`;

    background.style.backgroundColor = rgbColor;
    text.textContent = rgbColor;
});
