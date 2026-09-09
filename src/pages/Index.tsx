import { createSignal, onMount } from "solid-js";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { asciiAnimation } from "../scripts/animations";

// onMount(() => {
//   asciiAnimation();
// });

export default function Index() {
  return (
    <div class="wrapper">
      <div class="container">
        <Nav />
        <main>
          <div class="ascii-text">
            
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
