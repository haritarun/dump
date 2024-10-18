
const drums = document.querySelectorAll('.drum');


function playSound(drum) {
    const sound = drum.getAttribute('data-sound');
    const audio = new Audio(`sounds/${sound}.mp3`); 
    audio.play();

 
    drum.classList.add('active');
    setTimeout(() => {
        drum.classList.remove('active');
    }, 150);
}


drums.forEach(drum => {
    drum.addEventListener('click', () => {
        playSound(drum);
    });
});

document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    const drum = Array.from(drums).find(d => d.getAttribute('data-key') === key);
    if (drum) {
        playSound(drum);
    }
});
function animateTitle() {
    const title = document.getElementById('drum-title');
    const text = title.textContent; 
    title.textContent = ''; 

    
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            title.textContent += text.charAt(index); 
            index++;
        } else {
            clearInterval(interval); 
        }
    }, 150); 
}


window.onload = animateTitle;