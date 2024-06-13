$(document).ready(function () {
  $("#task-button").click(function () {
  });

  $("form").on("submit", function (e) {
    e.preventDefault();
    const taskInput = $("#task-input").val();
    const newTask = $('<li class="task"></li>');
    $(`<span id="done">${taskInput}</span>`).appendTo(newTask);
    $(newTask).appendTo('ul')
    $("#task-input").val('')
  });

  $(document).on('click', '#done', function() {
    $(this).toggleClass('done');
});
});
