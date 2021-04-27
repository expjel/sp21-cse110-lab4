var intervalID = window.setInterval(printTime, 1000);
function printTime() {
    let d = newDate();
    let time = d.toLocaleTimeString();
    console.log(time);  
}