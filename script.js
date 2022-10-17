// --------------------------------- \\
// -------- JavaScript Page -------- \\
// --------------------------------- \\


const keys = document.querySelectorAll('.key');
const regulars = document.querySelectorAll('.key.white');
const sharps = document.querySelectorAll('.key.black');

const whitekey = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'];
const blackkey = ['w', 'e', 't', 'y', 'u', 'o', 'p'];

// -- play via mobile and/or mouse click -- //
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
});

// -- play via desktop keyboard -- //
document.addEventListener('keydown', e => {
    if (e.repeat) return; 
    const key = e.key;

    const whiteKeyIndex = whitekey.indexOf(key);
    const blackKeyIndex = blackkey.indexOf(key);

    if (whiteKeyIndex > -1) playNote(regulars[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(sharps[blackKeyIndex]);
});

// -- click to play audio function -- //
let playNote = (key) => {
    const noteSound = document.getElementById(key.dataset.note);
    noteSound.currentTime = 0;
    noteSound.play();
    key.classList.add('active');
    noteSound.addEventListener('ended', () => {
        key.classList.remove('active')
    });
};