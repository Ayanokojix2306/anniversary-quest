// Handle the 'Continue' button click
document.getElementById('continue-btn').addEventListener('click', function() {
  // Hide welcome screen
  document.getElementById('welcome-screen').style.display = 'none';
  
  // Show first question
  document.getElementById('question-1').style.display = 'block';
});

// Handle 'Submit' for boyfriend name (Question 1)
document.getElementById('submit-boyfriend-btn').addEventListener('click', function() {
  const boyfriendName = document.getElementById('boyfriend-name').value;
  
  if (boyfriendName) {
    // Hide question 1
    document.getElementById('question-1').style.display = 'none';
    
    // Update the second question dynamically
    document.getElementById('question-2-text').textContent = `What do you love about ${boyfriendName}?`;
    
    // Show question 2
    document.getElementById('question-2').style.display = 'block';
  } else {
    alert("Please enter the name of your boyfriend!");
  }
});

// Handle 'Submit' for love reason (Question 2)
document.getElementById('submit-love-reason-btn').addEventListener('click', function() {
  const loveReason = document.getElementById('love-reason').value;
  
  if (loveReason) {
    // Here you can add more questions or proceed to the next part of the quiz
    alert("Aww, you are making me blush! Stop it!");
    
    // Example of showing confetti
    document.getElementById('confetti').style.display = 'block';
  } else {
    alert("Please enter what you love about him!");
  }
});

// Confetti placeholder for later expansion
function showConfetti() {
  // Placeholder for more advanced confetti, if added later
  console.log("Confetti! 🎉");
}
