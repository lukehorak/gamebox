window.document.addEventListener('DOMContentLoaded', function(){
  const roomCode = document.getElementById("room-code");
const nameBox = document.getElementById("name-box");
const button = document.getElementById("join");

 const registerClick = () => {

  roomCode.className = "input room-code";
  roomCode.placeholder = "Enter room code";
  roomCode.value = "";
  roomCode.readOnly = false;

  // Accessibility
  roomCode.setAttribute("role", "textbox");
  roomCode.type = "room code";
  roomCode.setAttribute("aria-label", "enter room code");
  nameBox.setAttribute("aria-hidden", "false");
  button.setAttribute("aria-hidden", "false");

  nameBox.className += "nameBox-anim";
  button.className += "button-anim";
}

  const submitForm = () => {
  nameBox.className = " nameBox-anim-reverse";
  button.className = " button-anim-reverse";
  roomCode.className = " room-code-revert";
  roomCode.placeholder = "";
  roomCode.value = "";
}
});


