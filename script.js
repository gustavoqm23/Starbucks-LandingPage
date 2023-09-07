//Troca de imagem ao clicar
function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

//Muda cor do círculo
function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

//Abre e Fecha Menu
function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var navbar = document.querySelector('.navbar')
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
}