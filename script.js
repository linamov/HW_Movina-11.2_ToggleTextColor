const textBlock = document.getElementById('textBlock');
const colorBtn = document.getElementById('colorBtn');

let isGreen = false; // стан тексту: false - фіолетовий, true - зелений

colorBtn.addEventListener('click', function() {
    if (!isGreen) {
        textBlock.style.color = 'green';
        isGreen = true;
    } else {
        textBlock.style.color = '#4b0082'; // повертаємо фіолетовий
        isGreen = false;
    }
});
