$(".my_circle").tooltip({
    title: 'test',
    container: 'body',
    placement: 'auto',
    html: true
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(".my_circle").hover(
  function (){
  $(this).addClass("hovered");
  $("."+$(this).attr("synsetid")).addClass("hovered");
},
function(){
  $(this).removeClass("hovered");
  $("."+$(this).attr("synsetid")).removeClass("hovered");
})

$(".form-control[name='source-languages']").fastselect();
