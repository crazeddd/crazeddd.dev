// import hljs from 'highlight.js/lib/common';
import * as THREE from 'three';
const root = document.querySelector(':root');

function displayModal() {
    const modal = document.querySelector('.modal') as HTMLDivElement;
    modal.classList.toggle('show');
}

function submitForm(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const message = encodeURIComponent(form['message'].value);
    const email = "cranninja@gmail.com";

    const mailtoLink = `mailto:${email}?subject=${message}`;
    window.location.href = mailtoLink;
}

// function toggleLike(event: MouseEvent) {
//     const target = event.target as HTMLElement;

//     if (target.classList.contains('liked')) {
//         target.classList.remove('liked');
//     } else {
//         target.classList.add('liked');
//     }

//     const likeCountEle = document.getElementById("like-count") as HTMLParagraphElement;

    
// }


function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
}

function initThreeJS() {
    const canvas = document.querySelector('#render') as HTMLCanvasElement | null;
    if (!canvas) {
        throw new Error('No canvas to render to');
    }
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
    const scene = new THREE.Scene();

    // CAMERA
    const fov = 75,
        aspect = 2,
        near = 0.1,
        far = 5,
        camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    camera.position.z = 2;

    // CUBE
    const boxWidth = 1,
        boxHeight = 1,
        boxDepth = 1,
        geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    const material = new THREE.MeshPhongMaterial({ color: 0x3f37c9 });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // LIGHTING
    const color = 0xffffff;
    const intensity = 3;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

    function render(time: number) {
        time *= 0.001;  // convert time to seconds

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();

        cube.rotation.x = time;
        cube.rotation.y = time;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

document.addEventListener('DOMContentLoaded', () => {

    for (const item of document.querySelectorAll('grid')) {
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
        (root as HTMLElement).style.setProperty('--item-size', itemSize + "px");
        console.log(width, height, itemSize, row);
    }

    initThreeJS();
});

(window as any).displayModal = displayModal;
(window as any).submitForm = submitForm;

// const highlightedCode = hljs.highlight(
//     `<section class="hero">
//     <div class="column gp-3">
//         <h1>Full Stack Dev and <span class="stroke">Web Designer</span></h1>
//         <div class="row gp-1">
//             <button class="primary">Contact Me</button>
//             <button>Resume</button>
//         </div>
//     </div>
// </section>`,
//     { language: 'html' }
// ).value;
