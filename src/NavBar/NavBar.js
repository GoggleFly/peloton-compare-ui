import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            PelotonCompare
          </a>
      
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="pelotonCompareNavbar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="pelotonCompareNavbar" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item is-tab is-active">
              Home
            </a>

            <a className="navbar-item is-tab">
              About
            </a>
      
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>
      
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Support
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  Disclaimer
                </a>
              </div>
            </div>
          </div>
      
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default NavBar;