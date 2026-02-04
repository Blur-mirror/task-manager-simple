// Wait until the page is fully loaded before running JS
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the button and message div
  const button = document.getElementById("completeTaskBtn");
  const messageDiv = document.getElementById("message");

  // Add click event listener to the button
  button.addEventListener("click", function () {
    // Show alert notification
    alert("Task completed! Notification sent.");

    // Update message on the page as visual feedback
    messageDiv.textContent = "Task marked as completed.";
  });
});
