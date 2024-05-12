import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleExchanger from './components/SimpleExchanger';
import Stepper from './components/Stepper';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';

function App() {
  const [formValue, setFormValue] = useState({});
	const [isError, setIsError] = useState(false);
	const [activeStep, setActiveStep] = useState(1);

	const steps = [
		{order: 1, title: 'Select currency', content: <SimpleExchanger  />},
		{order: 2, title: 'Important Notes', content: <SecondStep />},
		{order: 3, title: 'Payment Details', content: <ThirdStep />},
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
    // <div className='container'>
      <Stepper steps={steps} activeStep={activeStep}/>
    // </div>
  );
}

export default App;
