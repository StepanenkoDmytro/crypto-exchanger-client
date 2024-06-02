import './Partners.css';
import binanceIcon from '../../assets/partners/binance.svg';
import okxIcon from '../../assets/partners/okx.svg';
import kucoinIcon from '../../assets/partners/kucoin3.svg';
import bybitIcon from '../../assets/partners/bybit.svg';

const Partners: React.FC = () => { 
    return (
        <div className='container border'>
            <section className="partners">
                
                <div className='partners--logo'>
                    <img src={binanceIcon} alt='partners-logo'/>
                </div>

                <div className='partners--logo'>
                    <img src={okxIcon} alt='partners-logo'/>
                </div>

                <div className='partners--logo'>
                    <img className='kucoin' src={kucoinIcon} alt='partners-logo'/>
                    
                </div>

                <div className='partners--logo'>
                    <img src={bybitIcon} alt='partners-logo'/>
                </div>
                
            </section>
        </div>
    );
}

export default Partners;
