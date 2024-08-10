const cssSelector = document.getElementById('css-selector');
        const stylesheetLink = document.getElementById('theme-stylesheet');

        cssSelector.addEventListener('change', function() {
            // Get the selected value from the dropdown
            const selectedCSS = cssSelector.value;
            
            // Update the href attribute of the link tag to switch CSS files
            stylesheetLink.href = selectedCSS;
});