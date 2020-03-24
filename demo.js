//edit date of birth
var dateOfBirth ="April 24, 2010";
var msecBtndateOfBirthAnd1970 = Date.parse(dateOfBirth);
var msecBtnNowAnd1970 = Date.now();
var ageInMsec = msecBtnNowAnd1970-msecBtndateOfBirthAnd1970;
//use Date.parse and Date.now to calculate the age in msec.


//converting milliseconds to years.
var milliseconds = ageInMsec;
var second = 1000;
var minute = second*60;
var hour = minute*60;
var day = hour*24;
var month = day*30;
var year = month*12;


var years = Math.round(milliseconds/year);

function result(x){
    var ageOutcome = years;
        if (ageOutcome<18){
            console.log("minor");
        }else if (ageOutcome<=18 && ageOutcome<36){
            console.log ("youth");
        }else {
        console.log ("elder");
        }
    document.getElementById("demo").innerHTML = ageOutcome;
}
yearsCon=result;
window.onload = result;