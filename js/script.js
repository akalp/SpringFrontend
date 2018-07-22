// //Tooltip over svg elements
// $("circle").tooltip({
//   title: function(d){return d.text()},
//   container: 'body',
//   placement: 'auto',
//   html: true
// });
// $(function() {
//   $('[data-toggle="tooltip"]').tooltip()
// });

var s = $('#source-languages').select2({
  placeholder: 'Source Languages',
  theme: 'bootstrap4'
});

var t = $('#target-languages').select2({
  placeholder: 'Target Languages',
  theme: 'bootstrap4'
});

$('select').on('change', function(evt) {
  var uldiv = $(this).siblings('span.select2').find('ul')
  var count = $(this).find('option:selected').length;
  if (count > 2)
    uldiv.html("<li style=\"margin-top: .25rem;\">" + count + " languages selected</li>")
});

$('select').on('select2:open', function() {
  $(".select2-dropdown").prepend("<div><button id=\"" + $(this).attr("id") + "-all\" class=\"btn btn-primary buttons\">Select All</button><button id=\"" + $(this).attr("id") + "-off\" class=\"btn btn-primary buttons\">Unselect All</button></div>");

  $("#source-languages-all").on("click", function() {
    $('#source-languages > option').prop("selected", true);
    s.trigger("change");
  })
  $("#target-languages-all").on("click", function() {
    $('#target-languages > option').prop("selected", true);
    t.trigger("change");
  })
  $("#source-languages-off").on("click", function() {
    s.val(null).trigger("change");
  })
  $("#target-languages-off").on("click", function() {
    t.val(null).trigger("change");
  })
})
$('select').on('select2:closing', function() {
  $(".select2-dropdown").find("div").remove();
})
