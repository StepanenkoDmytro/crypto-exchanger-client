import { useEffect, useState } from 'react';
import { IConvert, defaultCurrencyFrom, defaultCurrencyTo } from '../../domain/models';
import Exchanger from '../Exchanger';
import Announcement from '../ui/Announcement';
import Coins from '../ui/Coins';
import Contacts from '../ui/Contacts';
import Partners from '../ui/Partners';
import Trusty from '../ui/Trusty';


function Landing() {
	const [currencyFrom, setCurrencyFrom] = useState<IConvert>(defaultCurrencyFrom);
    const [currencyTo, setCurrencyTo] = useState<IConvert>(defaultCurrencyTo);

    const handleCurrencyChange = (newCurrencyFrom: IConvert, newCurrencyTo: IConvert) => {
        setCurrencyFrom(newCurrencyFrom);
        setCurrencyTo(newCurrencyTo);
    };

	useEffect(() => {}, [currencyFrom, currencyTo]);
	
	return (
        <main className='main'>
            <Exchanger currencyFrom={currencyFrom} currencyTo={currencyTo} />
            <Announcement />
            <Coins />
            <Trusty />
            <Partners />
            <Contacts />
        </main>
	);
}

export default Landing;
