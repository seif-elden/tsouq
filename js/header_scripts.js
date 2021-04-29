$(document).ready(function(){

    var bodyWidth = $('body').innerWidth();

    $('.NavbarMobile .navMobileOptions .navbar-toggler').click(function(){
      if( $('.NavbarMobile .navMenuMobile').width() > 0 ){
        $(".NavbarMobile .navMenuMobile").css('width','0');
        $('.NavbarMobile .navMenuMobile a').hide();
      } else {
        if( bodyWidth >= 768 && bodyWidth <= 992 ){
          $(".NavbarMobile .navMenuMobile").css('width','40%');
        } else if(bodyWidth >= 558 && bodyWidth <= 767){
          $(".NavbarMobile .navMenuMobile").css('width','38%');
        } else if(bodyWidth >= 310 && bodyWidth <= 557){
          $(".NavbarMobile .navMenuMobile").css('width','60%');
        }
   
        $('.NavbarMobile .navMenuMobile a').css('display','flex');
        $('body').css('background-colo'); 
      }
    });

    $('.NavbarMobile .navMenuMobile .closebtn').click(function () {  
      $(".NavbarMobile .navMenuMobile").css('width','0');
      $('.NavbarMobile .navMenuMobile a').hide();
    });


      var navLarge = $('.navLarge'),
          NavbarMobile = $('.NavbarMobile');

    $(window).scroll(function(){
      // navbar change
      if($(this).scrollTop() > 300){

        navLarge.addClass('navLargeTop');

        NavbarMobile.addClass('NavbarMobileTop');

      } else {
        navLarge.removeClass('navLargeTop');
        NavbarMobile.removeClass('NavbarMobileTop');
      }      
    });
});