$("#header").load("/Presentation/component/header/header.html"); 
$("#footer").load("/Presentation/component/footer/footer.html"); 
$("#spinner").load("/Presentation/component/loading/loading.html"); 
$("#card").load("/Presentation/component/card/card.html"); 
$('.main__gallery').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
})

function mostrarSenha() {
  let tipo = document.getElementById("senha")
  let mostrar = document.getElementById("show")
  if (tipo.type === 'password' ) {
    tipo.type = 'text'
    mostrar.classList.remove('fa-eye-slash')
    mostrar.classList.add('fa-eye')
  } else {
    tipo.type = 'password'
    mostrar.classList.remove('fa-eye')
    mostrar.classList.add('fa-eye-slash')
  }
}

function mostrarConfirmarSenha() {
  let tipo = document.getElementById("confirmeSenha")
  let mostrar = document.getElementById("confirmShow")
  if (tipo.type === 'password' ) {
    tipo.type = 'text'
    mostrar.classList.remove('fa-eye-slash')
    mostrar.classList.add('fa-eye')
  } else {
    tipo.type = 'password'
    mostrar.classList.remove('fa-eye')
    mostrar.classList.add('fa-eye-slash')
  }
}

function Dropdown() {
  document.getElementById("dropdown").classList.toggle('header__none')
}
