// app.js
import { ColorSchemeGenerator } from './ColorSchemeGenerator.js';

document.addEventListener('DOMContentLoaded', () => {
  const seedColorInput = document.getElementById('seed-color');
  const schemeSelect = document.getElementById('color-scheme');
  const generateButton = document.getElementById('generate-color-scheme');

  new ColorSchemeGenerator(seedColorInput, schemeSelect, generateButton);
});