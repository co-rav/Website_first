$(document).ready(function() {
    const burger = $('.header_bouton');
   const menu = $('.header_nav');
    
    burger.click(function(e) {
        console.log("hello");
        menu.toggleClass("active");
    });

});