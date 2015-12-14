Date.prototype.addDays=function(d){return new Date(this.valueOf()+864E5*d);};
//snippet from http://stackoverflow.com/questions/563406/add-days-to-datetime

function DateDiff(date1, date2) {
    //snippet from http://stackoverflow.com/questions/7763327/how-to-calculate-date-difference-in-javascript
    date1.setHours(0);
    date1.setMinutes(0, 0, 0);
    date2.setHours(0);
    date2.setMinutes(0, 0, 0);
    var datediff = Math.abs(date1.getTime() - date2.getTime()); // difference 
    return parseInt(datediff / (24 * 60 * 60 * 1000), 10); //Convert values days and return value      
}

function calculateConception() {
    var datum = new Date(document.getElementById("inpdate").value)
    console.log("Input " + datum);
    var geburtstermin = datum.addDays(277);
    document.getElementById("outdate").innerHTML = geburtstermin.getDate() + "." + geburtstermin.getMonth() + "." + geburtstermin.getFullYear();
    
    var heute = new Date();
    var schwangerschaftstage = DateDiff(datum,heute);
    var ssw = Math.ceil(schwangerschaftstage / 7);
    if (ssw > 45) {
     ssw = "Fehler";    
    }
    document.getElementById("outssw").innerHTML = ssw;
};
