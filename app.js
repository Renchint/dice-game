// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдзгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэе 
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var score = [0, 0]

// Тоглогчийн ээлжиндээ цуглуулах оноог хадгалах хувьсагч
var roundScore = 0;


// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө. 
var diceNumber = Math.floor(Math.random() * 6) + 1;



// программ эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice")
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener('click', function () {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = 'dice-' + diceNumber + '.png';
});

