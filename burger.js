$(document).ready(function() {
    $('.headerBurger').click(function() {
        $('.headerBurger, .headerMenu').toggleClass('active');
        $('.body').toggleClass('lock');
    });
});