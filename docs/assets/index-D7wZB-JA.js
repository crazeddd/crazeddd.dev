(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(a){if(a.ep)return;a.ep=!0;const s=e(a);fetch(a.href,s)}})();function o(r){let i=0;const e=t=>{i=t,r.innerHTML=`count is ${i}`};r.addEventListener("click",()=>e(i+1)),e(0)}document.querySelector("#app").innerHTML=`
<!--<pre class="code" id="one"><code>
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
    </pre>-->
<grid></grid>
<!--<announcement>Site Under Construction ⚠️</announcement>-->
<nav>
    <div>
        <img class="pfp" src="/73705334.jpg">
        <h5>Crazed</h5>
    </div>
    <div class="muted">
        <a>Links</a>
        <a>Blog</a>
        <a>Projects</a>
    </div>
    <div>
        <i class="fa-solid fa-bars fa-xl"></i>
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
        <img src="">
    </div>
    <div class="column gp-2">
        <h2>About Me</h2>
        <p class="muted">Many years ago now I gained a passion for coding and computer systems, this eventually led me
            to branch out into robotics and other software/hardware driven programs. While I enjoy web development I
            also specialize in server/system administration and have extensive (computer) networking knowledge. When I'm
            not coding I enjoy design and making music in my spare time. Always open to help with coding or just chat on
            Discord @crazeddd :)</p>
    </div>
</section>
<carousel>
    <i class="fa-brands fa-js fa-4x"></i>
    <i class="fa-brands fa-java fa-4x"></i>
    <i class="fa-brands fa-html5 fa-4x"></i>
    <i class="fa-brands fa-css fa-4x"></i>
    <i class="fa-brands fa-ubuntu fa-4x"></i>
    <i class="fa-brands fa-python fa-4x"></i>
    <i class="fa-brands fa-docker fa-4x"></i>
    <i class="fa-brands fa-react fa-4x"></i>
    <i class="fa-brands fa-node-js fa-4x"></i>
    <i class="fa-brands fa-linux fa-4x"></i>

    <i class="fa-brands fa-js fa-4x"></i>
    <i class="fa-brands fa-java fa-4x"></i>
    <i class="fa-brands fa-html5 fa-4x"></i>
    <i class="fa-brands fa-css fa-4x"></i>
    <i class="fa-brands fa-ubuntu fa-4x"></i>
    <i class="fa-brands fa-python fa-4x"></i>
    <i class="fa-brands fa-docker fa-4x"></i>
    <i class="fa-brands fa-react fa-4x"></i>
    <i class="fa-brands fa-node-js fa-4x"></i>
    <i class="fa-brands fa-linux fa-4x"></i>

    <i class="fa-brands fa-js fa-4x"></i>
    <i class="fa-brands fa-java fa-4x"></i>
    <i class="fa-brands fa-html5 fa-4x"></i>
    <i class="fa-brands fa-css fa-4x"></i>
    <i class="fa-brands fa-ubuntu fa-4x"></i>
    <i class="fa-brands fa-python fa-4x"></i>
    <i class="fa-brands fa-docker fa-4x"></i>
    <i class="fa-brands fa-react fa-4x"></i>
    <i class="fa-brands fa-node-js fa-4x"></i>
    <i class="fa-brands fa-linux fa-4x"></i>
</carousel>
<section class="projects">
    <h1>Projects</h1>
    <div>
        <img src="/kibi.png">
        <div>
                <h2>Kibi Host <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i></h2>
            <p class="muted">A small server host that aims at giving quality server hosting at a cheap price.</p>
        </div>
    </div>
    <div>
        <img src="/simple.png">
        <div>
            <h2>Simple Panel <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i></h2>
            <p class="muted">A simple lightweight Docker container manager, built with game servers in mind.</p>
        </div>
    </div>
</section>
<section class="contact-me">
    <div>
        <h1>Lets Talk</h1>
        <div class="row gp-1">
            <i class="fa-brands fa-discord fa-xl"></i>
        </div>
    </div>
</section>
<footer>
    <p>Made with <i class="fa-solid fa-heart"></i> by Crazed</p>
    <small class="muted">Copyright © 2025 All rights reserved. <a>License.</a></small>
</footer>
`;o(document.querySelector("#counter"));
