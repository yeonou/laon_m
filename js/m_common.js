/* Side Menu */

var left_w = $('#inner_side').width();


$('#toggle_btn').click(function(){
   $('#aside').show();
    $('#inner_side').animate({
        'left':'0'
    },300);
    $('#aside').animate({
        'opacity':'1'
    },300);
    
    var h1 = $('body').height();
    $('html').css({'height':h1+'px',
                  'overflow':'hidden'});
});
$('#menu_close_btn').click(function(){
   $('#inner_side').animate({
       'left':-(left_w)+'px'
   },300);
    $('#aside').animate({
       'opacity':'0' 
    },300,function(){
        $(this).hide();                
    });
    $('html').css({
        'height':'100%',
        'overflow':'visible'
    }
    );
    
});


/* Search Box */

$('#search_btn').click(function(){
    $('#search_wrap').show(function(){
        $(this).animate({'opacity':'1'},200);
    });
    
});
$('#close_btn').click(function(){    $('#search_wrap').animate({'opacity':'0'},200,function(){
        $(this).hide();
    });
    
});


/* Scroll Top Button */

$('#top_btn').hide();
$(window).scroll(function(){        
    var scrollTopNum = $(document).scrollTop();    
    if( scrollTopNum >= 50 ){
    $('#top_btn').fadeIn();
}if(scrollTopNum < 50 ){
    $('#top_btn').fadeOut();
}   
});


$('#top_btn').click(function(event){
	event.preventDefault();
	$('html,body').stop().animate({scrollTop:0},500);
});


