const audioContext = new (window.AudioContext || window.webkitAudioContext)();

let currentOctave = 4;

document.getElementById('octaveSelector').addEventListener('change', function() {
    currentOctave = parseInt(this.value);
});

function playTone(frequency) {
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
}

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        let baseFrequency;

        switch (note) {
            case 'C': baseFrequency = 261.63; break;
            case 'C#': baseFrequency = 277.18; break;
            case 'D': baseFrequency = 293.66; break;
            case 'D#': baseFrequency = 311.13; break;
            case 'E': baseFrequency = 329.63; break;
            case 'F': baseFrequency = 349.23; break;
            case 'F#': baseFrequency = 369.99; break;
            case 'G': baseFrequency = 392.00; break;
            case 'G#': baseFrequency = 415.30; break;
            case 'A': baseFrequency = 440.00; break;
            case 'A#': baseFrequency = 466.16; break;
            case 'B': baseFrequency = 493.88; break;
            case 'C2': baseFrequency = 523.25; break;
        }

        const frequency = baseFrequency * Math.pow(2, currentOctave - 4);
        playTone(frequency);
    });
});