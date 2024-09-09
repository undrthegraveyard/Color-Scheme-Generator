// api.js
const API_BASE_URL = 'https://www.thecolorapi.com';

export async function getColorScheme(seedColor, colorScheme) {
  const url = `${API_BASE_URL}/scheme?hex=${seedColor.substring(1)}&mode=${colorScheme}&count=5`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}