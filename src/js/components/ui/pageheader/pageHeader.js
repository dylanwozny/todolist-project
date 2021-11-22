import makeElement from "../../../utils/makeElement";
import * as styles from "./styles.module.scss";
import logo from "../../icons/logo";

const pageHeaderButton = function ({ label, tagline, children }) {
  const template = `
    <header class="${styles.defaultHeader} center-in-page">
        ${logo()}
        <h1>${label || "Defalult Page Header"}</h1>
        <p>${tagline || ""}</p>        
    </header>
`;

  // loop to append each element to header
  const header = makeElement(template);
  if (children.length) {
    children.forEach((child) => {
      header.append(child);
    });
  }

  return header;
};

export default pageHeaderButton;
