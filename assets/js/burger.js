let menuBtn = document.querySelector('.burger-menu__icon');
let menu = document.querySelector('.burger-menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})