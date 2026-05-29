// import hljs from 'highlight.js/lib/common';
import { initThreeJS } from "./threejs";

import { blink, tick } from "./utils/guy";

const root = document.querySelector(":root");
const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

function displayModal() {
  const modal = document.querySelector(".modal") as HTMLDivElement;
  modal.classList.toggle("show");
}

function submitForm(event: Event) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const message = encodeURIComponent(form["message"].value);
  const email = "cranninja@gmail.com";

  const mailtoLink = `mailto:${email}?subject=${message}`;
  window.location.href = mailtoLink;
}

function toggleTheme() {
  const body = document.querySelector("body") as HTMLBodyElement | null;
  const button = document.getElementById(
    "theme-toggle",
  ) as HTMLButtonElement | null;

  if (body && button) {
    body.style.colorScheme =
      body.style.colorScheme === "dark" ? "light" : "dark";
    button.className =
      body.style.colorScheme === "dark"
        ? "fa-solid fa-moon"
        : "fa-solid fa-sun";
  }
}

async function glitch() {
  const chars = "1234567890.".split("");
  const textToGlitch = document.querySelectorAll(".txt-glitch");

  textToGlitch.forEach(async (item) => {
    let glitchedText = [];
    let text = item.textContent;
    let letter = 0; //Index
    let loops = 5; //How many times it will loop for each letter

    if (!text) return;
    
    while (letter <= text.length) {
      for (let i = 0; i < loops; i++) {
        for (let i = 0; i < text.length - letter; i++) {
          glitchedText.push(chars[Math.floor(Math.random() * chars.length)]);
        }
        await sleep(Math.random() * 80);
        item.textContent = text
          .substring(0, letter)
          .concat(glitchedText.join(""));
        glitchedText = [];
      }
      letter++;
    }
    item.textContent = text;
  });
}

const hero = document.querySelector(".hero") as HTMLDivElement | null;
const text = document.querySelector(".text-container") as HTMLDivElement | null;
let interval: ReturnType<typeof setInterval> | null = null;

async function randomString(length: number) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  text!.innerText = result;
}

hero?.addEventListener("mouseenter", async () => {
  interval = setInterval(async () => {
    await randomString(2500);
  }, 30);
});

hero?.addEventListener("mouseleave", async () => {
  if (interval) clearInterval(interval);
});

async function load() {
  const loadingScreen = document.querySelector(
    ".loading-screen",
  ) as HTMLDivElement | null;
  const spinner = document.querySelector(".spinner") as HTMLDivElement | null;
  if (!loadingScreen || !spinner) return;

  const progressBar = loadingScreen.querySelector(
    ".progress-bar",
  ) as HTMLElement | null;

  if (!progressBar) return;

  const startSpinner = () => {
    const chars = ["|", "/", "-", "\\"];
    let idx = 0;
    let rafId = 0;
    let last = 0;
    let running = true;

    const loop = (ts: number) => {
      if (!running) {
        // spinner.innerText = "";
        return;
      }
      if (!last) last = ts;
      if (ts - last >= 300) {
        idx = (idx + 1) % chars.length;
        spinner.innerText = chars[idx];
        last = ts;
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      // spinner.innerText = "";
    };
  };

  const animateWidth = (
    el: HTMLElement,
    from: number,
    to: number,
    duration: number,
  ) =>
    new Promise<void>((resolve) => {
      const start = performance.now();
      const frame = (ts: number) => {
        const t = Math.min(1, (ts - start) / duration);
        const v = from + (to - from) * t;
        el.style.width = v + "%";
        if (t < 1) requestAnimationFrame(frame);
        else resolve();
      };
      requestAnimationFrame(frame);
    });

  const progress = async () => {
    progressBar.style.width = "0%";
    await animateWidth(progressBar, 0, 30, 500);
    await animateWidth(progressBar, 30, 60, 1000);
    await animateWidth(progressBar, 60, 100, 100);
  };

  const stopSpinner = startSpinner();
  await progress();
  stopSpinner();
  await sleep(500);

  loadingScreen.style.opacity = "0";
  loadingScreen.style.pointerEvents = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  for (const item of document.querySelectorAll("grid")) {
    const parent = item.parentElement;
    let col = 16,
      row = 8;
    if (!parent) continue;

    const width = parent.offsetWidth,
      height = parent.offsetHeight,
      itemSize = width / col;

    // while (itemSize * row < height) {
    //     row++;
    // }

    //parent.style.height = `${itemSize * row}px`;
    (root as HTMLElement).style.setProperty("--item-size", itemSize + "px");
    console.log(width, height, itemSize, row);
  }

  initThreeJS();
  glitch();
  randomString(2500);
  load();
  requestAnimationFrame(tick);
  setInterval(blink, 5000);
});

(window as any).displayModal = displayModal;
(window as any).submitForm = submitForm;
(window as any).toggleTheme = toggleTheme;