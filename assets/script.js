$(".saveBtn").on("click", function () {
  var hr = $(this).parent().attr("id");
  var txtarea = $(this).siblings(".description").val();
  localStorage.setItem(hr, txtarea);
});
$(".time-block").each(function () {
  var hr = $(this).attr("id");
  var txtarea = localStorage.getItem(hr);
  $(this).find(".description").val(txtarea);
  let presentTime = dayjs().hour();
  let rowhr = parseInt($(this).attr("id").split("-").pop());
  if (rowhr < presentTime) {
    $(this).addClass("past");
  } else if (rowhr === presentTime) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

var date = dayjs().format("dddd, MMMM, DD");
$("#currentDay").text(date);
