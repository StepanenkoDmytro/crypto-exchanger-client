import './App.css';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Partners from './components/ui/Partners';
import Exchanger from './components/Exchanger';
import Trusty from './components/ui/Trusty';
import Coins from './components/ui/Coins';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
import { useEffect, useState } from 'react';
import { IConvert, defaultCurrencyFrom, defaultCurrencyTo } from './domain/models';


function App() {
	const [currencyFrom, setCurrencyFrom] = useState<IConvert>(defaultCurrencyFrom);
    const [currencyTo, setCurrencyTo] = useState<IConvert>(defaultCurrencyTo);

    const handleCurrencyChange = (newCurrencyFrom: IConvert, newCurrencyTo: IConvert) => {
        setCurrencyFrom(newCurrencyFrom);
        setCurrencyTo(newCurrencyTo);
    };

	useEffect(() => {}, [currencyFrom, currencyTo]);
	
	return (
		<>
			<Header/>
			<main className='main'>
				<Exchanger currencyFrom={currencyFrom} currencyTo={currencyTo} />
				<Trusty />
				<Coins />
				<Partners />
			</main>
			<Footer onCurrencyChange={handleCurrencyChange} />
			<ScrollToTopButton />
		</>
	);
}

export default App;
