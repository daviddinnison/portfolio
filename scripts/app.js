//smooth scrolling for nav ids on click
// function navIdScrolling() {
//     $('a[href*=\\#]').on('click', function (event) {
//         event.preventDefault();
//         $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 700);
//     });
// }

//nav bar fixed on scrolling
// function fixedNavScrolling() {
//     const mainTitle = $(".titles");

//     const scrolledTitle = "main-title-scrolled";

//     const titleHeight = $('title').outerHeight();
//     const aboutTitleScroll = "about-title-scroll";
//     const about = $('.about');

//     $(window).scroll(function () {
//         if ($(this).scrollTop() >titleHeight) {
//             mainTitle.addClass(scrolledTitle);
//             about.addClass(aboutTitleScroll);
//         } else {
//             mainTitle.removeClass(scrolledTitle);
//             about.removeClass(aboutTitleScroll);
//         }
//     });
}


$(document).ready(function () {
    // navIdScrolling();
    // fixedNavScrolling();
}); 