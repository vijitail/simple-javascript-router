import { html } from "lit-html";
import { link } from "../router";

export default (props) => html`
  <div>
    <p>
      This is the profile page.<br />
      Hello ${props.name}
      <button @click=${() => link("/")}>Go Home</button>
    </p>
  </div>
`;
