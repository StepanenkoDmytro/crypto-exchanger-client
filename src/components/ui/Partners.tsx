import './Partners.css';
import binanceIcon from '../../assets/partners/binance.svg';
import okxIcon from '../../assets/partners/okx.svg';
import bybitIcon from '../../assets/partners/bybit.svg';
import trustWalletIcon from '../../assets/partners/trust_wallet2.png';
import tonkeeperIcon from '../../assets/partners/tonkeeper1.png';
import { useTranslation } from 'react-i18next';

const Partners: React.FC = () => { 
    const { t } = useTranslation();

    const handleRedirectBinance = () => {
        return () => {
          window.location.href = `https://www.binance.com/`;
        };
    }
    const handleRedirectOkx = () => {
        return () => {
          window.location.href = `https://www.okx.com/`;
        };
    }

    const handleRedirectTrustWallet = () => {
        return () => {
          window.location.href = `https://trustwallet.com/`;
        };
    }

    const handleRedirectTonkeeper = () => {
        return () => {
          window.location.href = `https://tonkeeper.com/`;
        };
    }

    return (
        <section className='container border' id='partenrs'>
            <h1 className='container__title'>{t('partners.title')}</h1>
            <p className='container__desc'>{t('partners.desc')}</p>
            <section className="partners">
                
                <div className='partners--logo' onClick={handleRedirectBinance()}>
                    <img src={binanceIcon} alt='partners-logo'/>
                </div>

                <div className='partners--logo' onClick={handleRedirectOkx()}>
                    <img src={okxIcon} alt='partners-logo'/>
                </div>

                <div className='partners--logo' onClick={handleRedirectTrustWallet()}>
                    <img src={trustWalletIcon} alt='partners-logo'/>
                    
                </div>

                <div className='partners--logo' onClick={handleRedirectTonkeeper()}>
                    <img src={tonkeeperIcon} alt='partners-logo'/>
                </div>
                
            </section>
        </section>
    );
}

export default Partners;
