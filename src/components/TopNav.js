import './styles/TopNav.css';
import Image from './UI/Image';
function TopNav() {
    return (
        <nav className="navbar">
        < a className="navbar-brand" href = "#" > 
            <Image src="./assets/GYMLOGO.png" />
        </a >
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#service-open-gym">Open Gym</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service-group-classes">Group Classes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service-personal-training">Personal Training</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service-rehab-only">Rehab Only</a>
            </li>
          </ul>
        </div>
      </nav >
    );
}
export default TopNav;