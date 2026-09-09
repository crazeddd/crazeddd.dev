/* @refresh reload */
import { Router, Route } from "@solidjs/router";
import { render } from "solid-js/web";
import "./index.css";

import Index from "./pages/Index";

const root = document.getElementById("root") as HTMLElement;

render(
  () => (
    <Router>
      <Route path="/" component={Index} />
    </Router>
  ),
  root!,
);
