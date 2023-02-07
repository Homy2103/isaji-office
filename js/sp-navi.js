// スマホナビアイコン
$(function() {
  $("#nav-btn").click(function () {
  $(this).toggleClass('active');
  });
});

// スマホナビ表示・非表示
$(function() {
   const hum = $('#nav-btn, .active')
   const nav = $('.sp-nav')
   hum.on('click', function(){
      nav.toggleClass('toggle');
   });
});
