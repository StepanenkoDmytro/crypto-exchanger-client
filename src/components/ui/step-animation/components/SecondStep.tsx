import '../StepAnimation.css';
import cloudPNG from '../../../../assets/step-animation/Cloud.png';
import connectLinePNG from '../../../../assets/step-animation/connect-line.png';
import walletPNG from '../../../../assets/step-animation/Wallet.png';

const SecondStep: React.FC = () => { 

    return (
        <div className='step-box'>
            <div className='step-item'>
            <div className='step-item__line prev-line'><img src={connectLinePNG} alt="step-line-png"/></div>
                <div className='step-item__img'><img src={walletPNG} alt="step-png"/></div>
                <div className='step-item__content'>
                    <p className='step-item__content-number'>Step 2</p>
                    <p className='step-item__content-title'>Enter</p>
                    <p className='step-item__content-desc'>The currency you want to receive will be sent to this address after the exchange.</p>
                </div>
                <div className='step-item__line'><img src={connectLinePNG} alt="step-line-png"/></div>
            </div>

            <div className='step-item'>
                <div className='step-item__img'><img src={cloudPNG} alt="step-png"/></div>
                <div className='step-item__content'>
                    <p className='step-item__content-number'>Step 3</p>
                    <p className='step-item__content-title'>Send</p>
                    <p className='step-item__content-desc'>To continue, send the indicated amount of coins to the deposit address.</p>
                </div>
                <div className='step-item__line'><img src={connectLinePNG} alt="step-line-png"/></div>
            </div>
        </div>
    );
}

export default SecondStep;
