let navbar = document.querySelector('.header .navbar');

document.getElementById('menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');    
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

