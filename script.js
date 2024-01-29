// Select the elements with the specified classes
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

// Add a click event listener to the speed element
speed.addEventListener('click', function(e) {
    // Calculate the vertical position of the click relative to the speed element
    const y = e.pageY - this.offsetTop;
    
    // Calculate the percentage of the click position relative to the height of the speed element
    const percent = y / this.offsetHeight;
    
    // Define the minimum and maximum playback speeds
    const min = 0.4;
    const max = 4.01;
    
    // Calculate the height of the speed bar and round it to the nearest percentage
    const height = Math.round(percent * 100) + '%';
    
    // Calculate the playback rate based on the percentage
    const playbackRate = percent * (max - min) + min;
    
    // Set the height and text content of the speed bar
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    
    // Set the playback rate of the video
    video.playbackRate = playbackRate;
});
