$(function () {

  var taskItem = 3;

  function selectItems(event) {
    console.log('checkbox clicked!')
    if (!$('#show-completed').is(':checked')) {
      $(event.currentTarget).parent().hide();
    }
  };

  $('form').on('submit',  function () {
    taskItem++
    var answer = $('#create-text').val();
    var importance = $('#create-importance').val();
    var $parent = $('<div>').addClass('task').addClass(importance);
    var $child = $('<input>', {
      type: 'checkbox',
      id: 'task- ' + taskItem,
    });
    var $label = $('<label>', {
      class: 'text',
      text: answer,
      for: 'task- ' + taskItem,
    });

    $parent.append($child);
    $parent.append($label);
    $('#tasks').append($parent);

    $child.on('click', selectItems)

    return false;

  });

  $('#show-completed').on('click', function () {
    if ($('#show-completed').is(':checked')) {
      $('.task > input:checked').parent().show();
    } else {
      $('.task > inputchecked').parent().hide();
    }

  });

  $('.task > input').on('click', selectItems);

});