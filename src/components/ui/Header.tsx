import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';
import burgerIcon from '../../assets/burger.svg';
import LanguageSwitcher from '../LanguageSwitcher';

const Header: React.FC = () => { 
    const { t } = useTranslation();
    const telegram: string = '@v128s';
    const email: string = 'v128s@gmail.com';

    const [isOpenExpandedMenu, setIsOpenExpandedMenu] = useState<boolean>(false);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(isOpenExpandedMenu) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpenExpandedMenu]);
    
    const handleLogoClick = () => {
        window.location.href = '/';
    };

    const copyTelegtamToClipboard = () => {
        navigator.clipboard.writeText(telegram);
    };

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(email);
    };

    const toggleExpandedMenu = () => {
        setIsOpenExpandedMenu(prev => !prev);
    }

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }

        setIsOpenExpandedMenu(false);
    };

    const handleClickOutside = (event: any) => {
        if (
            headerRef.current &&
            !headerRef.current.contains(event.target)
        ) {
            setIsOpenExpandedMenu(false);
        }
    }

    return (
        <header className="header" ref={headerRef}>
            
            <div className='header__logo' onClick={handleLogoClick}>
                <img src="/logo/logo-dark.png" alt="logo"/>
            </div>
            <div className='header__wrapper'>
                <nav>
                    <ul className='header__wrapper--list'>
                        <li onClick={() => scrollToSection('exchanger')}>{t('header.exchanger')}</li>
                        <li onClick={() => scrollToSection('trusty')}>{t('header.advantages')}</li>
                        <li onClick={() => scrollToSection('coins')}>{t('header.supportedCoins')}</li>
                        <li onClick={() => scrollToSection('partenrs')}>{t('header.partners')}</li>
                        <li onClick={() => scrollToSection('contacts')}>{t('header.contacts')}</li>
                    </ul>
                </nav>
            </div>
            {/* <div className='header__contacts'>
                <img src={telegramIcon} onClick={copyTelegtamToClipboard}></img>
                <img src={emailIcon} onClick={copyEmailToClipboard}></img>
            </div> */}
            <LanguageSwitcher />
            <button className='header__menu' onClick={toggleExpandedMenu}>
                <img src={burgerIcon} alt="burger"/>
            </button>
            
            {isOpenExpandedMenu &&
                <nav className='header__expanded-menu'>
                    <ul className='header__expanded-menu--list'>
                        <li onClick={() => scrollToSection('exchanger')}>Exchanger</li>
                        <li onClick={() => scrollToSection('trusty')}>Advantages</li>
                        <li onClick={() => scrollToSection('coins')}>Supported coins</li>
                        <li onClick={() => scrollToSection('partenrs')}>Partners</li>
                        <li onClick={() => scrollToSection('contacts')}>Contacts</li>
                    </ul>
                </nav>
            }
        </header>
    );
}

export default Header;
