const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play and pause video.
toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

// Updates the play and pause icons.
updatePlayIcon = () => {
  return true;
};

// Updates the progress of the video and the timestamp.
updateProgress = () => {
  return true;
};

// Sets the progress bar to the point in the video that the user clicks to.
setVideoProgress = () => {
  return true;
};

// Stops video.
stopVideo = () => {
  return true;
};

// Event listener to play the video when it is paused and pause the video when it is playing.
video.addEventListener("click", toggleVideoStatus);
// Event listener that updates the pause icon to change into a play icon when video is being paused.
video.addEventListener("pause", updatePlayIcon);
// Event listener that updates the play icon to change into a pause icon when video is being played.
video.addEventListener("play", updatePlayIcon);
// Event listener that is continuously called to update the time and progress of the video.
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

// Event listener (change event) for the progress bar to go to that point in the video that the user clicks to.
progress.addEventListener("change", setVideoProgress);
