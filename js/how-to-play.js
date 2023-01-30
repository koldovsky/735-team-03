(function() {

    const rules = [
        {
            id: '1',
            description: 'Door Pic',
            image: 'img/how-to-play-door.svg',
            text: 'Book a room and come<br>at the appointed date and time'
        },
        {
            id: '2',
            description: 'Hourglass Pic',
            image: 'img/how-to-play-hourglass.svg',
            text: 'You have 60 minutes to solve<br>the mystery and escape the room'
        },
        {
            id: '3',
            description: 'Lock Pic',
            image: 'img/how-to-play-lock.svg',
            text: 'Time to solve the maze -<br>find clues and the way out'
        }
    ];

    function renderRules(rules) {
        const rulesContainer = document.querySelector('.how-to-play__rules');
        rulesContainer.innerHTML = '';
        for (const rule of rules) {
            rulesContainer.innerHTML += `
            <div class="how-to-play__rule rule">
            <img class="rule__pic" src=${rule.image} alt=${rule.description}>
            <p class="rule__text">
                ${rule.text}
            </p>
        </div>`;
        }
    }
    renderRules(rules);

})();