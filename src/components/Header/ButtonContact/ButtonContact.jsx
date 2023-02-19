import buttonStyle from "./ButtonStyle.module.css";

export function ButtonContact() {
  return (
    <a
      href="https://github.com/NataliaJeszke"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className={buttonStyle.button}>See my GitHub</button>
    </a>
  );
}
