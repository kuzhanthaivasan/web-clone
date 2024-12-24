
const mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}







    document.getElementById("contactForm").addEventListener("submit", function(event) {
        var isValid = true;
        var formElements = this.elements;

        // Validate Name
        var name = formElements["name"].value;
        if (name.trim() === "") {
            isValid = false;
            alert("Please enter your name.");
        }

        // Validate Email
        var email = formElements["email"].value;
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            alert("Please enter a valid email.");
        }

        // Validate Subject
        var subject = formElements["subject"].value;
        if (subject.trim() === "") {
            isValid = false;
            alert("Please enter a subject.");
        }

        // Validate Phone
        var phone = formElements["phone"].value;
        var phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            isValid = false;
            alert("Please enter a valid 10-digit phone number.");
        }

        // Validate Message
        var message = formElements["message"].value;
        if (message.trim() === "") {
            isValid = false;
            alert("Please enter a message.");
        }

        // Validate Captcha
        var captcha = formElements["type_the_word"].value;
        if (captcha.trim() === "") {
            isValid = false;
            alert("Please type the word shown in the captcha.");
        }

        // If validation fails, prevent form submission
        if (!isValid) {
            event.preventDefault();
        }
    });

