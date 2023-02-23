import footerStyle from "./FooterStyle.module.css";
import { GoMarkGithub } from "react-icons/go";

export function Footer(){
    const gitURL = 'https://github.com/NataliaJeszke'
    return(
        <footer className={footerStyle.footer}>
            <p>Check my other projects on <a href={gitURL}><GoMarkGithub style={{fontSize:'30px', color:'black'}}/></a></p>
        </footer>
    )
}