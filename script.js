const videos = Array.from({ length: 18 }, (_, i) => `source/videos/${i}.mp4`);
videos[0] = "source/videos/0.mp3";
const bgVideo = document.getElementById('bgVideo'),
credit_text = document.getElementById('credit_text'),
resoulatorElement = document.getElementById('resoulatorId'),
getVideo = videos[Math.floor(Math.random() * videos.length)];
const videoName = getVideo.split('/').pop();
bgVideo.src = getVideo;
credit_text.innerHTML = getVideo === 'source/videos/0.mp3'
    ? `🎵 <a href="https://www.youtube.com/watch?v=X4DORgzndYI" target="_blank">Vibe Tracks - I Love You</a><br><br>Website by <a href="https://t.me/lowpings" target="_blank">@LowPings</a>`
    : `🎬 ${videoName}<br><br>Thanks <a href="https://www.tiktok.com/@lyoshnka" target="_blank">@lyoshnka</a> for videos.<br>Website by <a href="https://t.me/lowpings" target="_blank">@LowPings</a>`;
if (getVideo === 'source/videos/0.mp3') bgVideo.style.animation = 'spin 15s linear infinite'; else bgVideo.style.background = 'none';
function resoulatorFunc() { resoulatorElement.innerHTML = `📺 Display size: <span style="color: #aaffff">${window.innerWidth}x${window.innerHeight}</span>`; }  
resoulatorFunc();
window.addEventListener('resize', resoulatorFunc);
