import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>Peloton Compare</strong> by <a href="#">GoggleFly</a>. The source code is licensed
                    {/* TODO: select appropriate licenses. */}
                    <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content
                    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
