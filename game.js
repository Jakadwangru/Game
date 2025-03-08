function Go() {
  // Tab to edit
  let userInp = document.getElementById("inp").value;
  let rno = Math.random() * 0; // Generate a random number between 0 and 9
  let frno = Math.floor(rno);
  //console.log(frno)
  if (parseInt(userInp) === frno) { // Convert user input to integer and compare
    // document.getElementsByClassName("display")[0].innerHTML = "<h1>YOU WON!!</h1>";
    alert("YOU Won!!")
  }
  if (userInp=="A3E7F2E9") {
    // alert("Hi sir this is Jarvis")
    window.location.href="https://jakadwangru.github.io/Jarvis"
  }
  else {
    document.getElementsByClassName("display")[0].innerHTML = "<h1>You lose</h1>";
  }
  document.getElementsByClassName("dis")[0].innerHTML = "<h1>The is the Number</h1>"+frno;
}
