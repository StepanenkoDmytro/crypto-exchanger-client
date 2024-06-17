import '../StepAnimation.css';
import cloudPNG from '../../../../assets/step-animation/Cloud.png';
import connectLinePNG from '../../../../assets/step-animation/connect-line.png';
import successPNG from '../../../../assets/step-animation/Success.png';
import { useTranslation } from 'react-i18next';

const ThirdStep: React.FC = () => { 
    const { t } = useTranslation();
    return (
        <div className='step-box'>
            <div className='step-item'>
            <div className='step-item__line prev-line'><img src={connectLinePNG} alt="step-line-png"/></div>
                <div className='step-item__img'><img src={cloudPNG} alt="step-png"/></div>
                <div className='step-item__content'>
                    <p className='step-item__content-number'>{t('exchanger.explaneHeader.stepThree.step')}</p>
                    <p className='step-item__content-title'>{t('exchanger.explaneHeader.stepThree.title')}</p>
                    <p className='step-item__content-desc'>{t('exchanger.explaneHeader.stepThree.desc')}</p>
                </div>
                <div className='step-item__line'><img src={connectLinePNG} alt="step-line-png"/></div>
            </div>

            <div className='step-item'>
                <div className='step-item__last-icon'><img src={successPNG} alt="step-png"/></div>
                <div className='step-item__content'>
                    <p className='step-item__content-number'>{t('exchanger.explaneHeader.stepFour.step')}</p>
                    <p className='step-item__content-title'>{t('exchanger.explaneHeader.stepFour.title')}</p>
                    <p className='step-item__content-desc'>{t('exchanger.explaneHeader.stepFour.desc')}</p>
                </div>
            </div>
        </div>
    );
}

export default ThirdStep;
