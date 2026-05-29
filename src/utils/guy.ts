const guy = document.getElementById("guy") as HTMLElement | null;
const eyes = document.querySelectorAll(".eye") as NodeListOf<HTMLElement>;
const eyeWrappers = document.querySelectorAll(
  ".eye-wrapper",
) as NodeListOf<HTMLElement>;
const restrictedZones = document.querySelectorAll(
  ".no-go",
) as NodeListOf<HTMLElement>;

let mouse: { x: number; y: number } = { x: 0, y: 0 };
let pos: { x: number; y: number } = { x: 100, y: 100 };

let speed = 2;

export let currentPos: [number, number] = [pos.x, pos.y];

function look() {
  if (!guy) return;
  eyes.forEach((eye) => {
    const rect = eye.getBoundingClientRect();

    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const dx = mouse.x - eyeCenterX;
    const dy = mouse.y - eyeCenterY;

    const angle = Math.atan2(dy, dx);

    const maxRadius = 3.5;

    const eyeX = Math.cos(angle) * maxRadius;
    const eyeY = Math.sin(angle) * maxRadius;

    eye.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
    guy.style.transform = `rotate(${angle * 0.8}deg)`;
  });
}

document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  look();
});

document.addEventListener("touchmove", (e) => {
  const finger = e.touches && e.touches[0];
  if (!finger) return;
  mouse.x = finger.clientX;
  mouse.y = finger.clientY;
  look();
});

document.addEventListener("focusin", (e: FocusEvent) => {
  const target = e.target as Element | null;
  if (target?.matches("input, textarea")) {
    if (guy) guy.classList.add("excited");
  }
});

document.addEventListener("focusout", (e: FocusEvent) => {
  const target = e.target as Element | null;
  if (target?.matches("input, textarea")) {
    if (guy) guy.classList.remove("excited");
  }
});

export function blink() {
  eyeWrappers.forEach((eye) => {
    eye.classList.add("blink");
    setTimeout(() => eye.classList.remove("blink"), 150);
  });
}

export function happy() {
  eyes.forEach((eye) => {
    eye.classList.add("happy");
    setTimeout(() => eye.classList.remove("happy"), 2000);
  });
}

export function sad() {
  eyes.forEach((eye, i) => {
    if (i == 0) {
      eye.classList.add("sad-left");
      setTimeout(() => eye.classList.remove("sad-left"), 2000);
    } else {
      eye.classList.add("sad-right");
      setTimeout(() => eye.classList.remove("sad-right"), 2000);
    }
  });
}

export function angry() {
  eyes.forEach((eye, i) => {
    if (i == 0) {
      eye.classList.add("angry-left");
      setTimeout(() => eye.classList.remove("angry-left"), 2000);
    } else {
      eye.classList.add("angry-right");
      setTimeout(() => eye.classList.remove("angry-right"), 2000);
    }
  });
}

export function unamused() {
  eyes.forEach((eye) => {
    eye.classList.add("unamused");
    setTimeout(() => eye.classList.remove("unamused"), 2000);
  });
}

function collides(x: number, y: number, size: number): boolean {
  for (const element of Array.from(restrictedZones)) {
    const rect = element.getBoundingClientRect();
    const intersects = !(
      x + size < rect.left ||
      x > rect.right ||
      y + size < rect.top ||
      y > rect.bottom
    );
    if (intersects) return true;
  }
  return false;
}

export function tick() {
  const dist = Math.sqrt(
    Math.pow(mouse.x - pos.x, 2) + Math.pow(mouse.y - pos.y, 2),
  );

  speed = Math.pow(dist / 150, 3); //easing

  if (dist >= 100) {
    if (guy?.classList.contains("idle")) guy.classList.remove("idle");

    const collisionMargin = 5;
    const size = 42;

    const dx = mouse.x - pos.x;
    const dy = mouse.y - pos.y;

    const angle = Math.atan2(dy, dx);

    const newX = pos.x + Math.cos(angle) * collisionMargin;
    const newY = pos.y + Math.sin(angle) * collisionMargin;

    const xCollision = collides(newX, pos.y, size);
    const yCollision = collides(pos.x, newY, size);

    if (!xCollision) {
      pos.x += (dx / dist) * speed;
    } else {
      // pos.x -= Math.cos(angle);
    }
    if (!yCollision) {
      pos.y += (dy / dist) * speed;
    } else {
      // pos.y -= Math.sin(angle);
    }

    if (guy) {
      guy.style.left = pos.x + "px";
      guy.style.top = pos.y + "px";
    }
  } else {
    if (guy && !guy.classList.contains("idle")) guy.classList.add("idle");
  }

  currentPos = [pos.x, pos.y];
  requestAnimationFrame(tick);
}