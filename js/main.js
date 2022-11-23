const playBtn = document.querySelector('.iim')

const video = document.getElementById('video')

playBtn.addEventListener('click', function() {
    if(video.paused) {
        video.play()
        this.classList.add('playing')
    } else {
        video.pause()
        this.classList.remove('playing')
    }
})