import { useState } from 'react';
import './App.css';
import Stepper from './components/stepper/Stepper';
import SecondStep from './components/stepper/components/SecondStep';
import SimpleExchangerStep from './components/stepper/components/SimpleExchangerStep';
import SuccessExchangeStep from './components/stepper/components/SuccessExchangeStep';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Partners from './components/ui/Partners';

function App() {
  const [formValue, setFormValue] = useState({});
	const [isError, setIsError] = useState(false);
	const [activeStep, setActiveStep] = useState(1);

	const steps = [
		{order: 1, title: 'Select currency', content: <SimpleExchangerStep  />},
		{order: 2, title: 'Important Notes', content: <SecondStep />},
		{order: 3, title: 'Payment Details', content: <SuccessExchangeStep />},
	];

	// const handleConfirm = async () => {
	// 	try {
	// 		const result = await apiService.generateSession(formValue);
	// 		props.onSessionCreated(result);
	// 	} catch (e) {
	// 		console.error("Error while upload info: ", e);
	// 		setIsError(true);
	// 	}
	// }

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
    		<Stepper steps={steps} activeStep={activeStep}/>
			<Partners />
		</main>
		<Footer/>
    </>
  );
}

export default App;
