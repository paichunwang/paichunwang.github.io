$(document).ready(function () {

    var charHP = 0;
    var charAttk = 0;
    var charDef = 0;

    var pokemonChoice = [
        "../RPG_Game/assets/images/pokeball.png",
        "../RPG_Game/assets/images/001.png",
        "../RPG_Game/assets/images/004.png",
        "../RPG_Game/assets/images/007.png",]

    var pokemonStats = {
        "Bulbasaur": {
            "Health": "45",
            "Attack": "49",
            "Defence": "49"
        },

        "Charmander": {
            "Health": "39",
            "Attack": "52",
            "Defence": "43"
        },

        "Squirtle": {
            "Health": "44",
            "Attack": "48",
            "Defence": "65"
        }
    }

    $("#1").mouseover(function () {
        this.src = pokemonChoice[1]
        $("#chosen").text("Bulbasaur");
        $("#1").on('click', function () {
            console.log("Bulbasaur");
            $("#pokemon img").attr('src', pokemonChoice[0]);
            $(".clickElement").off('click');
            $("#1").attr('src', pokemonChoice[1]);
            $(".clickElement").off('mouseover');
            $(".clickElement").off('mouseout');

            charHP = pokemonStats.Bulbasaur.Health;
            charAttk = pokemonStats.Bulbasaur.Attack;
            charDef = pokemonStats.Bulbasaur.Defence;

            gameStart();
        });
    }).mouseout(function () {
        this.src = "../RPG_Game/assets/images/pokeball.png"
        $("#chosen").text("");
    });

    $("#4").mouseover(function () {
        this.src = pokemonChoice[2]
        $("#chosen").text("Charmander");
        $("#4").on('click', function () {
            console.log("Charmander");
            $("#pokemon img").attr('src', pokemonChoice[0]);
            $(".clickElement").off('click');
            $("#4").attr('src', pokemonChoice[2]);
            $(".clickElement").off('mouseover');
            $(".clickElement").off('mouseout');

            charHP = pokemonStats.Charmander.Health;
            charAttk = pokemonStats.Charmander.Attack;
            charDef = pokemonStats.Charmander.Defence;

            gameStart();
        });
    }).mouseout(function () {
        this.src = "../RPG_Game/assets/images/pokeball.png"
        $("#chosen").text("");
    });

    $("#7").mouseover(function () {
        this.src = pokemonChoice[3]
        $("#chosen").text("Squirtle");
        $("#7").on('click', function () {
            console.log("Squirtle");
            $("#pokemon img").attr('src', pokemonChoice[0]);
            $(".clickElement").off('click');
            $("#7").attr('src', pokemonChoice[3]);
            $(".clickElement").off('mouseover');
            $(".clickElement").off('mouseout');

            charHP = pokemonStats.Squirtle.Health;
            charAttk = pokemonStats.Squirtle.Attack;
            charDef = pokemonStats.Squirtle.Defence;

            gameStart();
        });
    }).mouseout(function () {
        this.src = "../RPG_Game/assets/images/pokeball.png"
        $("#chosen").text("");
    });

    function gameStart() {
        $("#enemy").css("visibility", "visible")
        enemy();
        $("#action").css("visibility", "visible")
        action();
        console.log("Health:" + charHP + " " + "Attack:" + charAttk + " " + "Defence:" + charDef);
    }

    function enemy() {
        var enemyChoice = Math.floor(Math.random() * 3 + 1);
        $("#enemy img").attr('src', pokemonChoice[enemyChoice]);
    }

    function action() {

    }

    $(function () {
        $(".playback").click(function (e) {
            e.preventDefault();

            // This next line will get the audio element
            // that is adjacent to the link that was clicked.
            var song = $(this).next('audio').get(0);
            if (song.paused)
                song.play();
            else
                song.pause();
        });
    });
    
});