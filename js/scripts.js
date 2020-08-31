$(document).ready(function(){
    $('#carouselEx').carousel({ interval: 2000 });
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#carouselEx').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');    
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#carouselEx').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');    
        }   
    });
    $('#loginModal').modal({ show: false });
    $('#loginModalToggler').click(function(){
        $('#loginModal').modal('toggle');
    });
    $('#reserveModal').modal({ show: false });
    $('#reserveModalToggler').click(function(){
        $('#reserveModal').modal('toggle');
    });
});