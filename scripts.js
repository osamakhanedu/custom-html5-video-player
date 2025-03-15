/** Get our element */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");


const toggle = player.querySelector(".toggle");
const skipButton = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll('.player__slider');


/** Build function */
/**
 * togglePlay function will toggle the video playback 
 * if video is playing it will pause it and if it is pause 
 * it will paly it.
 */
function togglePlay() {
    if (video.paused) {
        video.play()
    } else {
        video.pause();
    }
}

function updateButton() {
    // Todo update UI to show pa

    console.log("update button" + this.paused)
    const icon = this.paused ? '▶️' : '⏸️'
    toggle.textContent = icon;
}

function skip() {

    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
    // this.name = volume or playback rate 

    video[this.name] = this.value;

}


function handleProgress() {

    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`

}

function scrub(event) {
    const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;

    video.currentTime = scrubTime;
}

/** hook up event listener */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButton.forEach(button => {
    button.addEventListener('click', skip);
})

ranges.forEach(range => {
    range.addEventListener('change', handleRangeUpdate);
})

progress.addEventListener('click', scrub)