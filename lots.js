async function populateLots() {
    const urlParams = new URLSearchParams(window.location.search);
    const lotName = urlParams.get('lot'); // Extract lot parameter from URL

    const url = 'https://ilyasparra.github.io/SD330//parking.json'; // Your original URL
    const response = await fetch(url);
    const data = await response.json();
    const lots = data["lots"];

    const lotList = document.getElementById("lots");
    for (const lotName in lots) {
        const lot = lots[lotName];
        const lotItem = document.createElement("li");

        // Check if the current lot matches the extracted lot parameter
        if (lotName === lotName) {
            // Create the link for the lot
            const lotLink = document.createElement("a");
            lotLink.innerText = lotName;
            lotLink.href = `mylots2.html?lot=${lotName}`; // Pass lot parameter to mylots2.html
            lotLink.addEventListener('click', () => showLotDetails(lotName, lot));
            
            // Display the availability status separately
            const availabilityStatus = document.createElement("span");
            availabilityStatus.innerText = ` - Available: ${lot.Available}/${lot.Total}`;
            
            // Append link and availability status to lot item
            lotItem.appendChild(lotLink);
            lotItem.appendChild(availabilityStatus);

            const detailsTable = document.createElement("table");
            const detailsRowKeys = ["Fac/Staff", "Total", "Map", "Security", "Type"];
            for (const key of detailsRowKeys) {
                const row = detailsTable.insertRow();
                const cell1 = row.insertCell();
                const cell2 = row.insertCell();
                cell1.textContent = key;
                cell2.textContent = lot[key];
            }

            lotItem.appendChild(detailsTable);
            lotList.appendChild(lotItem);
        }
    }
}

function showLotDetails(lotName, lot) {
    // Implement the logic to show details of the selected lot, such as parking spaces
    console.log(`Showing details for ${lotName}:`, lot);
}

populateLots();

