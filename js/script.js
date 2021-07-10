// Post todo on list when clicking on "Post Todo" button
$("#ButtonPost").on("click", function (e) {
  e.preventDefault();
  var to_do = $("#TextPost");
  $("#TodoList").append(
    '<div className="checkboxOption"><input type="checkbox" id="todo"/><label>' +
      to_do.val() +
      "</label></div>"
  );
  to_do.val("");
});

$("#ButtonClear").on("click", function () {
  $("[type=checkbox]").each(function () {
    $(this).prop("checked", false);
  });
});

// Mark all options on the list
$("#ButtonMarkAll").on("click", function () {
  $("[type=checkbox]").each(function () {
    $(this).prop("checked", true);
  });
});

// Delete all options on the list
$("#ButtonDeleteAll").on("click", function () {
  $("#TodoList").html("");
});

// Delete checked options on the list
$("#ButtonDeleteMarked").on("click", function () {
  $("[type=checkbox]:checked").each(function () {
    $(this).parent().remove();
  });
});
