import './Footer.css';
import { useTranslation } from 'react-i18next';
import { ApprovedCurrenciesList, IConvert } from '../../domain/models';
import { Link } from 'react-router-dom';

interface FooterProps {
    onCurrencyChange: (currencyFrom: IConvert, currencyTo: IConvert) => void;
}

const Footer: React.FC<FooterProps> = ({ onCurrencyChange }) => { 
    const { t } = useTranslation();
    
    const displayedCoins = ApprovedCurrenciesList.slice(0, 6);

    const handleClick = (newCurrencyFromId: string, newCurrencyToId: string) => {
        const newCurrencyFrom: IConvert | undefined = ApprovedCurrenciesList.find(coin => coin.id === newCurrencyFromId);
        const newCurrencyTo: IConvert | undefined =  ApprovedCurrenciesList.find(coin => coin.id === newCurrencyToId);
        if(newCurrencyFrom && newCurrencyTo) {
            onCurrencyChange(newCurrencyFrom, newCurrencyTo);
            scrollToSection('exchanger');
        }
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

    const handleRedirectCoin = (coinId: string) => {
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
        <footer className="footer">
            <section className='container'>
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
                            <div className='footer-links__item' onClick={() => scrollToSection('coins')}>Supported coins</div>
                            <div className='footer-links__item' onClick={() => scrollToSection('advantages')}>Advantages</div>
                            <div className='footer-links__item' onClick={() => scrollToSection('partners')}>Partners</div>
                            <div className='footer-links__item' onClick={() => scrollToSection('contacts')}>Contacts</div>
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
                            <div className='footer-links__item' onClick={() => handleClick('bitcoin', 'ethereum')}>BTC to ETH</div>
                            <div className='footer-links__item' onClick={() => handleClick('ethereum', 'bitcoin')}>ETH to BTC</div>
                            <div className='footer-links__item' onClick={() => handleClick('bitcoin', 'monero')}>BTC to XMR</div>
                            <div className='footer-links__item' onClick={() => handleClick('ethereum', 'solana')}>ETH to SOL</div>
                            <div className='footer-links__item' onClick={() => handleClick('solana', 'ethereum')}>SOL to ETH</div>
                            <div className='footer-links__item' onClick={() => handleClick('monero', 'bitcoin')}>XMR to BTC</div>
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
                                <div key={index} className='footer-links__item' onClick={handleRedirectCoin(coin.id)}>{coin.name}</div>
                            ))}
                            <div className='footer-links__item' onClick={() => scrollToSection('coins')}>All Coins</div>
                        </div>
                    </div>
                    <div className='footer-links'>
                        <div className='footer-links__title' onClick={toggleAccordion}>
                            <p>LEGAL DOCUMENTS</p>
                            <div className='footer-arrow-container'>
                                <div className='footer-arrow-up'></div>
                                <div className='footer-arrow-down'></div>
                            </div>
                        </div>

                        <div className='footer-links__accordion-content'>
                            <Link to="/documents/terms" className='footer-links__item'>Terms of Service</Link>
                            <Link to="/documents/privacy" className='footer-links__item'>Privacy Policy</Link>
                            <Link to="/documents/aml-kyc" className='footer-links__item'>AML/KYC</Link>
                        </div>
                    </div>
                </div>
                <p className='footer-privacy'>©2024 All Rights Reserved.</p>
            </section>
            
        </footer>
    );
}

export default Footer;
