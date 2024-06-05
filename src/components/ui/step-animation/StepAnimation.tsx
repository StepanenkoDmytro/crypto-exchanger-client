import './StepAnimation.css';
import FirstStep from './components/FirstStep';

const StepAnimation: React.FC = () => { 

    return (
        <div className='stepper-animation'>
            <FirstStep />
        </div>
    );
}

export default StepAnimation;
