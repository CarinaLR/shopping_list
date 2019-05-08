//lets create a wrapper function that waits for the DOM to load
$(document).ready(function()
{
 //add an event listener that listens for a click on id # add
  $("#add").click(function()
  {
    //grab the user input
    var userInput = $("input[name=shoppinglistitem]").val();

    //test to make sure we are grabbing the value
    console.log(userInput);

    //add user input to the DOM as a list item
    $(".list").append('<li>' + '<input class="checked-item" type="checkbox">' + userInput + '</li>');

    return false;
  })
  //keep track of the user toggling each item and create an event listener
  $(document).on('click', '.checked-item', function()
  {
    //Capture the current list item user is clicking on
    $(this).parent().toggleClass('is-it-checked');
  })
  //ad and event listener to the check button
  $('.Check').on('click', function(e)
  {
    console.log(e);
    //prevent the default browser/form action from happening
    e.preventDefault();
    //remove the checked item
    $('.is-it-checked').remove();
  })
  $('.reset-list').on('click', function(e)
  {
    console.log(e);
    //prevent the default browser/form action from happening
    e.preventDefault();
    $('li').remove();
  })
})