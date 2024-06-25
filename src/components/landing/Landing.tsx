import { useEffect, useState } from 'react';
import { IConvert, defaultCurrencyFrom, defaultCurrencyTo } from '../../domain/models';
import Exchanger from '../Exchanger';
import Announcement from '../ui/Announcement';
import Coins from '../ui/Coins';
import Contacts from '../ui/Contacts';
import Partners from '../ui/Partners';
import Trusty from '../ui/Trusty';

interface ExchangerProps {
    currencyFrom: IConvert;
    currencyTo: IConvert;
}


const Landing: React.FC<ExchangerProps> = ({ currencyFrom, currencyTo }) => {


	useEffect(() => {}, [currencyFrom, currencyTo]);
	
	return (
        <>
            <Exchanger currencyFrom={currencyFrom} currencyTo={currencyTo} />
            <Announcement />
            <Coins />
            <Trusty />
            <Partners />
            <Contacts />
        </>
	);
}

export default Landing;
