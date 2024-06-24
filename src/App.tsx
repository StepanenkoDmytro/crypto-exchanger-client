import './App.css';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
import { useEffect, useState } from 'react';
import { IConvert, defaultCurrencyFrom, defaultCurrencyTo } from './domain/models';
import Landing from './components/landing/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Documents from './components/documents/Documents';


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
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/documents" element={<Documents />} />
			</Routes>
			<Footer onCurrencyChange={handleCurrencyChange} />
			<ScrollToTopButton />
		</Router>
	);
}

export default App;
