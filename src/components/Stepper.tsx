import { useState, useEffect, ReactNode } from 'react';
import successIcon from '../assets/success.svg';
import './Stepper.css';

const Step = ({ children, isActive }: { children: ReactNode, isActive: boolean }) => (
	<div className={`step ${isActive ? 'active' : ''}`}>
		{isActive && <div className="step-content">{children}</div>}
	</div>
);

const Stepper = (props: any) => {
	const [activeStep, setActiveStep] = useState(props.activeStep);
	useEffect(() => {
		setActiveStep(props.activeStep);
	}, [props.activeStep])

	const totalSteps = 3;

	const goNext = () => {
		if (activeStep < totalSteps) {
			setActiveStep(activeStep + 1);
		}
	};

	const goBack = () => {
		if (activeStep > 1) {
			setActiveStep(activeStep - 1);
		}
	};

	const handleGoToStep = (step: any) => {
		setActiveStep(step);
	}


	return (
		<div className='box'>
			<div className="stepper-header">
				{props.steps.map((step: any) => (
					<div
						className={`step-header ${activeStep === step.order ? 'active' : ''}`}
						onClick={() => handleGoToStep(step.order)}
					>
						<span className={`step-header__circle ${activeStep === step.order ? 'active-circle' : ''} ${activeStep > step.order ? 'done-circle' : ''}`}>

							{activeStep > step.order ? <img src={successIcon} alt="svg" /> : <></>}
							{/* <img src={successIcon} alt="svg" /> */}
						</span>
						<span className="step-title">{step.title}</span>
					</div>
				))}
			</div>

			<div className="stepper-container">
				{props.steps.map((step: any) => (
					<Step key={step.order} isActive={activeStep === step.order}>
						<section className="stepper-content">
							{step.content}
						</section>

						<div className="step-actions">
							{step.order > 1 && <button className="btn btn-danger" onClick={goBack}>Prev</button>}
							{(step.order < props.steps.length) && <button className="btn btn-next ms-2" onClick={goNext}>Next</button>}
							{(step.order === props.steps.length) && <button className="btn btn-next ms-2" onClick={props.onConfirm}>Exchange</button>}
						</div>
					</Step>
				))}
			</div>
		</div>
	);
};

export default Stepper;
