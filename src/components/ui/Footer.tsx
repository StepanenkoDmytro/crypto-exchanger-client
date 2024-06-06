import './Footer.css';

const Footer: React.FC = () => { 
    return (
        
        <footer className="footer">
            <div className='container'>
                <div className='footer-links-container'>
                    <div className='footer-links'>
                        <p className='footer-links__title'>Company & Team</p>
                        <div className='footer-links__item'>How it Works</div>
                        <div className='footer-links__item'>Supported Coins</div>
                        <div className='footer-links__item'>Contacts</div>
                    </div>
                    <div className='footer-links'>
                        <p className='footer-links__title'>Exchange Pairs</p>
                        <div className='footer-links__item'>BTC to ETH</div>
                        <div className='footer-links__item'>ETH to BTC</div>
                        <div className='footer-links__item'>BTC to XMR</div>
                        <div className='footer-links__item'>ETH to SOL</div>
                        <div className='footer-links__item'>SOL to ETH</div>
                        <div className='footer-links__item'>XMR to BTC</div>
                    </div>
                    <div className='footer-links'>
                        <p className='footer-links__title'>Supported Coins</p>
                        <div className='footer-links__item'>Bitcoin</div>
                        <div className='footer-links__item'>Ethereum</div>
                        <div className='footer-links__item'>Cardano</div>
                        <div className='footer-links__item'>Ripple</div>
                        <div className='footer-links__item'>Cosmos</div>
                        <div className='footer-links__item'>Solana</div>
                    </div>
                </div>
            </div>
            <p className='footer-privacy'>©2024 All Rights Reserved. Terms Of Service | Privacy Terms</p>
        </footer>
    );
}

export default Footer;
