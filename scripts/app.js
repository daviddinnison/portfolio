function eventHandling() {
    //smooth scrolling for nav ids
    $('a[href*=\\#]').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 700);
    });
}

$(document).ready(function() {
    eventHandling();
    // $(window).scroll(function () {
    //     //if you hard code, then use console
    //     //.log to determine when you want the 
    //     //nav bar to stick.  
    //     console.log($(window).scrollTop())
    //   if ($(window).scrollTop() > 280) {
    //     $('.main-nav').addClass('navbar-fixed');
    //   }
    //   if ($(window).scrollTop() < 281) {
    //     $('.main-nav').removeClass('navbar-fixed');
    //   }
    // });
});