const mobileMenu = document.querySelector('.mobile-menu');
const imgmobileMenu = document.querySelector('.navbar-img');

imgmobileMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){

        mobileMenu.classList.toggle('inactive');
}