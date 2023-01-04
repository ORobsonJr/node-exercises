/*
Write a JavaScript program to get the current date.  

Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 
*/

var data = new Date();

var formated_data = [data.getDay()+1, data.getMonth()+1, data.getFullYear()]


if (formated_data[0] <=10){
    formated_data[0] = "0" + formated_data[0];
}

if (formated_data[1] <= 10){
    formated_data[1] = "0" + formated_data[1]
}

console.log(formated_data.join('-'));
console.log(formated_data.join('/'));
