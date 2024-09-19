const sheetURL = "https://script.google.com/macros/s/AKfycbwWbgbpm-LOURaydVpwsy_bvfIyMokjBgKKfs4iIQtpotlRIk8ebj1qBmoItq742nN0Ig/exec"; // Replace this with your Google Apps Script URL

async function fetchData() {
  try {
    const response = await fetch(sheetURL);
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayData(data) {
  const container = document.getElementById("data-container");
  data.forEach(item => {
    const nameElement = document.createElement("div");
    nameElement.classList.add("name");
    nameElement.textContent = item.name;
    
    const infoElement = document.createElement("div");
    infoElement.classList.add("info");
    infoElement.textContent = item.info;
    
    container.appendChild(nameElement);
    container.appendChild(infoElement);
  });
}

window.onload = fetchData;
