"use strict";

/*var x = 0;
var y = 0;
var mario = $(".mario");
var box = $(".box1");*/

setTimeout(function() {
      $(".mario").removeClass("mario-fall");
  }, 1000);


window.onload = function() { 
  var mario = document.getElementsByClassName("mario")[0];  
  /*var bgm = document.getElementById("mario-background-music");
  bgm.muted = true;
  bgm.volume=0.05;
  bgm.play();*/

  if (mario.classList.contains("mario--fall")) {
      setTimeout(function() {
      mario.classList.remove("mario--fall");
    }, 800); 
  }

  onkeydown = onkeyup = function(event){ 
    switch(event.keyCode) {      
      case 39: 
        /* Move Mario to the right */        
        moveMario("right");
        break;
        
      case 37: 
        /* Move Mario to the left */        
        moveMario("left");
        break;
        
      case 32: 
        /* Mario jump */
          jumpMario();
        break;
        
      case 38: 
        /* Mario jump */        
        jumpMario();
        break;
    }    
  }
  
  window.addEventListener("keyup", function(event) {       
    if (event.keyCode == 39 || event.keyCode == 37) {             
      stopMario();
    }   
  });
  
  function moveMario(direction) {  
    
    var mario = document.getElementsByClassName("mario")[0];
    switch(direction) {
      case "right": 
        if (mario.offsetLeft  < ($(".tunnel2-horizontal").offset().left + $(".tunnel2-horizontal").width())) {
        mario.classList.remove("mario--left");
        mario.classList.add("mario--walk");
        mario.style.left = mario.offsetLeft + 7 + "px";
        if (($(".mario").offset().left + $(".mario").width() / 2) > ($(".tunnel2-horizontal").offset().left + $(".tunnel2-horizontal").width()/4)){
          $(".contact-area").removeClass('messageHide').addClass('messageShow').css({"visibility" : "visible"});
          $(".entryMessage").removeClass('entryMessageShow').addClass('entryMessageHide');
          $(".mario").addClass('marioHide');
          mario.classList.add("mario--left");
          mario.classList.remove("mario--walk");
        }
        else if(($(".mario").offset().left + $(".mario").width() / 2) > ($(".tunnel1-horizontal").offset().left+ $(".tunnel1-horizontal").width())) {
          $(".message").removeClass('messageShow').addClass('messageHide').css({"visibility" : "visible"});
          $(".entryMessage").addClass('entryMessageShow').removeClass('entryMessageHide');
          $(".mario").removeClass('marioHide');
          $('.message').css({"visibility" : "visible"});
        }
      }
        break;
      case "left":
      if (mario.offsetLeft + mario.style.width > ($(".tunnel1-horizontal").offset().left)) {    
        mario.classList.add("mario--left", "mario--walk");
        mario.style.left = mario.offsetLeft - 7 + "px";
        if (($(".mario").offset().left + $(".mario").width() / 2) < ($(".tunnel1-horizontal").offset().left+ $(".tunnel1-horizontal").width())){
            $(".message").removeClass('messageHide').addClass('messageShow').css({"visibility" : "visible"});
            $(".mario").addClass('marioHide');
            $(".entryMessage").removeClass('entryMessageShow').addClass('entryMessageHide');
            mario.classList.remove("mario--left");
            mario.classList.remove("mario--walk");
        }
        else if (($(".mario").offset().left + $(".mario").width() / 2) < ($(".tunnel2-horizontal").offset().left + $(".tunnel2-horizontal").width()/4)) {
          $(".contact-area").removeClass('messageShow').addClass('messageHide').css({"visibility" : "visible"});
          $(".entryMessage").addClass('entryMessageShow').removeClass('entryMessageHide');
          $(".mario").removeClass('marioHide');
        }
        break;
    }
  }

  }
  
  function jumpMario() {

/*    var jump = document.getElementById("mario-jump");
    jump.volume=0.05;
    jump.play();*/

    var mario = document.getElementsByClassName("mario")[0]; 
    if(checkMarioPosition()){
    
    if (!mario.classList.contains("mario--jump")) {
      mario.classList.add("mario--jump");

      //check for collision with coin box 1
      if (($(".mario").offset().left + $(".mario").width() / 2 > $(".box1").offset().left) && ($(".mario").offset().top > $(".box1").offset().top)) 
        {
          if (($(".mario").offset().left + $(".mario").width() / 2) < ($(".box1").offset().left + $(".box1").width())) 
            {
              console.log("touch box1 !");

                setTimeout(function() {
                $(".coin1").addClass("coin_animation");
                $(".box1").addClass("box_animation");
                var coin = document.getElementById("mario-coin");
                coin.volume=0.05;
                coin.play();
              }, 200);

              
              $(".coin1").removeClass("coin_animation");
              $(".box1").removeClass("box_animation");

              setTimeout(function() {
                 window.open('https://github.com/Pranav4399');
              }, 600);
            }
        }

        if (($(".mario").offset().left + $(".mario").width() / 2 > $(".box2").offset().left) && ($(".mario").offset().top > $(".box2").offset().top)) 
        {
          if (($(".mario").offset().left + $(".mario").width() / 2) < ($(".box2").offset().left + $(".box2").width())) 
            {
              console.log("touch box2 !");

                setTimeout(function() {
                $(".coin2").addClass("coin_animation");
                $(".box2").addClass("box_animation");
                var coin = document.getElementById("mario-coin");
                coin.volume=0.05;
                coin.play();
              }, 200);
              
              $(".coin2").removeClass("coin_animation");      
              $(".box2").removeClass("box_animation");

              setTimeout(function() {
                 window.open('https://drive.google.com/file/d/1eEUGRGz2rjXz6CgMaAQKOgRrMzx4X_Tv/view?usp=sharing');
              }, 600);

            }
        }
        setTimeout(function() {
                mario.classList.remove("mario--jump")
              }, 450);  
    }  
  }
}

  function stopMario() {
    var mario = document.getElementsByClassName("mario")[0];    
    mario.classList.remove("mario--walk");
  }

  function checkMarioPosition(){
    if ((($(".mario").offset().left + $(".mario").width() / 2) > ($(".tunnel2-horizontal").offset().left + $(".tunnel2-horizontal").width())) || (($(".mario").offset().left + $(".mario").width() / 2) < ($(".tunnel1-horizontal").offset().left+ $(".tunnel1-horizontal").width()))){
      return false;
    }
    else{
      return true;
    }
  }

 
  /**
   * Generate random number
   * 
   * @min {Number} min number (including)
   * @max {Number} max number (including)
   * @returns {Number} random number between min and max
   */
  function randomNumber(min, max) {
    var random = min + Math.random() * (max + 1 - min);
    random = Math.floor(random);
    return random;
  }
  
  
  /**
   * Adds objects to the world (.world)
   * 
   * @objects {String} html elements (for example "<div class="cloud"></div>") 
   */
  function addToWorld(objects) {
    var environment = document.getElementsByClassName("environment")[0];
    environment.innerHTML = environment.innerHTML + objects;
  }

  function addToWorldCloud(objects) {
    var cloud = document.getElementsByClassName("cloud")[0];
    cloud.innerHTML = cloud.innerHTML + objects;
  }
  
  
  /**
   * Creating objects (clouds, bushes, etc.) with random positions
   * and add to the world
   * 
   * @quantity     {Number} quantity of objects
   * @htmlClassObj {Object} 
   * @htmlStyleObj {Object}
   */
  function generatorRandomObjects(quantity, htmlClassObj, htmlStyleObj) {

    var htmlClass = '',
        htmlStyle = '',
        objects = '';

    for (var i = 0; i < quantity; i++) {
      
      htmlClass = htmlClassObj.class;
      htmlStyle = '';

      for (var key in htmlClassObj) {
        if (key !== "class") {
          htmlClass += " " + key + "--" + 
                      randomNumber(htmlClassObj[key].randomRange[0],
                                   htmlClassObj[key].randomRange[1]);
        }
      }
      
       for (var key in htmlStyleObj) {
        
          htmlStyle += key + ":" + 
                       randomNumber(htmlStyleObj[key].randomRange[0], 
                                   htmlStyleObj[key].randomRange[1]) +
                       htmlStyleObj[key].unit + ";";
        
      }
      objects += "<div class =\"" + htmlClass + "\" style =\"" + htmlStyle + "\"></div>";
    }
      addToWorld(objects);
  }

  function generatorRandomObjectsCloud(quantity, htmlClassObj, htmlStyleObj) {

    var htmlClass = '',
        htmlStyle = '',
        objects = '';

    for (var i = 0; i < quantity; i++) {
      
      htmlClass = htmlClassObj.class;
      htmlStyle = '';

      for (var key in htmlClassObj) {
        if (key !== "class") {
          htmlClass += " " + key + "--" + 
                      randomNumber(htmlClassObj[key].randomRange[0],
                                   htmlClassObj[key].randomRange[1]);
        }
      }
      
       for (var key in htmlStyleObj) {
        
          htmlStyle += key + ":" + 
                       randomNumber(htmlStyleObj[key].randomRange[0], 
                                   htmlStyleObj[key].randomRange[1]) +
                       htmlStyleObj[key].unit + ";";
        
      }
      objects += "<div class =\"" + htmlClass + "\" style =\"" + htmlStyle + "\"></div>";
    }
      addToWorldCloud(objects);
  }
  
  
  
  
  
  /*------------------------------------*\
      Generate world objects
  \*------------------------------------*/
  
  /**
   * Generate clouds
   */
  generatorRandomObjectsCloud(
    2, 
    {
      class: "sprite cloud",
      cloud: {randomRange: [1, 1]}
    },
    {
      left: {randomRange: [15, 40], unit: "vw"}
    });
  
  
  /**
   * Generate bushes
   */
  generatorRandomObjects(
    2, 
    {
      class: "sprite bush",
      bush: {randomRange: [2, 3]}
    },
    {      
      left: {randomRange: [15, 75], unit: "vw"}
    });
  
  
  /**
   * Generate mounts
   */
  generatorRandomObjects(
    1, 
    {
      class: "sprite mount",
      mount: {randomRange: [2,2]}
    },
    {      
      left: {randomRange: [25, 65], unit: "vw"}
    });


}; 
