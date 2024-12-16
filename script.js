// script.js
document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready!");

    // Handle photo upload
    const uploadForm = document.getElementById('uploadForm');
    const photoInput = document.getElementById('photoInput');
    const photoPreview = document.getElementById('photoPreview');

    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const file = photoInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Create an image element to display the uploaded photo
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '300px'; // Set a max width for the preview
                img.style.borderRadius = '5px'; // Optional: add some styling
                photoPreview.innerHTML = ''; // Clear previous preview
                photoPreview.appendChild(img); // Add the new image
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dynamic Greeting
  function dynamicGreeting() {
    const greetingElement = document.createElement('h3');
    const currentTime = new Date().getHours();
    let greetingMessage = "Hello";
  
    if (currentTime >= 5 && currentTime < 12) {
      greetingMessage = "Good Morning";
    } else if (currentTime >= 12 && currentTime < 18) {
      greetingMessage = "Good Afternoon";
    } else if (currentTime >= 18 && currentTime < 22) {
      greetingMessage = "Good Evening";
    } else {
      greetingMessage = "Good Evening";
    }
  
    greetingElement.innerText = greetingMessage + ", Dear Sir/Madam!";
    greetingElement.style.color = "#f05454";
    greetingElement.style.textAlign = "center";
    greetingElement.style.marginTop = "10px";
    document.querySelector(".header").appendChild(greetingElement);
  }
  dynamicGreeting();
  
  // Scroll to Top Button
  const scrollTopButton = document.createElement('button');
  scrollTopButton.innerText = "⬆ Scroll to Top";
  scrollTopButton.style.position = "fixed";
  scrollTopButton.style.bottom = "20px";
  scrollTopButton.style.right = "20px";
  scrollTopButton.style.padding = "10px 15px";
  scrollTopButton.style.border = "none";
  scrollTopButton.style.borderRadius = "5px";
  scrollTopButton.style.background = "#f05454";
  scrollTopButton.style.color = "#fff";
  scrollTopButton.style.cursor = "pointer";
  scrollTopButton.style.display = "none";
  scrollTopButton.style.zIndex = "1000";
  
  document.body.appendChild(scrollTopButton);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollTopButton.style.display = "block";
    } else {
      scrollTopButton.style.display = "none";
    }
  });
  
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Typing Animation for Job Title
  const jobTitle = "I'm a Content Creator & Digital Marketer!";
  let typingIndex = 0;
  
  function typeEffect() {
    const titleElement = document.querySelector(".summary p");
    if (titleElement && typingIndex < jobTitle.length) {
      titleElement.innerHTML += jobTitle.charAt(typingIndex);
      typingIndex++;
      setTimeout(typeEffect, 100);
    }
  }
  
  // Add the effect after the page loads
  window.addEventListener("load", typeEffect);

  
