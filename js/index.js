var thumImg = $('img', '.thumb');
var tWidth = $('.thumb').width();
var iHeight = $('.thumb img').height();

$('.thumb').css({
  'height': tWidth,
});


/*function centerImages(image) {
    var parent_height = $('.thumb img').parent().height();  
    var image_height = $('.thumb img').height();  
    var top_margin = (parent_height - image_height) / 2;  
    $('.thumb img').css( 'margin-top' , top_margin);
}
$(".thumb img").each(function() {
    centerImages(this);
});*/

 function centerImages(image) {
    var parent_height = $(image).parent().height();  
    var image_height = $(image).height();  
    var top_margin = (parent_height - image_height) / 2;  
    $(image).css( 'margin-top' , top_margin);
}
$(".thumb img").each(function() {
    centerImages(this);
});

/*
var tHeight = $('.thumb').height();

$('.thumb img').css({
  'top': (tHeight - iHeight)/2,
})
*/
