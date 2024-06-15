import './Header.css';
import telegramIcon from '../../assets/telegram.svg';
import emailIcon from '../../assets/email.png';
import burgerIcon from '../../assets/burger.svg';

const Header: React.FC = () => { 
    const telegram: string = '@v128s';
    const email: string = 'v128s@gmail.com';
    
    const handleLogoClick = () => {
        window.location.href = '/';
    };

    const copyTelegtamToClipboard = () => {
        navigator.clipboard.writeText(telegram);
    };
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(email);
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
                        <li>Advantages</li>
                        <li>Partners</li>
                        <li>Contacts</li>
                    </ul>
                </nav>
            </div>
            <div className='header__contacts'>
                <img src={telegramIcon} onClick={copyTelegtamToClipboard}></img>
                <img src={emailIcon} onClick={copyEmailToClipboard}></img>
            </div>
            <button className='header__menu'>
                <img src={burgerIcon} alt="burger"/>
            </button>
            
        </header>
    );
}

export default Header;
