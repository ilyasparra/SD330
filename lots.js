async function populateLots() {
    const url = 'https://ilyasparra.github.io/SD330//parking.json';
    const response = await fetch(url);
    const data = await response.json();
    const lots = data["lots"];

    const tbody = document.getElementById("lotsBody");
    for (const lotName in lots) {
        const lot = lots[lotName];

        // Create a new row for each lot
        const row = document.createElement("tr");

        // Create a clickable cell for the lot name
        const nameCell = document.createElement("td");
        const nameLink = document.createElement("a");
        nameLink.textContent = lotName;
        nameLink.href = `mylots2.html?lot=${lotName}`;
        nameCell.appendChild(nameLink);
        row.appendChild(nameCell);

        // Create cells for other lot details
        const detailCells = [
            "Fac/Staff",
            "Available",
            "Total",
            "Map",
            "Security",
            "Type"
        ];

        detailCells.forEach(key => {
            const cell = document.createElement("td");
            cell.textContent = lot[key];
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    }
}

populateLots();










