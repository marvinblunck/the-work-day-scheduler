let timeDisplayEl = $('#currentDay');
function displayTime() {
  let rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
displayTime();
setInterval(displayTime, 1000);
//code to get any user input that was saved in localStorage and set
$(".saveBtn").click(function (){
let textBox=$(this).siblings(".description").val();
let timeDisplay= $(this).parent().attr('id');
localStorage.setItem(timeDisplay, textBox);
})

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10")); 
$("#hour-11 .description").val(localStorage.getItem("hour-11"));  
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-1 .description").val(localStorage.getItem("hour-1")); 
$("#hour-2 .description").val(localStorage.getItem("hour-2"));  
$("#hour-3 .description").val(localStorage.getItem("hour-3"));  

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    // TODO: Add code to display the current date in the header of the page.
    $('#clearBtn').click(function(){
      $(".description").val("");
      localStorage.clear();
    });