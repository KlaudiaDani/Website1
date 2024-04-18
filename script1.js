document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
   
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    
    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        subject: subject,
        message: message
      })
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      document.getElementById("status").innerText = data.message;
    })
    .catch(function(error) {
      console.error("Wystąpił błąd:", error);
    });
  });
  