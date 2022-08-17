// --------------------------------- \\
// -------- Javascript Page -------- \\
// --------------------------------- \\


const keys = document.querySelectorAll('.key');
const regulars = document.querySelectorAll('.key.white');
const sharps = document.querySelectorAll('.key.black');


keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})


// -- click to play audio function
let playNote = (key) => {
    const noteSound = document.getElementById(key.dataset.note)
    noteSound.currentTime = 0
    noteSound.play()
    key.classList.add('active')
    noteSound.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}