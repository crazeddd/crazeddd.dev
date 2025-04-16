import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav>
    <div>
        <img class="pfp" src="/73705334.jpg">
        <h5>.dev</h5>
    </div>
    <div class="muted">
        <a>About</a>
        <a>Links</a>
        <a>Projects</a>
    </div>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
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
        <big>5+</big>
        <p class="muted">Years programming</p>
    </div>
    <div>
        <big>3+</big>
        <p class="muted">Years building websites</p>
    </div>
    <div>
        <big>6+</big>
        <p class="muted">Years running servers</p>
    </div>
  </section>
  <section class="about">
    <div class="code-box">
    <pre>&lt;section class="hero"&gt;
    &lt;div class="column gp-3"&gt;
        &lt;h1&gt;Full Stack Dev and &lt;span class="stroke"&gt;Web Designer&lt;/span&gt;&lt;/h1&gt;
        &lt;div class="row gp-1"&gt;
            &lt;button class="primary"&gt;Contact Me&lt;/button&gt;
            &lt;button&gt;Resume&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/section&gt;
    </pre>
    </div>
    <div class="column gp-2">
      <h1>About Me</h1>
      <p>At a young age I gained an appreciation for computer systems and the more technical aspects of life, this eventually led me to coding. With over 5 years of experience working with a wide range of languages i've coded numerous projects; some for fun, others for work.</p>
    </div>
  </section>
  <footer><p>Built and designed with <3 by crazeddd</p></footer>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
