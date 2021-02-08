$(function () {
    // Responsive Menu
    $(".navToggle").click(function (e) {
        $(".navToggle").toggleClass('active');
        $(".menu").toggleClass('active');
    });
    $(window).on('load', function () {
        $('.mainBody > .container').addClass('containerBorder');
   });
   $( 'audio' ).audioPlayer();
});
