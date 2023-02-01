(function() {

    const questRooms = [
        {
            roomName:'Jumanji',
            cardSubclass: 'jumanji',
            image: 'our-rooms-jumanji.png',
            playersQuontity: '2-6',
            roomDescription: `It all started as in the same-name movie: you started a game that
            brought you to real jungles! Everything is strange, poisoned and willing to kill you here.
            Now you are in a hunter's house but it's not safe here. Can you find your way out from
            the killing jungles? You better hurry - it's a life-or-death
            matter.`
        },
        {
            roomName:'Crazy Scientist',
            cardSubclass: 'crazy-scientist',
            image: 'our-rooms-crazy-scientist.jpeg',
            playersQuontity: '4-9',
            roomDescription: `It was an ordinary day. You and your friends received an invitation to the party in an unfamiliar
            neighborhood.
            Everything was awesome until you were trapped in a strange room with flasks and suspicious devices.
            You understood that the host is a scientist and he didn't like that you nosed into his business.
            You felt it could be dangerous. How to save your life from a crazy scientist?`
        },
        {
            roomName:'Sherlock Holmes',
            cardSubclass: 'sherlock-holmes',
            image: 'our-rooms-sherlock-holmes.png',
            playersQuontity: '2-7',
            roomDescription: `Sherlock Holmes gives you the first clue to the unsolved Egyptian mystery.
            Somewhere in the room, you will find the key to the ancient myth.
            It will also be your clue to finding a way out.
            You are Sherlock Holmes' only hope to solving the mystery, so better get going — it's about to get
            real.`
        },
        {
            roomName:'Who Killed the Violinist?',
            cardSubclass: 'who-killed-the-volinist',
            image: 'our-rooms-who-killed-the-volinist.jpeg',
            playersQuontity: '4-6',
            roomDescription: `Investigating the murder of an old violinist, you ended up in his music room.
            While you examined the evidence, the door to the room snapped shut.
            There are no windows or ventilation, it becomes difficult to breathe.
            There must be a spare door key somewhere, but where?`
        },
        {
            roomName:'The Haunted House',
            cardSubclass: 'the-haunted-house',
            image: 'our-rooms-the-haunted-house.jpeg',
            playersQuontity: '3-5',
            roomDescription: `When you went out with your friends on a picnic, did you think you would end up in a horror? Hardly.
            But still, here you are: finding shelter from a terrible storm in a haunted house.
            Evil spirit wants to kill you! no matter what.
            The clock is ticking and your nerves are tickling. Hurry up!`
        }
    ];
    
    function renderRooms (questRooms) {
        const ourRoomsList = document.querySelector('.our-rooms__list');
        for (const quest of questRooms) {
            ourRoomsList.innerHTML += `
            <div class="our-rooms__${quest.cardSubclass} room__card">
            <img class="room__image" src="img/${quest.image}" alt="Jumanji">
            <div class="room__info">
                <div class="room__main-info">
                    <h3 class="room__name-title">Name</h3>
                    <p class="room__name">${quest.roomName}</p>
                    <h3 class="room__players-title">Players</h3>
                    <p class="room__players-quontity">${quest.playersQuontity}</p>
                </div>
                <p class="room__description">
                    ${quest.roomDescription}
                </p>
                <a class="room__button" href="#">Learn More</a>
            </div>
        </div>`;
        }
    }

    renderRooms(questRooms);

})();