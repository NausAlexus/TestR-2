document.addEventListener("DOMContentLoaded", function () {
    // Get all tab buttons and content sections
    const tabButtons = document.querySelectorAll(".how-to-play-nav-item");
    const tabContents = document.querySelectorAll(".how-to-play-tab-content");
  
    // Function to handle tab switching
    function switchTab(event) {
      // Remove active class from all tab buttons
      tabButtons.forEach(button => button.classList.remove("active"));
      // Hide all tab content
      tabContents.forEach(content => content.classList.remove("active"));
  
      // Add active class to the clicked tab button
      event.currentTarget.classList.add("active");
      
      // Get the ID of the corresponding tab content
      const targetTab = event.currentTarget.getAttribute("data-tab");
  
      // Show the corresponding tab content
      document.getElementById(targetTab).classList.add("active");
    }
  
    // Add event listeners to each tab button
    tabButtons.forEach(button => {
      button.addEventListener("click", switchTab);
    });
  
    // Set the first tab as active by default
    tabButtons[0].classList.add("active");
    tabContents[0].classList.add("active");
  });