$(function(){
    $('.header').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 40)
    {
        if($('.header').data('size') == 'big')
        {
            $('.image-header').remove();
            $('#header-links-big').remove();
            $('.image-header-center-wrap').append('<img src="../images/title-only-1.png" class="img-responsive center-block nameImage">');
            $('.image-header-wrap').append('<img src="../images/logo-only-1.png" class="image-header-2">');
            $('.header-link-wrap').append('<div id="header-links-small"><a href="#/register">Register</a><a href="#/login">Login</a><a href="#/busRegister">Upgrade your gym today</a></div>');
            $('.header').data('size','small');
            $('.header').stop().animate({
                height:'60px'
            },200);
            $('.main').css('margin-top', '25%');
            //$(document)
            //$('html, body').animate({scrollTop:$('.front-big').position().top}, 600);

        }
    }
    else
    {
        if($('.header').data('size') == 'small')
        {
            $('.header').data('size','big');
            $('.image-header-2').remove();
            $('#header-links-small').remove();
            $('.nameImage').remove();

            $('.image-header-wrap').append('<img src="../images/logo-with-title-2.png" class="img-responsive center-block image-header">');
            //$('.header-link-wrap').append('<div id="header-links-big"><a ng-href="#">Home</a><a ng-href="#/about">About</a><a ng-href="#">Upgrade your gym today</a></div>');
            $('.header').stop().animate({
                height:'100%'
            },200);
            $('.main').css('margin-top', '100%');

            $('html, body').stop().animate({
                'scrollTop': $(document).height
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        }  
    }
});

// $(document).ready(function(){
//     $('a[href^="#"]').on('click',function (e) {
//         e.preventDefault();
//         var target = this.hash;
//         $target = $(target);

//     });
// });


// function drawShape(){
//   // get the canvas element using the DOM
//   var canvas = document.getElementById('mycanvas');
//   // Make sure we don't execute when canvas isn't supported
//   if (canvas.getContext){

//     // use getContext to use the canvas for drawing
//     var ctx = canvas.getContext('2d');

//     ctx.canvas.width = window.innerWidth;


//     var center = canvas.width/2;
//     console.log("center: " + center);
//     // Filled triangle
//     ctx.beginPath();
//     ctx.moveTo(center-50,25);
//     ctx.lineTo(center/3,120);
//     ctx.closePath();
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(center, 50);
//     ctx.lineTo(3*center/3,120);
//     ctx.closePath();
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(center + 50,25);
//     ctx.lineTo(5*center/3,120);
//     ctx.closePath();
//     ctx.stroke();
    //ctx.fill();
    
    // Stroked triangle
    /*
    ctx.beginPath();
    ctx.moveTo(125,125);
    ctx.lineTo(125,45);
    ctx.lineTo(45,125);
    ctx.closePath();
    ctx.stroke();
    */

// } else {
//     alert('You need Safari or Firefox 1.5+ to see this demo.');
// }
// }

// $(document).ready(function(){
//     drawShape();
// });



