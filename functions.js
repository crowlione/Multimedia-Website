function submit() {
   console.log("something happened@");
   const name = document.getElementById("name");
   const email = document.getElementById("email");
   const comment = document.getElementById("comment");
   console.log(name.value);

   Email.send({
    SecureToken : "",
    To: "eg.phpmails@gmail.com",
    From: "eg.phpmails@gmail.com",
    Subject: "New Message",
    Body: "User "+ name.value + " " + email.value + " has made a submission:\n" + comment.value 
  })

   Email.send({
    SecureToken : "",
    To: email.value,
    From: "eg.phpmails@gmail.com",
    Subject: "Thank you for reaching out!",
    Body: "Hi "+ name.value + ",\nThank you for reaching out to our Art Blog!\n\nWe have received your submission and will get to you " + 
    "as soon as possible. If you have any further questions feel free to respond to this email.\n\nBest regards,\rThe Art Blog Team",
  })
    .then(function (message) {
      alert("Message sent successfully!");
      name.value="";
      email.value="";
      comment.value="";
    });
}

var slideIndex = 0;
showSlides();
showViewers();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("widget-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "inline-block";  
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function showViewers() {
  var viewers = document.getElementById("viewers");
  const rndInt = Math.floor(Math.random() * 6) + 1;
  const views = parseInt(viewers.textContent);

  if(views < 1){
    return;
  }
  
  if(rndInt % 2 === 0) {
    viewers.textContent = (views + rndInt).toString();
  }
  else{
    viewers.textContent = (views - rndInt).toString();
  }
  setTimeout(showViewers, 10000); // Change every 10 seconds
}

function hamburgerMenu() {
  const sidebar = document.getElementById("sidebar");
  const main = document.getElementsByClassName("main-content");

  if(sidebar.style.display !== "none") {
    sidebar.style.display = "none";
    main[0].style.width = "100%";
  }
  else {
    sidebar.style.display = "block";
    main[0].style.width = "85%";
  }
}

const responsiveMedia = window.matchMedia("(max-width: 500px)");

function handeleMedia(e) {
  const menu = document.getElementById("menu");  
  const sidebarMenu = document.getElementById("sidebar-menu");
  if(e.matches) {  
    menu.style.display = "none"; 
    sidebarMenu.style.display = "block";
  }
  else {
    menu.style.display = "block"; 
    sidebarMenu.style.display = "none";
  }
}

responsiveMedia.addEventListener("change", handeleMedia);
handeleMedia(responsiveMedia);
myFunction(responsiveMedia) // Call listener function at run time


