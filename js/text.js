var a1time;
var a2time;

var audio1 = document.getElementById("part1");
var audio2 = document.getElementById("part2");

var s1words = document.getElementsByClassName("slide1")[0];
var s2words = document.getElementsByClassName("slide2")[0];

var a1stamps = [5.478, 7.6, 5.241, 6.379, 7.93, 8.25, 8.9, 11.34, 11.7, 12, 12.7, 13.6, 14.243, 14.475, 14.95, 16, 18, 17.43, 18.96, 19.3, 19.7, 18.4, 21, 22.32, 22.5, 21.98, 21.244, 23.57, 25.47, 24.26, 24, 26.885,
                25.817, 27.85, 28, 28.168, 26.2, 26.0, 30.42, 31.754, 31.9, 32.317, 33.51, 34.368, 33.94, 35, 36.717, 36.946, 39.08, 38.35, 37.93, 37.331, 30.866,
                 43.375, 40.313, 43.175, 43.9, 40.87, 41.25, 41.84];
var a2stamps = [1.885, 3.24, 3.65, 2.476, 2.274, 5.37, 6.4, 6.88, 4.9, 9.35, 9.75, 7.89, 10.486, 11.2, 13.61, 15.194, 14.655, 14.23,
                17.67, 19, 19.57, 20.4, 20.67, 21.56, 21.68, 21.7,
                22.7, 22.9, 23.69, 19.76, 24.5,
                26, 25.507, 24.34, 16.984, 27.16, 27.7, 28.5, 28.73, 27.85, 29, 30.53, 31.7, 32.8, 31.88, 31];

// Loop for audio source 1
audio1.addEventListener('playing', function(){
    window.setInterval(function(){
      a1time = audio1.currentTime;
      //console.log(a1time);
      for (var i = 0; i < a1stamps.length; i++) {
        if (a1time > a1stamps[i]) {
          var prevCSS = s1words.getElementsByClassName("word")[i].style.cssText;
          s1words.getElementsByClassName("word")[i].style.cssText = prevCSS + "text-decoration: line-through;";
        } else {
          s1words.getElementsByClassName("word")[i].style.textDecoration = "none";
        }
      }
    }, 100);
}, false);

// Loop for audio source 2
audio2.addEventListener('playing', function(){
    window.setInterval(function(){
      a2time = audio2.currentTime;
      //console.log(a2time);
      for (var i = 0; i < a2stamps.length; i++) {
        if (a2time > a2stamps[i]) {
          var prevCSS = s2words.getElementsByClassName("word")[i].style.cssText;
          s2words.getElementsByClassName("word")[i].style.cssText = prevCSS + "text-decoration: line-through;";
        } else {
          s2words.getElementsByClassName("word")[i].style.textDecoration = "none";
        }
      }
    }, 100);
}, false);
