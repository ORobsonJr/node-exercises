/*
1. Write a JavaScript program to display the current day and time in the following format.

Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

var data = new Date(); //Current day

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("Sample Output : Today is : ", weekday[data.getDay()]);

console.log("Current time is : ", data.toLocaleString('en-US', { hour: 'numeric', hour12: true }), 
            ":", data.getMinutes(), ":", data.getSeconds());

