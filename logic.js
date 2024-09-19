const sheetURL = "https://script.google.com/macros/s/AKfycbzAoHwgx_7PUx4svnUbWaDdOtxsQPNzHEJztZmWmfHfJ7aqJvVDaZ2TKeglgjX5i1XsuQ/exec";

async function fetchData() {
  try {
    const response = await fetch(sheetURL);
    const data = await response.json();
    createButtons(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function createButtons(data) {
  const container = document.getElementById("data-container");
  
  data.forEach(item => {
    // Create a button for each applicant name (Column C)
    const button = document.createElement("button");
    button.textContent = item.applicant;
    button.classList.add("applicant-button");
    
    // Add an event listener for when the button is clicked
    button.addEventListener("click", () => {
      displayData(item.data);  // Pass the corresponding data to the displayData function
    });
    
    container.appendChild(button);
  });
}

function displayData(data) {
  const displayContainer = document.getElementById("display-container");
  displayContainer.innerHTML = '';  // Clear previous content
  
  // Create and display all the relevant columns (A to I)
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  
  columns.forEach((col, index) => {
    const dataElement = document.createElement("div");
    dataElement.classList.add("data-row");
    dataElement.textContent = `Column ${col}: ${Object.values(data)[index]}`;
    displayContainer.appendChild(dataElement);
  });
}

window.onload = fetchData;

async function fetchData() {
  console.log("Fetching data from Google Apps Script..."); // Debug log
  try {
    const response = await fetch(sheetURL);
    const data = await response.json();
    console.log("Data received:", data);  // Check if data is returned correctly
    createButtons(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
