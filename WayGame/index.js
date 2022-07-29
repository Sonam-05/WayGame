let bird = document.querySelector(".bird");
let peachu = document.querySelector(".peachu");
let over = document.querySelector(".over");
let container = document.querySelector(".container");
let score = document.querySelector(".score");
count = 0;

bird.addEventListener("animationiteration", function(){
    var number = Math.floor(Math.random() * 3) * 200 ;
    bird.style.left = number + "px";
    count++
});

window.addEventListener("keydown", function(e){


    if(e.keyCode == "39"){
        var num = parseInt(window.getComputedStyle(peachu).getPropertyValue("left"));
    if(num<400){
        peachu.style.left = (num + 200) + "px";
    }
    }

    if(e.keyCode == "37"){
        var num = parseInt(window.getComputedStyle(peachu).getPropertyValue("left"));
    if(num>0){
        peachu.style.left = (num - 200) + "px";
    }
    }

})

setInterval(function gameOver(){
        let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        let birdLeft = parseInt(window.getComputedStyle(bird).getPropertyValue("left"));
        let peachuLeft = parseInt(window.getComputedStyle(peachu).getPropertyValue("left"));
    
        if((birdLeft===peachuLeft) && (birdTop >= 340 && birdTop <= 570)){
            over.style.display = "block";
            container.style.display="none";
            score.innerHTML = `Score : ${count}`;
    
            count = 0;
        }
    
    }
, 1000);
