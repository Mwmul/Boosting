
$('.card').click(function(){
  $('.card').not(this).toggle();
  $(this).toggleClass('open');
  $('header').slideToggle('200ms');
  $('.titles').toggle();
  $('.info').toggle();
  $('.closeBtn').toggle('00ms')
});

$(function() {
  $('.card').click(function(){
    var panelid = $(this).attr('data-panelid');
   $('#'+panelid).toggleClass('expand');
  });
});