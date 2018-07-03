$(document).ready(function () {

    $("#red").on("click", function () {
        console.log(redVal);
        userTotal += redVal;
        updateTotal();
    });
    $("#blue").on("click", function () {
        console.log(blueVal);
        userTotal += blueVal;
        updateTotal();
    });
    $("#yellow").on("click", function () {
        console.log(yellowVal);
        userTotal += yellowVal;
        updateTotal();
    });
    $("#green").on("click", function () {
        console.log(greenVal);
        userTotal += greenVal;
        updateTotal();
    });

    var randomNum = Math.floor(Math.random()*101+19);

    $('#scoreGoal').text(randomNum);

    var redVal = Math.floor(Math.random()*11+1);
    var blueVal = Math.floor(Math.random()*11+1);
    var yellowVal = Math.floor(Math.random()*11+1);
    var greenVal = Math.floor(Math.random()*11+1);

    var userTotal = 0; 
    var wins = 0;
    var losses = 0;

    valChecker();

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    function winGame(){
        alert("You've Won!");
        reset();
    }

    function reset(){
        randomNum = Math.floor(Math.random()*101+19);
        crystalVal();
        console.log("New Goal: " + randomNum);
        $('#scoreGoal').text(randomNum);
        userTotal= 0;
        $('#currentScoreCount').text(userTotal);
        valChecker();
    }

    function crystalVal(){
        redVal = Math.floor(Math.random()*11+1);
        blueVal = Math.floor(Math.random()*11+1);
        yellowVal = Math.floor(Math.random()*11+1);
        greenVal = Math.floor(Math.random()*11+1);
    }

    function updateTotal(){
        $("#currentScoreCount").text(userTotal);
        if(userTotal > randomNum)
        {
            $("#currentScoreCount").text(userTotal);
            alert("You Lost!")
            losses += 1;
            $("#lost").text("Losses: " + losses);
            reset();
        }
        else if(userTotal === randomNum){
            winGame();
        }
    }

    function valChecker(){
        var total = redVal + blueVal + yellowVal + greenVal
        if(total >= randomNum){
            console.log(total);
            console.log("Game Reseting: Value Check Failed ; Impossible to Win");
            reset();
        }
    }
});