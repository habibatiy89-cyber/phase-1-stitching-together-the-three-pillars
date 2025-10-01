/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}
// Step 1: Select all the heart elements (DOM manipulation)
const articleHearts = document.querySelectorAll(".like-button");

// Step 2: Mock server communication function
function mockServerCall(url="http://localhost:3000", config={}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Randomly fail 20% of the time
      if (Math.random() < 0.2) {
        reject({ message: "Random server error. Try again!" });
      } else {
        resolve({ message: "Server notified of like!" });
      }
    }, 300);
  });
}

// Step 3: Add event listeners to each heart
articleHearts.forEach(heart => {
  heart.addEventListener("click", () => {
    // Simulate server call
    mockServerCall()
      .then(() => {
        // Toggle heart color to indicate like/unlike
        if (heart.textContent === "♡") {
          heart.textContent = "♥";
          heart.style.color = "red";
        } else {
          heart.textContent = "♡";
          heart.style.color = "black";
        }
      })
      .catch(error => {
        // Display error message in DOM
        const errorDiv = document.createElement("div");
        errorDiv.textContent = error.message;
        errorDiv.style.color = "red";
        document.body.appendChild(errorDiv);
      });
  });
});
