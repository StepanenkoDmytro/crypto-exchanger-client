import './Header.css';

const Header: React.FC = () => { 
    return (
        <header className="header">
            <div className='header__logo'>

            </div>
            <div className='header__wrapper'>
                <nav>
                    <ul className='header__wrapper--list'>
                        <li>Exchanger</li>
                        <li>How it works</li>
                        <li>Partners</li>
                        <li>Contacts</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
