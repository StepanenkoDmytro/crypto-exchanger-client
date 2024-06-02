import './Header.css';

const Header: React.FC = () => { 
    const handleLogoClick = () => {
        window.location.href = '/';
    };

    return (
        <header className="header">
            <div className='header__logo' onClick={handleLogoClick}>
                <img src="/logo/logo-dark.png" alt="logo"/>
            </div>
            <div className='header__wrapper'>
                <nav>
                    <ul className='header__wrapper--list'>
                        <li>Exchanger</li>
                        <li>How it works</li>
                        <li>Partners</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
