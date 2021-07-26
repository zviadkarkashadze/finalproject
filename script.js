let navbar = document.getElementById('links');
let togglebutton = document.getElementById('toggleButton');


togglebutton.addEventListener('click', function() {
    navbar.classList.toggle('active');
})