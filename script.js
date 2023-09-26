document.addEventListener('DOMContentLoaded', function() {
    const rollDiceButton = document.getElementById('rollDice');
    const selectedAppDiv = document.getElementById('selectedApp');

    // Sample list of apps (you can add more)
    const apps = [
        {
            name: 'App 1',
            description: 'Description for App 1',
            image: 'app1.jpg',
        },
        {
            name: 'App 2',
            description: 'Description for App 2',
            image: 'app2.jpg',
        },
        // Add more apps here
    ];

    rollDiceButton.addEventListener('click', function() {
        // Randomly select an app
        const randomIndex = Math.floor(Math.random() * apps.length);
        const selectedApp = apps[randomIndex];

        // Display the selected app
        selectedAppDiv.innerHTML = `
            <h3>Randomly Selected App:</h3>
            <p><strong>Name:</strong> ${selectedApp.name}</p>
            <p><strong>Description:</strong> ${selectedApp.description}</p>
            <img src="${selectedApp.image}" alt="${selectedApp.name}" />
        `;
    });
});
