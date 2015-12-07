var a1time;
var a2time;

var audio1 = document.getElementById("part1");
var audio2 = document.getElementById("part2");

var s1words = document.getElementsByClassName("slide1")[0];
var s2words = document.getElementsByClassName("slide2")[0];

var a1stamps = [.2, .4, .6, .8, 1, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4.0, 4.2, 4.4, 4.6, 4.8, 5,
                5.2, 5.4, 5.6, 5.8, 6, 6.2, 6.4, 6.6, 6.8, 7, 7.2, 7.4, 7.6, 7.8];
var a2stamps = [];

// Loop for audio source 1
audio1.addEventListener('playing', function(){
    window.setInterval(function(){
      a1time = audio1.currentTime;
      //console.log(a1time);
      for (var i = 0; i < a1stamps.length; i++) {
        if (a1time > a1stamps[i]) {
          var prevCSS = s1words.getElementsByClassName("word")[i].style.cssText;
          s1words.getElementsByClassName("word")[i].style.cssText = prevCSS + "font-weight: bold; color: gray;";
        } else {
          s1words.getElementsByClassName("word")[i].style.fontWeight = "normal";
          s1words.getElementsByClassName("word")[i].style.removeProperty("color");
        }
      }
    }, 100);
}, false);

// Loop for audio source 2
audio1.addEventListener('playing', function(){
    window.setInterval(function(){
      a2time = audio2.currentTime;
      //console.log(a2time);
      for (var i = 0; i < a2stamps.length; i++) {
        if (a2time > a2stamps[i]) {
          var prevCSS = s2words.getElementsByClassName("word")[i].style.cssText;
          s2words.getElementsByClassName("word")[i].style.cssText = prevCSS + "font-weight: bold;";
        } else {
          s2words.getElementsByClassName("word")[i].style.fontWeight = "normal";
        }
      }
    }, 100);
}, false);
