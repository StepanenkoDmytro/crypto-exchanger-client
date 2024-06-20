import './Footer.css';
import telegramIcon from '../../assets/telegram-footer.png';
import emailIcon from '../../assets/email-footer.png';
import { useTranslation } from 'react-i18next';
import { ApprovedCurrenciesList } from '../../domain/models';

const Footer: React.FC = () => { 
    const { t } = useTranslation();
    const telegram: string = '@v128s';
    const email: string = 'v128s@gmail.com';
    const displayedCoins = ApprovedCurrenciesList.slice(0, 6);

    const copyTelegtamToClipboard = () => {
        navigator.clipboard.writeText(telegram);
    };

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(email);
    };

    const toggleAccordion = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        const title = e.currentTarget;
        title.classList.toggle('active');

        const parent = title.parentElement;
        if (parent) {
            const content = parent.querySelector('.footer-links__accordion-content');
            if (content) {
                content.classList.toggle('show');
            }
        }
    };

    const handleRedirect = (coinId: string) => {
        return () => {
          window.location.href = `https://coinmarketcap.com/currencies/${coinId}`;
        };
    }

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer" id='contacts'>
            <div className='footer-links-container'>
                <div className='footer-links'>
                    <div className='footer-links__title' onClick={toggleAccordion}>
                        <p>{t('footer.company')}</p>
                        <div className='footer-arrow-container'>
                            <div className='footer-arrow-up'></div>
                            <div className='footer-arrow-down'></div>
                        </div>
                    </div>
                    <div className='footer-links__accordion-content'>
                        <div className='footer-links__item' onClick={() => scrollToSection('exchanger')}>Exchanger</div>
                        <div className='footer-links__item' onClick={() => scrollToSection('advantages')}>Advantages</div>
                        <div className='footer-links__item' onClick={() => scrollToSection('coins')}>Supported coins</div>
                        <div className='footer-links__item' onClick={() => scrollToSection('partners')}>Partners</div>
                        <div className='footer-links__item'>Supported Coins</div>
                        
                        <div className='footer-links__item--contacts'>
                            <div className='footer-links__item'>Contacts:</div>
                            <div className='footer__contacts'>
                                <img className='footer__contacts-telegram' src={telegramIcon} onClick={copyTelegtamToClipboard}></img>
                                <p>{telegram}</p>
                            </div>
                            <div className='footer__contacts'>
                                <img src={emailIcon} onClick={copyEmailToClipboard}></img>
                                <p>{email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-links'>
                    <div className='footer-links__title' onClick={toggleAccordion}>
                        <p>{t('footer.pairs')}</p>
                        <div className='footer-arrow-container'>
                            <div className='footer-arrow-up'></div>
                            <div className='footer-arrow-down'></div>
                        </div>
                    </div>
                    <div className='footer-links__accordion-content'>
                        <div className='footer-links__item'>BTC to ETH</div>
                        <div className='footer-links__item'>ETH to BTC</div>
                        <div className='footer-links__item'>BTC to XMR</div>
                        <div className='footer-links__item'>ETH to SOL</div>
                        <div className='footer-links__item'>SOL to ETH</div>
                        <div className='footer-links__item'>XMR to BTC</div>
                    </div>
                </div>
                <div className='footer-links'>
                    <div className='footer-links__title' onClick={toggleAccordion}>
                        <p>{t('footer.coins')}</p>
                        <div className='footer-arrow-container'>
                            <div className='footer-arrow-up'></div>
                            <div className='footer-arrow-down'></div>
                        </div>
                    </div>

                    <div className='footer-links__accordion-content'>
                        {displayedCoins.map((coin, index) => (
                            <div key={index} className='footer-links__item' onClick={handleRedirect(coin.id)}>{coin.name}</div>
                        ))}
                        <div className='footer-links__item' onClick={() => scrollToSection('coins')}>All Coins</div>
                    </div>
                </div>
            </div>
            <p className='footer-privacy'>©2024 All Rights Reserved. Terms Of Service | Privacy Terms</p>
        </footer>
    );
}

export default Footer;
