$(document).ready(function(){
    
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
   // ######### Start Script of Stars #########
});







