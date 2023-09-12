import './styles/Footer.css';
function Footer() {
    return (
        // bottom nav bar with links to social media
        <div className="footer">
            <div className="footer__links">
                <a href="https://www.facebook.com/profile.php?id=100088712705886" target="_blank" rel="noreferrer">
                    <i className="fa fa-facebook-square fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/arena.strength/" target="_blank" rel="noreferrer">
                    <i className="fa fa-instagram fa-2x"></i>
                </a>
                {/* email */}
                <a href="mailto:strength@wellnesswithapurpose.com" target="_blank" rel="noreferrer">
                    <i className="fa fa-envelope fa-2x"></i>
                </a>
                {/* phone */}
                <a href="tel:859-333-9300" target="_blank" rel="noreferrer">
                    <i className="fa fa-phone fa-2x"></i>
                </a>
                {/* chiropractic site */}
                <a href="https://www.wellnesswithapurpose.com/" target="_blank" rel="noreferrer">
                    <i className="fa fa-globe fa-2x"></i>
                </a>

            </div>
            <div className="footer__copy">
                <p>&copy; 2023 Arena Strength & Performance, LLC</p>
            </div>
        </div>        
    );
}
export default Footer;