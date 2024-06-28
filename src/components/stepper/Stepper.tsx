import { ReactNode, useEffect } from 'react';
import successIcon from '../../assets/success.svg';
import './Stepper.css';
import { useTranslation } from 'react-i18next';
import Arrow from '../ui/form-controls/Arrow';

const Step = ({ children, isActive }: { children: ReactNode, isActive: boolean }) => (
	<div className={`step ${isActive ? 'active' : ''}`}>
		{isActive && <div className="step-content">{children}</div>}
	</div>
);

const Stepper = (props: any) => {
	const { t } = useTranslation();
	const { activeStep, onActiveStepChange } = props;

	const totalSteps = 4;

	const goNext = () => {
		if (activeStep < totalSteps) {
			onActiveStepChange(activeStep + 1);
		}
	};

	const goBack = () => {
		if (activeStep > 1) {
			onActiveStepChange(activeStep - 1);
		}
	};

	const handleConfirm = async () => {
        props.onConfirm();
        // if (success) {
            goNext();
        // }
    }

	return (
		<div className='box'>
			<div className="stepper-header">
				{props.steps.map((step: any) => (
					<div key={step.order} className={`step-header ${activeStep === step.order ? 'active' : ''}`}>
						<span className={`step-header__circle ${activeStep === step.order ? 'active-circle' : ''} ${activeStep > step.order ? 'done-circle' : ''}`}>

							{activeStep > step.order 
								? <img src={successIcon} alt="svg" /> 
								: <></>}
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

						{step.order < props.steps.length &&
							<div className="step-actions">
								{step.order > 1 && 
									<>
										<button className="btn btn-danger" onClick={goBack}>{t('exchanger.prev')}</button>
										<button className="btn btn-danger mobile" onClick={goBack}>
											<Arrow direction='left' color='var(--surface)' width={20}/>
										</button>
									</>
								}
								{(step.order < props.steps.length - 1) && 
									<button className="btn btn-next ms-2" onClick={goNext} disabled={props.stepValidity}>{t('exchanger.next')}</button>
								}
								{(step.order === props.steps.length - 1) && <button className="btn btn-next ms-2" onClick={handleConfirm} disabled={props.stepValidity}>{t('exchanger.exchange')}</button>}
						
							</div>
						}
					</Step>
				))}
			</div>
		</div>
	);
};

export default Stepper;

