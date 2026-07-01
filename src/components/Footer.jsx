
import { Coffee, GitBranchPlus, Heart, LucideChartCandlestick, Mail } from 'lucide-react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__name">Guadalupe Gaona</p>
            <p className="footer__role">Frontend Developer · Paraguay</p>
          </div>

          <div className="footer__links">
            <a href="https://github.com/MonseGaona" target="_blank" rel="noopener noreferrer" className="footer__link">
              <GitBranchPlus size={16} strokeWidth={1.8} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/guadalupe-gaona-a045a1274/" target="_blank" rel="noopener noreferrer" className="footer__link">
              <LucideChartCandlestick size={16} strokeWidth={1.8} /> LinkedIn
            </a>
            <a href="mailto:guadalupegaona97@gmail.com" className="footer__link footer__link--primary">
              <Mail size={16} strokeWidth={1.8} /> guadalupegaona97@gmail.com
            </a>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p>© 2026 Guadalupe Gaona. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado con <Heart size={15} />  y <Coffee size={16} /></p>
        </div>
      </div>
    </footer>
  );
}