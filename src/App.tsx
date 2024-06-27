import './App.css';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
import { useEffect, useState } from 'react';
import { IConvert, defaultCurrencyFrom, defaultCurrencyTo } from './domain/models';
import Landing from './components/landing/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Terms from './components/documents/Terms';
import Privacy from './components/documents/Privacy';
import AmlKyc from './components/documents/AmlKyc';


function App() {
	const [currencyFrom, setCurrencyFrom] = useState<IConvert>(defaultCurrencyFrom);
    const [currencyTo, setCurrencyTo] = useState<IConvert>(defaultCurrencyTo);

    const handleCurrencyChange = (newCurrencyFrom: IConvert, newCurrencyTo: IConvert) => {
        setCurrencyFrom(newCurrencyFrom);
        setCurrencyTo(newCurrencyTo);
    };

	useEffect(() => {}, [currencyFrom, currencyTo]);
	
	return (
		<Router>
			<Header/>
			<main className='main' >
				<Routes>
					<Route path="/" element={<Landing  currencyFrom={currencyFrom} currencyTo={currencyTo}/>} />
					<Route path="/documents/terms" element={<Terms />} />
					<Route path="/documents/privacy" element={<Privacy />} />
					<Route path="/documents/aml-kyc" element={<AmlKyc />} />
				</Routes>
			</main>
			<Footer onCurrencyChange={handleCurrencyChange} />
			<ScrollToTopButton />
		</Router>
	);
}

export default App;
