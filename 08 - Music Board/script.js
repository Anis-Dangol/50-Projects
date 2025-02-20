const sounds = [
    'Andrah - bye bye', 
    'Taylor Swift - Daylight', 
    'J.Tajor - Like I Do', 
    'Suriel Hess - Little Bit More', 
    'The Chainsmokers - All We Know'
];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();

        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
}