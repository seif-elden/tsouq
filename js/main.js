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

        // navLarge.css('padding','0px 15px');
        // $('.navbar .navbar-brand img').css({
        //   "width": "125px",
        //   "height": "45px"
        // });
      } else {
        navLarge.removeClass('navLargeTop');
        NavbarMobile.removeClass('NavbarMobileTop');
        // navLarge.css('padding','15px 15px');

        // $('.navbar .navbar-brand img').css({
        //   "width": "135px",
        //   "height": "55px"
        // });
      }      
    });

    var goUp = $('.go_up');
    $(window).scroll(function(){
      // this for icon to go up when scroll
      if($(this).scrollTop() > 80){
        if(goUp.is(":hidden")){
          goUp.fadeIn();
        }
      } else {
        goUp.fadeOut();
      }
    }); 

    // this for the animation of the icon go up
    goUp.click(function(event){
      event.preventDefault();

      $('html , body').animate({
          scrollTop: 0
      },1000);
    });    

    $('.profileBranches .showMore').click(function (event) {  
      event.preventDefault(); 
      $('main .profileData .profileBranches .totalProfileBranches .branchLocation3').show();
      $('.profileBranches .showMore').removeClass('d-flex');
      $('.profileBranches .showMore').addClass('d-none');
    });

    // slider prevWorkSlider
    var bodyDirection = $('body').css('direction');
    if( bodyDirection == 'rtl'){
      $('.prevWorkSlider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        rtl:true,
        autoplay:true,
      });
    } else {
      $('.prevWorkSlider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        rtl:false,
        autoplay:true,
      });
    }

    
});







