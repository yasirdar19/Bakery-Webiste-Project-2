function submitEmail() {
  const email = document.getElementById("email").value;

  if (email === "") {
    alert("Enter your email first");
    return;
  }
  if (!email.includes("@")) {
  alert("Enter a valid email");
  return;
}


  alert("Thanks for subscribing!");


  document.getElementById("email").value = "";
  
}
