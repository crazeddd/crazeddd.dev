const catalogue = document.querySelector(".songs-grid") as HTMLDivElement;
let audios = document.querySelectorAll(
  ".audio-card",
) as NodeListOf<HTMLDivElement>;

const playButton = document.getElementById("play-button") as HTMLButtonElement;
const nextButton = document.getElementById("next-button") as HTMLButtonElement;
const previousButton = document.getElementById(
  "previous-button",
) as HTMLButtonElement;

const seekBar = document.getElementById("seek-bar") as HTMLInputElement;
const currentTimeEl = document.getElementById(
  "current-time",
) as HTMLSpanElement;
const durationEl = document.getElementById("duration") as HTMLSpanElement;

const slider = document.querySelectorAll(
  "input[type='range']",
) as NodeListOf<HTMLInputElement>;

let currentAudio: HTMLAudioElement | null = null;
let audioListenersController: AbortController | null = null;

let songs = [
  {
    title: "Millenial Remix - 7Lions (EDM)",
    authors: ["CRNN"],
    src: "/songs/7lions_remix_2.mp3",
    cover: "img-bg.jpg",
    id: "1",
  },
  {
    title: "Yeah (Kpop)",
    authors: ["CRNN"],
    src: "/songs/kpop_thing.mp3",
    cover: "img-bg.jpg",
    id: "2",
  },
  {
    title: "Paradise (House)",
    authors: ["CRNN"],
    src: "/songs/hausekinda_2.mp3",
    cover: "img-bg.jpg",
    id: "3",
  },
  {
    title: "Nice Melody (Pop)",
    authors: ["CRNN"],
    src: "/songs/pop_banger_2.mp3",
    cover: "img-bg.jpg",
    id: "4",
  },
  {
    title: "Something (Synthwave)",
    authors: ["CRNN"],
    src: "/songs/f1.mp3",
    cover: "img-bg.jpg",
    id: "5",
  },
  {
    title: "Nights (Liquid DnB)",
    authors: ["CRNN"],
    src: "/songs/night.mp3",
    cover: "img-bg.jpg",
    id: "6",
  },
  {
    title: "Cool Idea (EDM)",
    authors: ["CRNN"],
    src: "/songs/verycool.mp3",
    cover: "img-bg.jpg",
    id: "7",
  },
  {
    title: "Awake (Cinematic)",
    authors: ["CRNN"],
    src: "/songs/its_crazed_novocals_drums.mp3",
    cover: "img-bg.jpg",
    id: "8",
  },
  {
    title: "Ballad (Pop Ballad)",
    authors: ["CRNN"],
    src: "/songs/ballad.mp3",
    cover: "img-bg.jpg",
    id: "9",
  }
];

const appendSongs = () => {
  songs.forEach((song) => {
    const newSong = document.createElement("div") as HTMLDivElement;
    newSong.classList.add("audio-card");
    newSong.setAttribute("data-id", song.id);
    newSong.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
    newSong.innerHTML = `<div class="audio-card-img">
            <i class="fa-solid fa-music"></i>
            <img src="${song.cover}" />
          </div>
          <div class="audio-card-header">
            <h5>${song.title}</h5>
            <p>${song.authors.join(", ")}</p>
          </div>`;
    catalogue.appendChild(newSong);
  });
  audios = document.querySelectorAll(
    ".audio-card",
  ) as NodeListOf<HTMLDivElement>;
};

const detachOldAudio = () => {
  if (currentAudio) {
    currentAudio.pause();
  }

  if (audioListenersController) {
    audioListenersController.abort();
    audioListenersController = null;
  }
};

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const addAudioEventListeners = () => {
  audios.forEach((audio) => {
    audio.addEventListener("click", (e) => {
      const target = e.target as HTMLDivElement;
      const selectedEl = target.closest(".audio-card") as HTMLDivElement | null;
      const activeCard = document.querySelector(
        ".active-audio",
      ) as HTMLDivElement | null;
      activeCard?.classList.remove("active-audio");

      const song = songs.find(
        (s) => s.id === selectedEl?.getAttribute("data-id"),
      );
      if (!song) return;

      if (currentAudio) {
        detachOldAudio();
      }

      selectedEl?.classList.add("active-audio");

      audioListenersController = new AbortController();

      const audio = new Audio(song.src);
      audio.play();
      currentAudio = audio;

      const controller = audioListenersController;
      const trackAudio = audio;

      playButton.innerHTML = "<i class='fa-solid fa-pause'></i>";

      currentAudio.addEventListener(
        "timeupdate",
        () => {
          const progress = (trackAudio.currentTime / trackAudio.duration) * 100;

          seekBar.value = progress.toString();
        },
        { signal: controller.signal },
      );

      currentAudio.addEventListener(
        "loadedmetadata",
        () => {
          durationEl.textContent = formatTime(trackAudio.duration);
        },
        { signal: controller.signal },
      );

      currentAudio.addEventListener(
        "timeupdate",
        () => {
          currentTimeEl.textContent = formatTime(trackAudio.currentTime);
        },
        { signal: controller.signal },
      );

      currentAudio.addEventListener(
        "ended",
        () => {
          playButton.innerHTML = "<i class='fa-solid fa-play'></i>";
        },
        { signal: controller.signal },
      );
    });
  });
};

playButton.addEventListener("click", () => {
  if (currentAudio?.paused) {
    currentAudio.play();
    playButton.innerHTML = "<i class='fa-solid fa-pause'></i>";
  } else {
    currentAudio?.pause();
    playButton.innerHTML = "<i class='fa-solid fa-play'></i>";
  }
});

nextButton.addEventListener("click", () => {
  if (!currentAudio) return;
  const activeCard = document.querySelector(
    ".active-audio",
  ) as HTMLDivElement | null;
  const nextCard = activeCard?.nextElementSibling as HTMLDivElement | null;
  if (!nextCard) return;
  nextCard.click();
});

previousButton.addEventListener("click", () => {
  if (!currentAudio) return;
  const activeCard = document.querySelector(
    ".active-audio",
  ) as HTMLDivElement | null;
  const previousCard =
    activeCard?.previousElementSibling as HTMLDivElement | null;
  if (!previousCard) return;
  previousCard.click();
});

seekBar.addEventListener("input", () => {
  const time = (seekBar.valueAsNumber / 100) * currentAudio!.duration;

  currentAudio!.currentTime = time;
});

slider.forEach((item: HTMLInputElement) => {
  item.addEventListener("input", (e: Event) => {
    const min = (e.target as HTMLInputElement).min || "0";
    const max = (e.target as HTMLInputElement).max || "100";
    const pct =
      ((parseInt((e.target as HTMLInputElement).value) - parseInt(min)) /
        (parseInt(max) - parseInt(min))) *
      100;
    item.style.setProperty("--range-pct", pct + "%");
    console.log(pct);
  });
});

appendSongs();
addAudioEventListeners();
