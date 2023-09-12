import './styles/TopNav.css';
import Image from './UI/Image';
function TopNav() {
    return (
        <div className="top-nav">
            <div className="top-nav__left">
                <a href="#">
                    <Image className="top-nav-logo" src="/assets/GYMLOGO.png" alt="logo" />
                </a>
            </div>
            <div className="top-nav__right">                
                <a href="#open-gym">Open Gym</a>
                <a href="#personal-training">Personal Training</a>
                <a href="#group-classes">Group Classes</a>
                <a href="#chiropractic-care">Chiropractic Care</a>
                <a href="#strongman">Strongman</a>
                <a href="#about-us">About</a>
                <a href="#contact-us">Contact</a>                
            </div>
        </div>        
    );
}
export default TopNav;