function addUser() {
    Player_1 = document.getElementById("Player_1").value;
    Player_2 = document.getElementById("Player_2").value;

    localStorage.setItem("Player_1", Player_1);
    localStorage.setItem("Player_2", Player_2);

    window.location = "game.html";
}