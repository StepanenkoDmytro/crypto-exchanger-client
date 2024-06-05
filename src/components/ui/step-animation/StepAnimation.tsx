import { useEffect, useState } from 'react';
import './StepAnimation.css';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';


interface StepAnimationProps {
    activeStep: number;
}

const StepAnimation: React.FC<StepAnimationProps> = ({ activeStep: propActiveStep }) => { 
    const steps = [
		{order: 1, title: 'Select currency', content: <FirstStep />},
		{order: 2, title: 'Payment Details', content: <SecondStep />},
        {order: 3, title: 'Select currency', content: <FirstStep />},
		{order: 4, title: 'Payment Details', content: <SecondStep />},
	];
    
    const [activeStep, setActiveStep] = useState<number>(propActiveStep);
    const [currStep, setCurrStep] = useState<JSX.Element | null>(null);

    useEffect(() => {
        const currentStep = steps.find(step => step.order === activeStep);
        if(currentStep) {
            setCurrStep(currentStep.content);
        }
        
    }, [propActiveStep, activeStep]);

    const handlePrevClick = () => {
        setActiveStep(prevStep => prevStep === 0 ? steps.length : prevStep - 1);
    };

    const handleNextClick = () => {
        setActiveStep(prevStep => prevStep === steps.length ? 0 : prevStep + 1);
    };

    
    
    return (
        <div className='stepper-animation'>
            <i className='steper-click left' onClick={handlePrevClick}>click left</i>
            <div className='stepper-container'>
                {activeStep}
                {currStep}
            </div>
            <i className='steper-click' onClick={handleNextClick}>click right</i>
        </div>
    );
}

export default StepAnimation;
