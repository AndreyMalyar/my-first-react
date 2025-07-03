import type { FC } from 'react'
import FooterImageRickMorty from "./FooterImageRickMorty.tsx";

const FooterRickMorty: FC = () => {
    return (
        <footer className="footer-RickMorty">
            <div className="footer-RickMorty__content container">
                <FooterImageRickMorty className="footer-RickMorty__decoration" width="100%" />
                <p className="footer-RickMorty__copyright">© 2025 My App</p>
            </div>
            <div className="footer-RickMorty__fon"></div>
        </footer>
    )
}

export default FooterRickMorty;