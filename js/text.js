var a1time;
var a2time;

var audio1 = document.getElementById("part1");
var audio2 = document.getElementById("part2");

var s1words = document.getElementsByClassName("slide1")[0];
var s2words = document.getElementsByClassName("slide2")[0];

var a1stamps = [1.100, 2.300, 4.350, 6.210];
var a2stamps = [];

// Loop for audio source 1
audio1.addEventListener('playing', function(){
    window.setInterval(function(){
      a1time = audio1.currentTime;
      //console.log(a1time);
      for (var i = 0; i < a1stamps.length; i++) {
        if (a1time > a1stamps[i]) {
          var prevCSS = s1words.getElementsByClassName("word")[i].style.cssText;
          s1words.getElementsByClassName("word")[i].style.cssText = prevCSS + "font-weight: bold;";
        } else {
          s1words.getElementsByClassName("word")[i].style.fontWeight = "normal";
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
