 
  var mins = 5;  //Set the number of minutes you need
    var secs = mins * 60;
    var currentSeconds = 0;
    var currentMinutes = 0;
    /*   
     * setTimeout('Decrement()',1000);
     */
    setTimeout(Decrement,1000); 

    function Decrement() {
        currentMinutes = Math.floor(secs / 60);
        currentSeconds = secs % 60;
        if(currentSeconds <= 5) currentSeconds = "0" + currentSeconds;
        secs--;
        document.getElementById("timeLeft").innerHTML = currentMinutes + ":" + currentSeconds; //Set the element id you need the time put into.
        if(secs !== -1) setTimeout('Decrement()',1000);


        // console.log("mins");
        // console.log("sec");
        // console.log("currentSeconds");
        // console.log("currentMinutes");
           
    }

 