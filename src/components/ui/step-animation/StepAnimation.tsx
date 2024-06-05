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
            <i className='steper-click left' onClick={handlePrevClick}>click left</i>
            <div className='stepper-container'>
                <TransitionGroup>
                <CSSTransition
                        key={activeStep}
                        timeout={500}
                        classNames={{
                            enter: `step-content-enter-${direction}`,
                            enterActive: `step-content-enter-active-${direction}`,
                            exit: `step-content-exit-${direction}`,
                            exitActive: `step-content-exit-active-${direction}`
                        }}>
                            <div className="step-content">
                                {steps[activeStep].content}
                            </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
            <i className='steper-click' onClick={handleNextClick}>click right</i>
        </div>
    );
}

export default StepAnimation;
