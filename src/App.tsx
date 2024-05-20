import { useState } from 'react';
import './App.css';
import Stepper from './components/stepper/Stepper';
import ExchangeDetailsStep from './components/stepper/components/ExchangeDetailsStep';
import SimpleExchangerStep from './components/stepper/components/SimpleExchangerStep';
import SuccessExchangeStep from './components/stepper/components/SuccessExchangeStep';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Partners from './components/ui/Partners';
import PaymentStep from './components/stepper/components/PaymentStep';
import ApiService from './services/ApiService';

function App() {
	const [formValue, setFormValue] = useState({});
	const [isError, setIsError] = useState(false);
	const [activeStep, setActiveStep] = useState(1);

	const steps = [
		{order: 1, title: 'Select currency', content: <SimpleExchangerStep  form={formValue}  onCoinsChanged={(data: any) => updateForm(data)} />},
		{order: 2, title: 'Payment Details', content: <ExchangeDetailsStep  form={formValue} onDetailsChange={(data: any) => updateForm(data)} />},
		{order: 3, title: 'Confirm Payment', content: <PaymentStep  form={formValue} onPaymentChange={(data: any) => updateForm(data)} />},
		{order: 4, title: 'Complete Payment', content: <SuccessExchangeStep  form={formValue}/>},
	];

	const handleConfirm = async () => {
		const apiService = new ApiService();
		try {
			await apiService.successExchange(formValue);
			// props.onSessionCreated(result);
		} catch (e) {
			console.error("Error while upload info: ", e);
			// setIsError(true);
		}
	}

	const handleOnRetry = () => {
		setActiveStep(1);
		setIsError(false);
	}

	const updateForm = (data: any) => {
		setFormValue({...formValue, ...data});
	}
	return (
		<>
			<Header/>
			<main>
				<Stepper steps={steps} activeStep={activeStep} onConfirm={handleConfirm}/>
				<Partners />
			</main>
			<Footer/>
		</>
	);
}

export default App;
