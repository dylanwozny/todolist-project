import makeElement from "../../../utils/makeElement";
import styles from "./styles.module.scss";

const button = function (label = "ui button", uiStyles) {
  const template = `<button class="${
    styles[uiStyles] || styles.uiButton
  }">${label}</button>`;
  const element = makeElement(template);

  return element;
};

export default button;
