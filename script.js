// Slideshow Script

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-images");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Navigation Menu Script

function openNav() {
    document.getElementById("hamburger-nav").style.width = "100%";
}
  
  function closeNav() {
    document.getElementById("hamburger-nav").style.width = "0%";
}

// Contact Form Validation Script

function validateNewsletter() {
  let email = document.forms["newsletterForm"]["email"].value;

  if (email =="") {
    alert("Email is required. Please enter a valid email address.");
    return false;
  }

  //Check if Email has an @ symbol
  if (email.indexOf('@') === -1) {
    alert("Please enter a valid email address with an @ symbol.");
    return false;
  }

  // Show collected data in an alert.
  let formData = "Signup successful! Please check your email for confirmation!\n\n" + "Newsletter Submission Data:\n\n" +
  "Email: " + email +
  "\n\nForm not submitted for demonstration purposes.";

alert(formData);

// Prevent form submission (Demonstration purposes)
return false;
}

function validateForm() {
  let email = document.forms["contactForm"]["email"].value;
  let message = document.forms["contactForm"]["message"].value;
  let phone = document.forms["contactForm"]["phone"].value;
  let name = document.forms["contactForm"]["name"].value;

  // Check Email
  if (email == "") {
      alert("Email is required. Please enter a valid email address.");
      return false;
  }

  //Check if Email has an @ symbol
  if (email.indexOf('@') === -1) {
    alert("Please enter a valid email address with an @ symbol.");
    return false;
}

  // Check phone number format only if it's not empty
  if (phone !== "") {
    // Remove all non-digit characters to count actual digits
    let digitsOnly = phone.replace(/\D/g, '');
    
    // Check if phone contains only valid characters
    let phoneRegex = /^[0-9\s\-\(\)\+]+$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }
    
    // Check if phone has a reasonable number of digits (at least 7)
    if (digitsOnly.length < 7) {
        alert("Please enter a complete phone number with at least 7 digits.");
        return false;
    }
}
  //Check Message
  if (message == "") {
    alert("A message is required. Please include a message.")
    return false;
  }
  // Show collected data in an alert.
  let formData = "Thank you! I'll be in touch!\n\n" + "Form Submission Data:\n\n" +
  "Name: " + (name || "Not provided") + "\n" +
  "Email: " + email + "\n" +
  "Phone: " + (phone || "Not provided") + "\n" +
  "Message: " + message +
  "\n\nForm not submitted for demonstration purposes.";

alert(formData);

// Prevent form submission (Demonstration purposes)
return false;
}

/* Sources
https://www.w3schools.com/howto/howto_js_slideshow.asp

https://www.w3schools.com/howto/howto_js_curtain_menu.asp

https://www.w3schools.com/js/js_validation.asp
*/