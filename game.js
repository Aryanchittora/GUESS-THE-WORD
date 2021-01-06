var player1_name = localStorage.getItem("Player_1");
var player2_name = localStorage.getItem("Player_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1_name").innerHTML = player1_name + " : ";
document.getElementById("player_2_name").innerHTML = player2_name + " : ";

document.getElementById("Player_1_score").innerHTML = player1_score;
document.getElementById("Player_2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
  get_word = document.getElementById("word_question").value;
  word = get_word.toLowerCase();
  console.log("word in lower case = " + word);

  var charAt_1 = word.charAt(1);
  console.log(charAt_1);

  var length_2 = Math.floor(word.length/2);
  var charAt_2 = word.charAt(length_2);
  console.log(charAt_2);

  var length_3 = word.length - 1;
  var charAt_3 = word.charAt(length_3);
  console.log(charAt_3);

  var remove_1 = word.replace(charAt_1, "_");
  var remove_2 = remove_1.replace(charAt_2, "_");
  var remove_3 = remove_2.replace(charAt_3, "_");
  console.log(remove_3);

  var Question = "<h4 id='word_display'>Q. " + remove_3 + "</h4>";
  var input = "<br>Answer : <input type='text' id='ans_input' placeholder='Your Answer'>";
  var button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
  var column = Question + input + button;
  
  document.getElementById("output").innerHTML = column;
  document.getElementById("word_question").value = "";
}

var question_turn = "Player_1";
var answer_turn = "Player_2";

function check() {
  var get_answer = document.getElementById("ans_input").value;
  var answer = get_answer.toLowerCase();
  console.log("Answer in lowercase is = " + answer);

  if (answer == word) {
    if (answer_turn == "Player_1") {
      player1_score = player1_score + 1;
      document.getElementById("Player_1_score").innerHTML = player1_score;
    } else {
      player2_score = player2_score + 1;
      document.getElementById("Player_2_score").innerHTML = player2_score;
    }
  }

  if (question_turn == "Player_1") {
    question_turn = "Player_2";
    document.getElementById("player_question").innerHTML = "Question Turn -" + player2_name;
  }
  else {
    question_turn = "Player_1";
    document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
  }

  if (answer_turn == "Player_1") {
    answer_turn = "Player_2";
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
  }
  else {
    answer_turn = "Player_1";
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
  }

  document.getElementById("output").innerHTML = "";
}