(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function c(i){let o=0;const s=n=>{o=n,i.innerHTML=`count is ${o}`};i.addEventListener("click",()=>s(o+1)),s(0)}document.querySelector("#app").innerHTML=`
<pre class="code" id="one"><code>
    &lt;section class="hero"&gt;
    &lt;div class="column gp-3"&gt;
        &lt;h1&gt;Full Stack Dev and &lt;span class="stroke"&gt;Web Designer&lt;/span&gt;&lt;/h1&gt;
        &lt;div class="row gp-1"&gt;
            &lt;button class="primary"&gt;Contact Me&lt;/button&gt;
            &lt;button&gt;Resume&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/section&gt;
    </code></pre>

<pre class="code" id="two">
        <code>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
  font-size: 100%;
}

body {
  color-scheme: dark;
  background: var(--bg);
  color: var(--txt);
  font-family: "Special Gothic";
  overflow-x: hidden;
}
        </code>
    </pre>
<!--<announcement>Site Under Construction ⚠️</announcement>-->
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
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
                d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
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
    <div>
        <img src="/PXL_20240525_231141323.jpg">
        <div class="overlay bottom-left">(My sad server setup after moving)</div>
    </div>
    <div class="column gp-2">
        <h2>About Me</h2>
        <p>Many years ago now I gained a passion for coding and computer systems, this eventually leading to me branching out to robotics and other software/hardware driven programs. Apart from web development I also speciallize in server/system administration and have extensive networking knowledge. In addition to coding I also enjoy design and making music in my spare time. Always open to help with coding or just talking about anything on discord @crazeddd :)</p>
    </div>
</section>
<section class="contact-me">
<div>
<h1>Lets Talk</h1>
<div class="row gp-1">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/></svg>



</div>
</div>
</section>
<footer>
    <p>Made with <3 by Crazed</p>
    <small class="muted">Copyright © 2025 All rights reserved. <a>License.</a></small>
</footer>
`;c(document.querySelector("#counter"));
