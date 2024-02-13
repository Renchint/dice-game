// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдзгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэе 
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var score = [0, 0]

// Тоглогчийн ээлжиндээ цуглуулах оноог хадгалах хувьсагч
var roundScore = 0;


// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө. 
var dice = Math.floor(Math.random() * 6) + 1;
// window.document.querySelector('#score-0').textContent = dice;


// программ эхлэхэд бэлтгэе
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log('шоо: ' + dice);