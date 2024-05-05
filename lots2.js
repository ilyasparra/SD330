async function populateDonnellySpaces() {
    const url = 'https://ilyasparra.github.io/SD330//parking.json';

    const response = await fetch(url);
    const data = await response.json();

    const donnellySpaces = data.lots.Donnelly.ParkingSpaces;

    const lotList = document.getElementById("ParkingSpaces");
    for (const spaceName in donnellySpaces) {
        const space = donnellySpaces[spaceName];
        const spaceItem = document.createElement("li");
        spaceItem.innerText = `${spaceName}: Type - ${space.Type}, Status - ${space.Status}, Availability - ${space.Availability}`;
        lotList.appendChild(spaceItem);
    }
}

populateDonnellySpaces();
