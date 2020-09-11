$(".album-poster").on('click', function(e) {
    var dataSwitchId = $(this).attr('data-switch');
    ap.list.switch(dataSwitchId);
    ap.play();
    $("#aplayer").addClass('showPlayer');
})

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [{
            name: 'Homicide - Logic - (feat. Eminem)',
            artist: 'CONFESSIONS OF A DANGEROUS MIND',
            url: '/misc/Logic - Homicide (feat. Eminem) (Official Audio).mp3',
            cover: '/img/confessions-of-a-dangerous-mind.jpg'
        },

        {
            name: 'Come & Go - Juice WRLD - (with Marshmello)',
            artist: 'LEGENDS NEVER DIE',
            url: '/misc/Juice WRLD  Marshmello - Come  Goa (Official Music Video).mp3',
            cover: '/img/legends-never-die.jpg'
        },

        {
            name: 'Stay - Jake Hill',
            artist: 'SOLACE',
            url: '/misc/Jake Hill - Stay (Prod. CXDY).mp3',
            cover: '/img/solace.jpg'
        },

        {
            name: 'Highest in The Room - Travis Scott',
            artist: 'HIGHEST IN THE ROOM',
            url: '/misc/Travis Scott - HIGHEST IN THE ROOM.mp3',
            cover: '/img/highest-in-the-room.jpg'
        },

        {
            name: 'Isis - Joyner Lucas - (feat. Logic)',
            artist: 'A-D-H-D',
            url: '/misc/Joyner Lucas ft. Logic - ISIS (ADHD).mp3',
            cover: '/img/adhd.jpg'
        },

        {
            name: 'Ransom - Lil Teccca',
            artist: 'WE LOVE YOU TECCA',
            url: '/misc/Lil Tecca - Ransom (Dir. by _ColeBennett_).mp3',
            cover: '/img/we-love-you-tecca.jpg'
        },

        {
            name: '1-1800-273-8255 - Logic, Alessia Cara, Khalid',
            artist: 'EVERYBODY',
            url: '/misc/Logic - 1-800-273-8255 ft. Alessia Cara  Khalid (Official Audio).mp3',
            cover: '/img/everybody.jpg'
        },

        {
            name: 'Camelot - NLE Choppa',
            artist: 'TOP SHOTTA',
            url: '/misc/NLE Choppa - Camelot (Dir. by _ColeBennett_).mp3',
            cover: '/img/top-shotta.jpg'
        }

    ]
});