$('header').on('click','button',function(){
  if(this.id=='time'){
    $('.time').fadeIn();
  }
});

$('.modal').on('click','.item-icon-right',function(){
  $(this).siblings('.sel').removeClass('sel').children().removeClass('ion-checkmark')
  $(this).addClass('sel').children('i').addClass('ion-checkmark');
});
