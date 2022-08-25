/* GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist */


$('#currentDay').text(moment($("#date_val").val()).format('dddd, MM Do YYYY'))


function getHours (){
    var currentHour = moment().format('HH');
    console.log(currentHour);
    for (var i = 9; i <= 17; i++){
        if (i < currentHour) $(`#hour${i}`).addClass('past');
        if (i == currentHour) $(`#hour${i}`).addClass('present');
        if (i > currentHour) $(`#hour${i}`).addClass('future');
    }
}
function saveNote(event){
console.log(event);

if (event.target.className === "saveBtn"){
    console.log('savesomething')
    saveThis(event.target.previousElementSibling.id, event.target.previousElementSibling.value) 
}
}
function saveThis(hour, note){
console.log(hour, note)
var ls= JSON.parse(localStorage.getItem('scheduler'))
if (!ls ) ls = {

}
ls[hour] = note;
localStorage.setItem('scheduler', JSON.stringify(ls))
}

$('.time-block').on("click", saveNote);

getHours()