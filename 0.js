document.addEventListener("DOMContentLoaded", function () {
    const videos = Array.from({ length: 110 }, (_, i) => `source/videos/${i}.mp4`);
    videos[0] = "source/videos/0.mp3";
    const bgVideo = document.getElementById('bgVideo'),
          credit_text = document.getElementById('credit_text'),
          resoulatorElement = document.getElementById('resoulatorId');
    function setVideo(src) {
        const videoName = src.split('/').pop();
        bgVideo.src = src;
        credit_text.innerHTML = src === 'source/videos/0.mp3'
            ? `🎵 <a href="https://www.youtube.com/watch?v=X4DORgzndYI" target="_blank">Vibe Tracks - I Love You</a><br><br>Website by <a href="https://t.me/lowpings" target="_blank">@LowPings</a>`
            : `🎬 ${videoName}<br><br>Thanks <a href="https://www.tiktok.com/@lyoshnka" target="_blank">@lyoshnka</a> for videos.<br>Website by <a href="https://t.me/lowpings" target="_blank">@LowPings</a>`;
        document.title = src === 'source/videos/0.mp3' ? `🎵 ${videoName}` : `🎬 ${videoName}`;
        bgVideo.style.background = src === 'source/videos/0.mp3' ? '' : 'none';
    }
    function createDebugMode() {
        const debugButton = document.createElement("button");
        debugButton.textContent = `Debug mode ▶`;
        debugButton.style.position = "fixed";
        debugButton.style.textAlign = "left";
        debugButton.style.fontSize = "12px";
        debugButton.style.fontFamily = "Cantarell";
        debugButton.style.color = "white";
        debugButton.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        debugButton.style.width = "100%";
        debugButton.style.border = "none";
        debugButton.style.borderRadius = "5px";
        debugButton.style.top = "0px";
        debugButton.style.left = "0px";
        debugButton.style.padding = "5px";
        debugButton.style.margin = "5px";
        debugButton.style.zIndex = "1000";
        document.body.appendChild(debugButton);
        const debugContainer = document.createElement("div");
        debugContainer.style.top = "32px";
        debugContainer.style.position = "fixed";
        debugContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        debugContainer.style.fontSize = "12px";
        debugContainer.style.fontFamily = "Cantarell";
        debugContainer.style.display = "none";
        debugContainer.style.color = "white";
        debugContainer.style.width = "100%";
        debugContainer.style.padding = "5px";
        debugContainer.style.margin = "5px";
        debugContainer.style.border = "none";
        debugContainer.style.borderRadius = "5px";
        document.body.appendChild(debugContainer);
        debugButton.addEventListener("click", () => {
            debugContainer.style.display = debugContainer.style.display === "none" ? "block" : "none";
            debugButton.textContent = debugButton.textContent === "Debug mode ▼" ? "Debug mode ▶" : "Debug mode ▼";
        });
        const gridContainer = document.createElement("div");
        gridContainer.style.display = "flex";
        gridContainer.style.flexWrap = "wrap";
        gridContainer.style.gap = "5px";
        gridContainer.style.lineHeight = "10px";
        debugContainer.appendChild(gridContainer);
        videos.forEach((video, index) => {
            const label = document.createElement("label");
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "videoSelection";
            radio.value = index;
            radio.checked = index === getVideoIdFromUrl();
            radio.addEventListener("change", () => {
                window.history.pushState({}, "", `?debug&id=${index}`);
                setVideo(videos[index]);
            });
            label.appendChild(radio);
            label.appendChild(document.createTextNode(video.split('/').pop()));
            gridContainer.appendChild(label);
        });
    }
    function getVideoIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return parseInt(params.get("id")) || Math.floor(Math.random() * videos.length);
    }
    const now = new Date();
    const currentHour = now.getHours();
    const isMorning = currentHour >= 6 && currentHour < 13;
    const isDebugMode = new URLSearchParams(window.location.search).has("debug");
    if (isDebugMode) createDebugMode();
    if (isMorning) {
        setVideo("source/videos/postthisмяумяуeveryweek.mp4");
    } else {
        const initialId = getVideoIdFromUrl();
        setVideo(videos[initialId]);
    }
    function resoulatorFunc() {resoulatorElement.innerHTML = `📺 Display size: <span style="color: #aaffff">${window.innerWidth}x${window.innerHeight}</span>`;}
    resoulatorFunc();
    window.addEventListener('resize', resoulatorFunc);
});
