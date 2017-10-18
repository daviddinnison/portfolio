//smooth scrolling for nav ids on click
function navIdScrolling() {
    $('a[href*=\\#]').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 700);
    });
}

//nav bar fixed on scrolling
function fixedNavScrolling() {
    const mainNav = $(".main-nav");
    const scrolledNav = "main-nav-scrolled";
    const headerHeight = $('header').outerHeight();

    $(window).scroll(function () {
        if ($(this).scrollTop() > headerHeight) {
            mainNav.addClass(scrolledNav);
        } else {
            mainNav.removeClass(scrolledNav);
        }
    });
}

$(document).ready(function () {
    navIdScrolling();
    fixedNavScrolling();
});