# Video Speed Scrubber
https://victor4rthur.github.io/Speed-Bar-Controller/

This simple web application allows users to control the playback speed of a video by clicking on a speed bar. 
The speed bar is displayed below the video, and clicking at different positions on the bar adjusts the video playback speed accordingly.

## How It Works

- The JavaScript code in `script.js` handles the click event on the speed bar.
- When the user clicks on the speed bar, the vertical position of the click is calculated relative to the speed element.
- The percentage of the click position relative to the height of the speed element is then determined.
- The minimum and maximum playback speeds are defined, and the playback rate is calculated based on the percentage.
- The height and text content of the speed bar are updated to reflect the selected speed, and the video playback rate is set accordingly.

## Dependencies

- None. This project uses pure HTML, CSS, and JavaScript.
