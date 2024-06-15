import './Footer.css';
import telegramIcon from '../../assets/telegram-footer.png';
import emailIcon from '../../assets/email-footer.png';

const Footer: React.FC = () => { 
    const telegram: string = '@v128s';
    const email: string = 'v128s@gmail.com';

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

    return (
        <footer className="footer">
            {/* <div className='container'> */}
                <div className='footer-links-container'>
                    <div className='footer-links'>
                        <div className='footer-links__title' onClick={toggleAccordion}>
                            <p>Company & Team</p>
                            <div className='footer-arrow-container'>
                                <div className='footer-arrow-up'></div>
                                <div className='footer-arrow-down'></div>
                            </div>
                        </div>
                        <div className='footer-links__accordion-content'>
                            <div className='footer-links__item'>How it Works</div>
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
                            <p>Exchange Pairs</p>
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
                            <p>Supported Coins</p>
                            <div className='footer-arrow-container'>
                                <div className='footer-arrow-up'></div>
                                <div className='footer-arrow-down'></div>
                            </div>
                        </div>

                        <div className='footer-links__accordion-content'>
                            <div className='footer-links__item'>Bitcoin</div>
                            <div className='footer-links__item'>Ethereum</div>
                            <div className='footer-links__item'>Cardano</div>
                            <div className='footer-links__item'>Ripple</div>
                            <div className='footer-links__item'>Cosmos</div>
                            <div className='footer-links__item'>Solana</div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
            <p className='footer-privacy'>©2024 All Rights Reserved. Terms Of Service | Privacy Terms</p>
        </footer>
    );
}

export default Footer;
