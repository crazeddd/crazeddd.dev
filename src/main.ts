import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav>
    <div>
      <h5>.dev</h5>
    </div>
  <div>
    <a>About</a>
    <a>Experience</a>
    <a>Projects</a>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
  </div>
  </nav>
  <section class="hero">
    <div class="column gp-3">
      <h1>Full Stack Dev and <span class="stroke">Web Designer</span></h1>
      <div class="row gp-1">
        <button class="primary">Contact Me</button>
        <button>Resume</button>
      </div>
    </div>
  </section>
  <section class="showcase">
  <div>
    <h1><span class="primary">5+</span></h1>
    <p>Years programming</p>
  </div>
  <div>
  <h1><span class="primary">3+</span></h1>
  <p>Years building websites</p>
  </div>
  <div>
  <h1><span class="primary">6+</span></h1>
  <p>Years running servers</p>
  </div>
  </section>
  <footer>Built and designed with <3 by crazeddd</footer>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
