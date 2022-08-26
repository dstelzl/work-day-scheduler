/*

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist */

//the current day is displayed at the top of the calendar
$("#currentDay").text(moment($("#date_val").val()).format("dddd, MM Do YYYY"));
//timeblock is color coded to indicate whether it is in the past, present, or future
function getHours() {
  var currentHour = moment().format("HH");
  console.log(currentHour);
  for (var i = 9; i <= 17; i++) {
    if (i < currentHour) $(`#hour${i}`).addClass("past");
    if (i == currentHour) $(`#hour${i}`).addClass("present");
    if (i > currentHour) $(`#hour${i}`).addClass("future");
    var hourText = localStorage.getItem(`hour${i}`);
    $(`#hour${i}`).val(hourText);
  }
}

// event=hour in military
function saveNote(event) {
  if (event.target.className === "saveBtn") {
    saveThis(
      event.target.previousElementSibling.id,
      event.target.previousElementSibling.value
    );
    event.preventDefault();
  }
}

//save note to local storage based on time block
function saveThis(hour,note) {
  localStorage.setItem(hour,note);
}

//Function Calls and Event Listeners

$(".time-block").on("click", ".saveBtn",saveNote);
getHours();
