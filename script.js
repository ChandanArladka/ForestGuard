// Create map centered on Bengaluru
var map = L.map('map').setView([12.9716, 77.5946], 11);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Create forest zone marker
var zoneA = L.marker([12.9716, 77.5946]).addTo(map)
    .bindPopup("🌳 Forest Zone A<br>Status: Safe<br>Risk: 20%")
    .openPopup();

// Simulate AI Risk Increase after 5 seconds
setTimeout(function () {
    zoneA.setPopupContent(
        "⚠ Forest Zone A<br>Status: HIGH RISK<br>Risk: 85%<br>Authorities Notified!"
    ).openPopup();
}, 5000);
