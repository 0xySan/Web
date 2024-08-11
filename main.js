// Get the theme selector element
const themeSelector = document.getElementById('themeSelector');

// Change theme based on the selected value
themeSelector.addEventListener('change', function() {
  document.documentElement.className = this.value;
});