document.addEventListener("DOMContentLoaded", () => {
  const logoText = document.getElementById('logo-text');
  const textContent = logoText.textContent;

  // Clear the text
  logoText.textContent = "";

  // Wrap each letter in a <span>
  for (let i = 0; i < textContent.length; i++) {
    const span = document.createElement('span');
    span.textContent = textContent[i];
    logoText.appendChild(span);
  }
});
