// burger start

let headerBurger = document.querySelector('.header__burger');
let headerList = document.querySelector('.header__list'); 
let headerBurgerIcon = document.querySelector('.header__burger-icon'); 

headerBurger.addEventListener('click', function (){
  headerList.classList.toggle('active');
  headerBurgerIcon.classList.toggle('active');
})

// burger end


