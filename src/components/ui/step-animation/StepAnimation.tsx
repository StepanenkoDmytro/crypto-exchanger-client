import { useEffect, useState } from 'react';
import './StepAnimation.css';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


interface StepAnimationProps {
    activeStep: number;
}

const StepAnimation: React.FC<StepAnimationProps> = ({ activeStep: propActiveStep }) => { 
    const steps = [
		{order: 1, content: <FirstStep />},
		{order: 2, content: <SecondStep />},
		{order: 3, content: <ThirdStep />},
	];
    
    const [activeStep, setActiveStep] = useState<number>(propActiveStep);
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    useEffect(() => {
        const currentStep = steps.find(step => step.order === activeStep);
        if (currentStep) {
            setDirection('right');
        }
        
    }, [propActiveStep, activeStep]);

    const handlePrevClick = () => {
        setDirection('left');
        setActiveStep(prevStep => prevStep === 0 ? steps.length - 1 : prevStep - 1);
        
    };

    const handleNextClick = () => {
        setDirection('right');
        setActiveStep(prevStep => prevStep === steps.length - 1 ? 0 : prevStep + 1);
        
    };

    return (
        <div className='stepper-animation'>
            <div className='arrow-container left' onClick={handlePrevClick}>
                <div className='arrow-up'></div>
                <div className='arrow-down'></div>
            </div>
            <div className='stepper-container'>
                <div className="step-content">
                    {steps[activeStep].content}
                </div>
            </div>
            <div className='arrow-container' onClick={handleNextClick}>
                <div className='arrow-up'></div>
                <div className='arrow-down'></div>
            </div>
        </div>
    );
}

export default StepAnimation;
