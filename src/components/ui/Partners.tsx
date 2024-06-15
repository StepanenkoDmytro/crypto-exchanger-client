import './Partners.css';
import binanceIcon from '../../assets/partners/binance.svg';
import okxIcon from '../../assets/partners/okx.svg';
// import kucoinIcon from '../../assets/partners/kucoin3.svg';
import bybitIcon from '../../assets/partners/bybit.svg';

const Partners: React.FC = () => { 
    return (
        <section className='container border'>
            <h1 className='container__title'>Partners</h1>
            <p className='container__desc'>We are proud to collaborate with leading players in the crypto industry who help us ensure the reliability and innovation of our services. Here are some of our partners:</p>
            <section className="partners">
                
                <div className='partners--logo'>
                    <img src={binanceIcon} alt='partners-logo'/>
                </div>

                <div className='partners--logo'>
                    <img src={okxIcon} alt='partners-logo'/>
                </div>

                <div className='partners--logo'>
                    <img src='https://assets.staticimg.com/g-biz/externals/2022-06-01/9bfcd9feaf2b8bed.svg' alt='partners-logo'/>
                    
                </div>

                <div className='partners--logo'>
                    <img src={bybitIcon} alt='partners-logo'/>
                </div>
                
            </section>
        </section>
    );
}

export default Partners;
