 // Function to display window properties
 function showWindowInfo() {
    const output = document.getElementById("output");
    output.innerHTML = `
        <b>Window Properties:</b><br>
        Width: ${window.innerWidth}px<br>
        Height: ${window.innerHeight}px<br>
        Available Height: ${window.screen.availHeight}px<br>
        Available Width: ${window.screen.availWidth}px<br>
    `;
}

// Function to display screen properties
function showScreenInfo() {
    const output = document.getElementById("output");
    output.innerHTML = `
        <b>Screen Properties:</b><br>
        Width: ${screen.width}px<br>
        Height: ${screen.height}px<br>
        Color Depth: ${screen.colorDepth} bits<br>
        Pixel Depth: ${screen.pixelDepth} bits<br>
    `;
}

// Function to display location properties
function showLocationInfo() {
    const output = document.getElementById("output");
    output.innerHTML = `
        <b>Location Properties:</b><br>
        URL: ${window.location.href}<br>
        Hostname: ${window.location.hostname}<br>
        Pathname: ${window.location.pathname}<br>
        Protocol: ${window.location.protocol}<br>
    `;
}

