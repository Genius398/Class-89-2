function addUser(){
    player_1=document.getElementById("player1_name_input").value;
    player_2=document.getElementById("player2_name_input").value;

    localStorage.setItem("Player 1 id",player_1);
    localStorage.setItem("Player 2 id",player_2);
}