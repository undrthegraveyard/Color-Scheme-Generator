const generateColorSchemeButton = document.getElementById('generate-color-scheme');

generateColorSchemeButton.addEventListener('click', () => {
  const seedColor = document.getElementById('seed-color').value;
  const colorScheme = document.getElementById('color-scheme').value;
  console.log(seedColor);
  console.log(colorScheme);

  fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor.substring(1)}&mode=${colorScheme}&count=5`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);

      for(let i = 0; i < data.colors.length; i++) {
        const color = data.colors[i].hex.value;
        const colorDiv = document.getElementById(`color-scheme-color-${i+1}`);
        colorDiv.style.backgroundColor = color;
        const colorValue = document.getElementById(`color-scheme-value-${i+1}`);
        colorValue.textContent = color;
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Display error message to the user
      alert(`Failed to fetch color scheme: ${error.message}`);
    });
});


