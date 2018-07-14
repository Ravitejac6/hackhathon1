$(document).ready(function () {
    setInterval(function () {
        $('#obstacles').append($('<img src="obstacles1.png" class="obs" width="400px" height="400px"/>')
            .animate({ "right": "100%" }, 2000, "linear", function () {
               $(this).remove();
            }));
    }, 2000);
    $(document).keypress(function (e) {
        if (e.key === ' ') {
            console.log("hello");
            $('#cat').animate({
                "top": "100px"
            }, 300)
                .animate({
                    "top": "650px"
                }, 300)
        }
    });
    var start_time = new Date();
        var score = 0;
        var score_disp = $("#score");
        var hi_score_disp = $("#hi-score");
    setInterval(function(){
        console.log(score_disp.val());
        var current_time = new Date();
        score = Math.floor((current_time-start_time)/1000)
        score_disp.text(score)     
    },700);
    var updateHighScore = function(){
        if(Number(hi_score_disp.text()) < score){
            hi_score_disp.text(score);
        }
    }
    var reset =  function(){
        score_disp.text("00");
        score = 0;
        start_time = new Date();
    }
    setInterval(function(){
        var cat_pos = $("#cat").position();
        var obstacle_pos = $("#obstacles1.png").position();
        console.log(cat_pos);
        if((cat_pos.left >= obstacle_pos.left) &&(cat_pos.top <= obstacle_pos.top ) ){
            updateHighScore();
            reset();  
            alert("You Loose");
        }
    },1000);

});