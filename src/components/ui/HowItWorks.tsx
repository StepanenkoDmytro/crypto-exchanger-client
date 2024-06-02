import './HowItWorks.css';
import pairsIcon from '../../assets/pairs.svg';
import walletIcon from '../../assets/wallet.svg';
import sendIcon from '../../assets/send.svg';
import successIcon from '../../assets/circle-success.svg';

const HowItWorks: React.FC = () => { 
    return (
        <div className='container border'>
        <section className='how-it-works'>
            
                <div className='how-it-works--title'>How It Works</div>
                <div className='how-it-works--box'>
                    <div className='how-it-works--step'>
                        <div className='how-it-works--step__item'>
                            <div className='how-it-works--step__icon'>
                                <img src={pairsIcon} alt="svg"/>
                            </div>
                            <div className='how-it-works--step__dots'></div>
                        </div>
                        <p className='how-it-works--step__title'>Choose a currency pair</p>
                        <p className='how-it-works--step__desc'>Select currencies you want to swap and click the Exchange button.</p>
                        
                    </div>
                    <div className='how-it-works--step'>
                        <div className='how-it-works--step__item'>
                            <div className='how-it-works--step__icon'>
                            <img src={walletIcon} alt="svg"/>
                            </div>
                            <div className='how-it-works--step__dots'></div>
                        </div>
                        <p className='how-it-works--step__title'>Enter the recipient’s address</p>
                        <p className='how-it-works--step__desc'>The currency you want to receive will be sent to this address after the exchange.</p>
                    </div>
                    <div className='how-it-works--step'>
                        <div className='how-it-works--step__item'>
                            <div className='how-it-works--step__icon'>
                                <img src={sendIcon} alt="svg"/>
                            </div>
                            <div className='how-it-works--step__dots'></div>
                        </div>
                        <p className='how-it-works--step__title'>Send and receive coins</p>
                        <p className='how-it-works--step__desc'>To continue, send the indicated amount of coins to the deposit address.</p>
                    </div>
                    <div className='how-it-works--step'>
                        <div className='how-it-works--step__icon'>
                            <img src={successIcon} alt="svg"/>
                        </div>
                        <p className='how-it-works--step__title'>That’s all!</p>
                        <p className='how-it-works--step__desc'>The exchange status “Finished” means that the swap process is over.</p>
                    </div>
                </div>
            
        </section>
        </div>
    );
}

export default HowItWorks;