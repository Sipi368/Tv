async function loadChannels() {
  const res = await fetch('data.json');
  const data = await res.json();
  const list = document.getElementById('channel-list');
  const player = videojs('player');

  data.forEach(item => {
    if (!item.catLink || item.catLink === "null") return;
    const img = document.createElement('img');
    img.src = item.image;
    img.title = item.title;
    img.onclick = () => {
      player.src({ src: item.catLink.trim(), type: 'application/x-mpegURL' });
      player.play();
    };
    list.appendChild(img);
  });
}

window.onload = loadChannels;
