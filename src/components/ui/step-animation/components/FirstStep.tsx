import '../StepAnimation.css';
import cloudPNG from '../../../../assets/step-animation/Cloud.png';
import exchangePNG from '../../../../assets/step-animation/Comparison.png';
import walletPNG from '../../../../assets/step-animation/Wallet.png';
import connectLinePNG from '../../../../assets/step-animation/connect-line.png';

const FirstStep: React.FC = () => { 

    return (
        <div className='step-box'>
            <div className='step-item'>
                <div><img src={exchangePNG} alt="step-png"/></div>
                <div className='step-item__content'>
                    <p className='step-item__content-number'>Step 1</p>
                    <p className='step-item__content-title'>Choose</p>
                    <p className='step-item__content-desc'>Select currencies you want to swap and click the Exchange button.</p>
                </div>
                <div className='step-item__line'><img src={connectLinePNG} alt="step-line-png"/></div>
            </div>

            <div className='step-item'>
                <div><img src={walletPNG} alt="step-png"/></div>
                <div className='step-item__content'>
                    <p className='step-item__content-number'>Step 2</p>
                    <p className='step-item__content-title'>Enter</p>
                    <p className='step-item__content-desc'>The currency you want to receive will be sent to this address after the exchange.</p>
                </div>
                <div className='step-item__line'><img src={connectLinePNG} alt="step-line-png"/></div>
            </div>
        </div>
    );
}

export default FirstStep;
