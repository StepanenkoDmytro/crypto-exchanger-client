import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import Stepper from './stepper/Stepper'
import ExchangeDetailsStep from "./stepper/components/ExchangeDetailsStep";
import PaymentStep from "./stepper/components/PaymentStep";
import CurrencySelectorStep from "./stepper/components/CurrencySelectorStep";
import SuccessExchangeStep from "./stepper/components/SuccessExchangeStep";
import Error from './ui/error/Error';
import ApiService from '../services/ApiService';
import StepAnimation from "./ui/step-animation/StepAnimation";

const Exchanger: React.FC<any> = () => {
	const { t } = useTranslation();
    const [formValue, setFormValue] = useState({});
	const [isError, setIsError] = useState(false);
	const [activeStep, setActiveStep] = useState(1);
	const [retryTrigger, setRetryTrigger] = useState(0);

    const handleConfirm = async () => {
		const apiService = new ApiService();
		try {
			await apiService.submitExchangeData(formValue);
			// setIsError(true);
		} catch (e) {
			console.error("Error while upload info: ", e);
			setIsError(true);
		}
	}

	const handleOnRetry = () => {
		setIsError(false);
		setActiveStep(1);

		setRetryTrigger(prevCount => prevCount + 1); 
	}

	const updateForm = (data: any) => {
		setFormValue({...formValue, ...data});
	}

	const handleActiveStepChange = (stepOrder: number) => {
		setActiveStep(stepOrder);
	};

    const steps = [
		{order: 1, title: `${t('exchanger.head.selectCurr')}`, content: <CurrencySelectorStep  form={formValue}  onCoinsChanged={(data: any) => updateForm(data)} key={retryTrigger} onError={() => setIsError(true)}/>},
		{order: 2, title: `${t('exchanger.head.paymentDetails')}`, content: <ExchangeDetailsStep  form={formValue} onDetailsChange={(data: any) => updateForm(data)} />},
		{order: 3, title: `${t('exchanger.head.confirmPayment')}`, content: <PaymentStep form={formValue} onPaymentChange={(data: any) => updateForm(data)} />},
		{order: 4, title: `${t('exchanger.head.complitePayment')}`, content: <SuccessExchangeStep form={formValue}/>},
	];

	useEffect(() => {}, [retryTrigger]);
    
    return (
		<>
			<section className="container" id='exchanger'>
				<StepAnimation activeStep={activeStep} />
				<Stepper steps={steps} activeStep={activeStep} onActiveStepChange={handleActiveStepChange} onConfirm={handleConfirm}/>
			</section>
			{/* {isError
				? <Error onRetry={handleOnRetry} />
				: <></>
			} */}
		</>
    );
}

export default Exchanger;