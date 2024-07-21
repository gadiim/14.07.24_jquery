$(document).ready(function() {
    let navMenu = $('.nav-menu'); 
    $('.hamburger-menu').on('click', function() {
        if (navMenu.css('display') === 'none') {
            navMenu.show('slow');
            $('.hamburger-menu').html('&times;');
        } 
        else {
            navMenu.hide('slow');
            $('.hamburger-menu').html('&equiv;');
        }
    });
});

