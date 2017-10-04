function eventHandling() {
    //smooth scrolling for nav ids
    $('a[href*=\\#]').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 700);
    });
}

$(document).ready(function() {
    eventHandling();
});