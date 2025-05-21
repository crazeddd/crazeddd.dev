import hljs from 'highlight.js/lib/common';

function displayModal() {
    const modal = document.querySelector('.modal') as HTMLDivElement;
    modal.classList.toggle('show');
}

function submitForm(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
}

(window as any).displayModal = displayModal;
(window as any).submitForm = submitForm;

const highlightedCode = hljs.highlight(
    `<section class="hero">
    <div class="column gp-3">
        <h1>Full Stack Dev and <span class="stroke">Web Designer</span></h1>
        <div class="row gp-1">
            <button class="primary">Contact Me</button>
            <button>Resume</button>
        </div>
    </div>
</section>`,
    { language: 'html' }
  ).value;
