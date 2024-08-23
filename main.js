// Get the theme selector element
const themeSelector = document.getElementById('themeSelector');

// Change theme based on the selected value
themeSelector.addEventListener('change', function() {
  document.documentElement.className = this.value;
});

// Get the image element
const img = document.getElementById('pfp');

// Add click event listener to the image
img.addEventListener('click', function() {
  // Redirect to a different link
  window.location.href = 'https://duckduckgo.com/?q=Canadian+Marble+Fox&iax=images&ia=images';
});