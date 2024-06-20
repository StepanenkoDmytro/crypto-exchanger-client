import '../StepAnimation.css';
import exchangePNG from '../../../../assets/step-animation/Comparison.png';
import walletPNG from '../../../../assets/step-animation/Wallet.png';
import { useTranslation } from 'react-i18next';

const FirstStep: React.FC = () => { 
    const { t } = useTranslation();
    return (
        <div className='step-box'>
            <div className='step-item'>
                <div className='step-item__img'><img src={exchangePNG} alt="step-png"/></div>
                <div className='step-item__content'>
                    <p className='step-item__content-number'>{t('exchanger.explaneHeader.stepOne.step')}</p>
                    <p className='step-item__content-title'>{t('exchanger.explaneHeader.stepOne.title')}</p>
                    <p className='step-item__content-desc'>{t('exchanger.explaneHeader.stepOne.desc')}</p>
                </div>
                <div className='step-item__line-box'>
                    
                    <div className='step-item__line'></div>
                    <div className='step-item__circle'><span></span></div>
                    {/* <img src={connectLinePNG} alt="step-line-png"/> */}
                </div>
            </div>

            <div className='step-item'>
                <div className='step-item__img'><img src={walletPNG} alt="step-png"/></div>
                <div className='step-item__content'>
                    <p className='step-item__content-number'>{t('exchanger.explaneHeader.stepTwo.step')}</p>
                    <p className='step-item__content-title'>{t('exchanger.explaneHeader.stepTwo.title')}</p>
                    <p className='step-item__content-desc'>{t('exchanger.explaneHeader.stepTwo.desc')}</p>
                </div>
                <div className='step-item__line-box'>
                    {/* <span className='step-item_circle step-item_circle-left'></span> */}
                    <div className='step-item__circle step-item_circle-left'><span></span></div>
                    <div className='step-item__line'></div>
                    <div className='step-item__circle'><span></span></div>
                    {/* <img src={connectLinePNG} alt="step-line-png"/> */}
                </div>
            </div>
        </div>
    );
}

export default FirstStep;
