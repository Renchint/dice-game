// тоглоомын бүх газар ашиглагдах глобаль хувьсагчдыг зарлъя
// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдзгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэе 
var activePlayer;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var score;
// Тоглогчийн ээлжиндээ цуглуулах оноог хадгалах хувьсагч
var roundScore

// Тоглогчийн ээлжиндээ цуглуулах оноог хадгалах хувьсагч
var roundScore = 0;
//Шооны зургийг үзээлх элементийг DOM-оос хайж олоод энд хадгалъя
var diceDom = document.querySelector(".dice");

//Тоглоомыг эхлүүллээ. 
initGame();

//ТОГЛООМЫГ ШИНЭЭР ЭХЛЭХЭД БЭЛТЭГНЭ.
function initGame() {
    // Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдзгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэе 
    activePlayer = 0;

    // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
    score = [0, 0]

    // Тоглогчийн ээлжиндээ цуглуулах оноог хадгалах хувьсагч
    roundScore = 0;

    // программ эхлэхэд бэлтгэе
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    //Тоглогчдын нэрийг буцааж гаргах
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'

    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')

    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')

    document.querySelector('.player-0-panel').classList.add('active')

    diceDom.style.display = "none";
}

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener('click', function () {
    //1-6 доторх санамсаргүй нэг тоо гаргаж авна. 
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    //Шооны зургийг вэб дээр гаргаж ирнэ
    diceDom.style.display = "block";

    //Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ. 
    diceDom.src = 'dice-' + diceNumber + '.png';

    // Буусан тоо нь 1-ээс ялгаатай бол ивэдхитэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
    if (diceNumber !== 1) {
        //1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;



    } else {
        // тоглогчийн ээлжийг солих
        switchToNextPlayer();
    }

});

//HOLD товчны эвент листенер
document.querySelector('.btn-hold').addEventListener('click', function () {
    // Уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нь нэмж өгнө. 
    score[activePlayer] = score[activePlayer] + roundScore;

    // дэлгэц дээр оноог нь өөрчилнө
    document.getElementById('score-' + activePlayer).textContent = score[activePlayer];

    // Уг тоглогч хожсон эсэхийг шалгах
    if (score[activePlayer] >= 10) {
        document.getElementById('name-' + activePlayer).textContent = 'WINNER !!!';;
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        // Тоглогчийн ээлжийг солино
        switchToNextPlayer();
    }

})

// Энэ функц нь тоглох ээлжийг дараачийн тоглогч уруу шилжүүлнэ.
function switchToNextPlayer() {
    //Энэ тоглогчийн ээлжин дээр буусан оноог 0 болгоно.
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;


    // Тоглогчийн ээлжийг нөгөө тоглогч уруу шилжүүлнэ
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // улаан цэгийг шилжүүлэх
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //шоог түр алга болгох
    diceDom.style.display = "none"
}

//Шинэ тоглоом эхлүүлэх товчний эвент листенер
document.querySelector('.btn-new').addEventListener('click', initGame);

