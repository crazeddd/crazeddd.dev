// import hljs from 'highlight.js/lib/common';
import { initThreeJS } from "./threejs";

const root = document.querySelector(":root");

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

async function toggleLike(e: MouseEvent) {
  const target = e.target as HTMLButtonElement | null;
  const count = document.getElementById(
    "like-count"
  ) as HTMLParagraphElement | null;

  if (!target || !count) {
    return;
  }

  if (target.classList.contains("liked")) {
    target.classList.remove("liked");
    count.innerHTML = "0";
  } else {
    target.classList.add("liked");
    count.innerHTML = "1";
  }
}

function toggleTheme() {
  const body = document.querySelector("body") as HTMLBodyElement | null;

  if(body) {
    body.style.colorScheme = body.style.colorScheme === "dark" ? "light" : "dark";
  }
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
});

(window as any).displayModal = displayModal;
(window as any).submitForm = submitForm;
(window as any).toggleLike = toggleLike;
(window as any).toggleTheme = toggleTheme;
