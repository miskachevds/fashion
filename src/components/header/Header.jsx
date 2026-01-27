import './Header.css';
import logoImg from './../../img/icons/logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header_row">
                    <div className="header_logo">
                        <img src={logoImg} alt="logo" />
                        <span>Fashion</span>
                    </div>
                    <div className="header_nav">NAV</div>
                </div>
            </div>
        </header>
    );
}

export default Header;