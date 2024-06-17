import '../StepAnimation.css';
import cloudPNG from '../../../../assets/step-animation/Cloud.png';
import connectLinePNG from '../../../../assets/step-animation/connect-line.png';
import walletPNG from '../../../../assets/step-animation/Wallet.png';
import { useTranslation } from 'react-i18next';

const SecondStep: React.FC = () => { 
    const { t } = useTranslation();
    return (
        <div className='step-box'>
            <div className='step-item'>
            <div className='step-item__line prev-line'><img src={connectLinePNG} alt="step-line-png"/></div>
                <div className='step-item__img'><img src={walletPNG} alt="step-png"/></div>
                <div className='step-item__content'>
                    <p className='step-item__content-number'>{t('exchanger.explaneHeader.stepTwo.step')}</p>
                    <p className='step-item__content-title'>{t('exchanger.explaneHeader.stepTwo.title')}</p>
                    <p className='step-item__content-desc'>{t('exchanger.explaneHeader.stepTwo.desc')}</p>
                </div>
                <div className='step-item__line'><img src={connectLinePNG} alt="step-line-png"/></div>
            </div>

            <div className='step-item'>
                <div className='step-item__img'><img src={cloudPNG} alt="step-png"/></div>
                <div className='step-item__content'>
                    <p className='step-item__content-number'>{t('exchanger.explaneHeader.stepThree.step')}</p>
                    <p className='step-item__content-title'>{t('exchanger.explaneHeader.stepThree.title')}</p>
                    <p className='step-item__content-desc'>{t('exchanger.explaneHeader.stepThree.desc')}</p>
                </div>
                <div className='step-item__line'><img src={connectLinePNG} alt="step-line-png"/></div>
            </div>
        </div>
    );
}

export default SecondStep;
