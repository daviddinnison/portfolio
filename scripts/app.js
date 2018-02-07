//smooth scrolling for nav ids on click
const navIdScrolling = () => {
    $('a[href*=\\#]').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 700);
    });
}

$(document).ready(function () {
    navIdScrolling();
}); 