$("#header").load("/Presentation/component/header/header.html"); 
$("#footer").load("/Presentation/component/footer/footer.html"); 
$("#spinner").load("/Presentation/component/loading/loading.html"); 
$('.main__gallery').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
})
