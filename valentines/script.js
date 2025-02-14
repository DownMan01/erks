function growRose() {
    document.getElementById("flower").classList.add("grow");
    document.getElementById("flower").classList.remove("hidden");
    document.getElementById("flowerContainer").innerHTML += `
        <svg id="flower-frame" version="1.1"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 641.5 637.3">
            <!-- Paste the SVG content from your file here -->
        </svg>`;
}
