const mobileMenu = document.querySelector('.mobile-menu');
const imgmobileMenu = document.querySelector('.navbar-img');

imgmobileMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){

    console.log("Clik hps");
    mobileMenu.classList.toggle('inactive');
}