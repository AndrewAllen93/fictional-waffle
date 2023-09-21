# fictional-waffle
##GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist


#I began with using dayjs to add the current month, day and year to the header of the page using "dayjs().format("dddd, MMMM, DD");
$("#currentDay").text(date);

## I then created a function to run when save button is clicked to grab data from specified time block and set in localstorage.
## I then created a function to then grab data from localstorage and to change color of time block depending on current time of day.

