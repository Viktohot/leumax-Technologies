const toggleButton = document.getElementById("toggleButton");
const toggleButton1 = document.getElementById("toggleButton1");
const toggleButton2 = document.getElementById("toggleButton2");

const content = document.getElementById("content");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");

toggleButton.addEventListener("click", function () {
  if (content.style.display === "none" || content.style.display === "") {
    // Show the content
    content.style.display = "block";
    toggleButton.textContent = "-";
  } else {
    // Hide the content
    content.style.display = "none";
    toggleButton.textContent = "+";
  }
});

toggleButton1.addEventListener("click", function () {
  if (content1.style.display === "none" || content1.style.display === "") {
    // Show the content
    content1.style.display = "block";
    toggleButton1.textContent = "-";
  } else {
    // Hide the content
    content1.style.display = "none";
    toggleButton1.textContent = "+";
  }
});

toggleButton2.addEventListener("click", function () {
  if (content2.style.display === "none" || content2.style.display === "") {
    // Show the content
    content2.style.display = "block";
    toggleButton2.textContent = "-";
  } else {
    // Hide the content
    content2.style.display = "none";
    toggleButton2.textContent = "+";
  }
});
