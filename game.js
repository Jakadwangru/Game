function Go() {
  // Tab to edit
  let userInp = document.getElementById("inp").value;
  let rno = Math.random() * 10; // Generate a random number between 0 and 9
  let frno = Math.floor(rno);
  //console.log(frno)
  document.getElementsByClassName("display")[0].innerHTML = "The Number is " + frno;
  if (parseInt(userInp) === frno) { // Convert user input to integer and compare
    document.getElementsByClassName("display")[0].innerHTML = "YOU WON!!";
  } else {
    document.getElementsByClassName("display")[0].innerHTML = "YOU LOST";
  }
}