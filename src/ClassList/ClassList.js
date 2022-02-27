import './ClassList.css';

function ClassList() {
    return (
        <div className="section">
            <nav className="panel">
                <p className="panel-heading">
                    Classes
                </p>
                <div className="panel-block">
                    <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="Search" />
                        <span className="icon is-left">
                            <i className="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <a className="panel-block">
                    <span className="panel-icon">
                        <i className="fas fa-book" aria-hidden="true"></i>
                    </span>
                    Class
                </a>
                <div className="panel-block">
                    <button className="button is-link is-outlined is-fullwidth">
                        Reset all filters
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default ClassList;
