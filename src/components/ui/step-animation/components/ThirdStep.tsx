import '../StepAnimation.css';
import cloudPNG from '../../../../assets/step-animation/Cloud.png';
import connectLinePNG from '../../../../assets/step-animation/connect-line.png';
import successPNG from '../../../../assets/step-animation/Success.png';

const ThirdStep: React.FC = () => { 

    return (
        <div className='step-box'>
            <div className='step-item'>
            <div className='step-item__line prev-line'><img src={connectLinePNG} alt="step-line-png"/></div>
                <div className='step-item__img'><img src={cloudPNG} alt="step-png"/></div>
                <div className='step-item__content'>
                    <p className='step-item__content-number'>Step 3</p>
                    <p className='step-item__content-title'>Send</p>
                    <p className='step-item__content-desc'>To continue, send the indicated amount of coins to the deposit address.</p>
                </div>
                <div className='step-item__line'><img src={connectLinePNG} alt="step-line-png"/></div>
            </div>

            <div className='step-item'>
                <div className='step-item__last-icon'><img src={successPNG} alt="step-png"/></div>
                <div className='step-item__content'>
                    <p className='step-item__content-number'>Step 4</p>
                    <p className='step-item__content-title'>That’s all</p>
                    <p className='step-item__content-desc'>The exchange status “Finished” means that the swap process is over.</p>
                </div>
            </div>
        </div>
    );
}

export default ThirdStep;
