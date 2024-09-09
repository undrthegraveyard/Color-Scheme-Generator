// ColorSchemeGenerator.js
import { getColorScheme } from './api.js';

export class ColorSchemeGenerator {
  constructor(seedColorInput, schemeSelect, generateButton) {
    this.seedColorInput = seedColorInput;
    this.schemeSelect = schemeSelect;
    this.generateButton = generateButton;

    this.generateButton.addEventListener('click', () => this.generateColorScheme());
  }

  async generateColorScheme() {
    const seedColor = this.seedColorInput.value;
    const colorScheme = this.schemeSelect.value;

    try {
      const data = await getColorScheme(seedColor, colorScheme);
      this.updateColorScheme(data.colors);
    } catch (error) {
      console.error('Error:', error);
      alert(`Failed to fetch color scheme: ${error.message}`);
    }
  }

  updateColorScheme(colors) {
    for (let i = 0; i < colors.length; i++) {
      const color = colors[i].hex.value;
      const colorDiv = document.getElementById(`color-scheme-color-${i+1}`);
      colorDiv.style.backgroundColor = color;
      const colorValue = document.getElementById(`color-scheme-value-${i+1}`);
      colorValue.textContent = color;
    }
  }
}