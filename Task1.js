      let name = prompt("Please enter your name:");
      let phone = prompt("Please enter your phone number (8 digits only):");
      let mobile = prompt("Please enter your mobile number (11 digits starting with 010, 011, or 012):");
      let email = prompt("Please enter your email address:");

      let nameRegex = /^[A-Za-z]+$/;
      let phoneRegex = /^[0-9]{8}$/;
      let mobileRegex = /^(010|011|012)[0-9]{8}$/;
      let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

      if (name && phone && mobile && email) {
        if (!name.match(nameRegex)) {
          displayOutput("Invalid name. Please enter characters only.", "red");
        } else if (!phone.match(phoneRegex)) {
          displayOutput("Invalid phone number. Please enter 8 digits only.", "red");
        } else if (!mobile.match(mobileRegex)) {
          displayOutput("Invalid mobile number. Please enter 11 digits starting with 010, 011, or 012.", "red");
        } else if (!email.match(emailRegex)) {
          displayOutput("Invalid email address. Please enter a valid email address.", "red");
        } else {
          let color = prompt("Please choose a color for the output message (red, green, or blue):");
          let message = `Welcome ${name}! <br>Your phone number is ${phone}<br> your mobile number is ${mobile} <br>and your email is ${email}`;
          displayOutput(message, color);
        }
      } else {
        displayOutput("Invalid input. Please try again.", "red");
      }

      function displayOutput(message, color) {
        let output = document.getElementById("output");
        switch (color) {
          case "red":
            output.innerHTML = `<p style="color: red;">${message}</p>`;
            break;
          case "green":
            output.innerHTML = `<p style="color: green;">${message}</p>`;
            break;
          case "blue":
            output.innerHTML = `<p style="color: blue;">${message}</p>`;
            break;
          default:
            output.innerHTML = `<p>${message}</p>`;
            break;
        }
      }