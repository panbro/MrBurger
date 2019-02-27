var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '405',
    width: '660',
    videoId: 'zmg_jOwa9Fc',
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    },
    // videoId: 'M7lc1UVf-VE',
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

$(".player__playback").on("click", e => {
  // e.preventDefault();
  const bar = $(e.currentTarget);
  const newButtonPosition = e.originalEvent.layerX;
  const clickedPercent = (newButtonPosition / bar.width()) * 100;
  const newPlayerTime = (player.getDuration() / 100) * clickedPercent;

  player.seekTo(newPlayerTime);
  // changeButtonPosition(clickedPercents);
});

$(".player__splash").on("click", e => {
  player.playVideo();
});

function onPlayerReady(event) {
  let interval;
  const durationTime = player.getDuration();
  clearInterval(interval);

  updateTimerDisplay();

  interval = setInterval(() => {
    const completedTime = player.getCurrentTime();
    const percent = (completedTime / durationTime) * 100;

    $(".player__playback-button").css({
      left: `${percent}%`
    });
    // changeButtonPosition(percents);

    updateTimerDisplay();
  }, 1000);
}

function onPlayerStateChange(event) {
  const btn = $(".player__start");
  switch (event.data) {
    case 1:
      $(".player__wrapper").addClass("active");
      btn.addClass("paused");
      break;
    case 2:
      btn.removeClass("paused");
      break;
  }
}



function updateTimerDisplay() {
  $(".player__duration-estimate").text(formatTime(player.getDuration()));
  $(".player__duration-completed").text(formatTime(player.getCurrentTime()));
}



$('.player__start').on('click', e => {
  // const btn = $(e.currentTarget);
  const playerState = player.getPlayerState();
  // 1 – воспроизведение видео не началось
  // 0 – воспроизведение видео завершено
  // 1 – воспроизведение
  // 2 – пауза
  // 3 – буферизация
  // 5 – видео находится в очереди
  
  if (playerState !== 1) {
    player.playVideo()
    // btn.addClass('paused');
  } else {
    player.pauseVideo();
    // btn.removeClass('paused');
  }
  console.log(player.getCurrentTime());

})

function formatTime(time) {
  const roundTime = Math.round(time);
  const minutes = Math.floor(roundTime / 60);
  const seconds = roundTime - minutes * 60;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${formattedSeconds}`
}

$(".player__playback").on("click", e => {
  e.preventDefault();
  const bar = $(e.currentTarget);
  const newButtonPosition = e.pageX - bar.offset().left;
  const clickedPercents = (newButtonPosition / bar.width()) * 100;
  const newPlayerTime = (player.getDuration() / 100) * clickedPercents;

  changeButtonPosition(clickedPercents);
  player.seekTo(newPlayerTime);
});