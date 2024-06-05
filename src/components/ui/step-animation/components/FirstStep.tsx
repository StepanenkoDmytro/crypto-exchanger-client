import './FirstStep.css';
import cloudPNG from '../../../../assets/step-animation/Cloud.png';
import connectLinePNG from '../../../../assets/step-animation/connect-line.png';

const FirstStep: React.FC = () => { 

    return (
        <div className='step-box'>
            <div className='step-item'>
                {/* <div className='step-item__primary'>
                    <div><img src={cloudPNG} alt="step-png"/></div>
                    
                </div> */}
                <div><img src={cloudPNG} alt="step-png"/></div>
                <div className='step-item__content'>
                    <p className='step-item__content-number'>Step 1</p>
                    <p className='step-item__content-title'>Download</p>
                    <p className='step-item__content-desc'>Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
                </div>
                <div className='step-item__line'><img src={connectLinePNG} alt="step-line-png"/></div>
            </div>

            <div className='step-item'>
                {/* <div className='step-item__primary'>
                    <div><img src={cloudPNG} alt="step-png"/></div>
                    
                </div> */}
                <div><img src={cloudPNG} alt="step-png"/></div>
                <div className='step-item__content'>
                    <p className='step-item__content-number'>Step 1</p>
                    <p className='step-item__content-title'>Download</p>
                    <p className='step-item__content-desc'>Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
                </div>
                <div className='step-item__line'><img src={connectLinePNG} alt="step-line-png"/></div>
            </div>
        </div>
    );
}

export default FirstStep;
