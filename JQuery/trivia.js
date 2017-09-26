$(document).ready(function() {

    var userSelection ;
    var userScore = 0;
    var button1;
    var button2;
    var button3;
    var button4;

    if (userSelection === button1) {
        $("#Choice1").click(function() {
            // if (userSelection == button3) {
            // userScore++
            // alert("correct choice");
            // console.log(userScore);       
            // }
            $("#Submit").click(function() {
                userScore--;
                alert("Incorrect choice");
                console.log(userScore);
                // }
                //match();
            });
        });

        } 
        if (userSelection === button2) {
        $("#Choice2").click(function() {
            // if (userSelection == button3) {
            // userScore++
            // alert("correct choice");
            // console.log(userScore);       
            // }
            $("#Submit").click(function() {
                userScore--;
                alert("Incorrect choice");
                console.log(userScore);
                // }
                //match();
            });
        });

       } 
    if (userSelection === button3) {
        $("#Choice3").click(function() {
            // if (userSelection == button3) {
            // userScore++
            // alert("correct choice");
            // console.log(userScore);       
            // }
            $("#Submit").click(function() {
                userScore++;
                alert("correct choice");
                console.log(userScore);
                // }
                //match();
            });
        });

    } if(userSelection === button4) {
        $("#Choice4").click(function() {
            // if (userSelection == button3) {
            // userScore++
            // alert("correct choice");
            // console.log(userScore);       
            // }
            $("#Submit").click(function() {
                userScore--;
                alert("Incorrect choice");
                console.log(userScore);
                // }
                //match();
            });
        });
    }

$("#Reset").click(function(){
    //userSelection.val(""); // to add
});

 

});