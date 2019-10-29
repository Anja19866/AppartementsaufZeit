$.noConflict();
jQuery( document ).ready(function( $ ) {
  // Code that uses jQuery's $ can follow here.


$( '.menu' ).on( 'click', function() {
    $('body').toggleClass('menu-active');
  });

$( '.nav ul li a' ).on( 'click', function() {
  $('body').toggleClass('menu-active');
});

});
