async function populateDonnellySpaces() {
    const url = 'https://ilyasparra.github.io/SD330//parking.json';

    const response = await fetch(url);
    const data = await response.json();

    const donnellySpaces = data.lots.Donnelly.ParkingSpaces;

    const tbody = document.getElementById("ParkingSpaces");
    for (const spaceName in donnellySpaces) {
        const space = donnellySpaces[spaceName];
        const row = document.createElement("tr");

        const cells = [
            spaceName,
            space.Type,
            space.Status,
            space.Availability,
            space.FilledDateTime,
            space.ReservedDateTime
        ];
        cells.forEach(cellData => {
            const cell = document.createElement("td");
            cell.textContent = cellData;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    }
}

populateDonnellySpaces();

