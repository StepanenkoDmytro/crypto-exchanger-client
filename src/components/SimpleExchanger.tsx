import './SimpleExchanger.css';
import { useState, useEffect, ChangeEvent } from 'react';
import Input from "./forms/Input";
import echangeIcon from '../assets/echange.svg';

interface IConvert {
    id: string;
    name: string;
    price: number | null;
    symbol: string;
    amount: number | string;
}

const SimpleExchanger: React.FC = (props) => { 
    const currencyToConvertMock: IConvert = {
        id: "bitcoin",
        name: "Bitcoin",
        price: null,
        symbol: "BTC",
        amount: 0.1
    }

    const convertedCurrencyMock: IConvert = {
        id: "ethereum",
        name: "Ethereum",
        price: null,
        symbol: "ETH",
        amount: 0
    }
    const [isLoading, setIsLoading] = useState(true);
    const [currencyToConvert, setCurrencyToConvert] = useState<IConvert>(currencyToConvertMock);
    const [convertedCurrency, setConvertedCurrency] = useState<IConvert>(convertedCurrencyMock);
    const [amount, setAmount] = useState<number | string>(currencyToConvert.amount);
    const [convertedAmount, setConvertedAmount] = useState<number | null>(0);

    useEffect(() => {
        convertCurrency();
        if (!isLoading) {
            return;
        }
        // if (currencyToConvert && convertedCurrency) {
        //     fetch(`http://localhost:8080/api/v1/crypto/list?tickers=${currencyToConvert.id}&tickers=${convertedCurrency.id}`)
        //         .then(response => response.json())
        //         .then((coinsInfo: any) => {
        //             const currencyToConvertInfo = coinsInfo.find((coin: any) => coin.id === currencyToConvert.id);
        //             const convertedCurrencyInfo = coinsInfo.find((coin: any) => coin.id === convertedCurrency.id);

        //             if (currencyToConvertInfo) {
        //                 setCurrencyToConvert(prevState => ({
        //                     ...prevState,
        //                     price: currencyToConvertInfo.price
        //                 }));
        //             }

        //             if (convertedCurrencyInfo) {
        //                 setConvertedCurrency(prevState => ({
        //                     ...prevState,
        //                     price: convertedCurrencyInfo.price
        //                 }));
        //             }
                    
        //             setIsLoading(false);
        //         })
        // }

    }, [currencyToConvert, convertedCurrency, amount, isLoading]);

    const convertCurrency = () => {
        const parseAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
        if (parseAmount && currencyToConvert.price && convertedCurrency.price) {
            const result = (parseAmount * currencyToConvert.price / convertedCurrency.price).toFixed(6);
            setConvertedAmount(parseFloat(result));
        }
    };

    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        
        setAmount(inputValue);
    };  
    

    return (
        <div className="currency-box">
            <div className="currency-wrapper">
                
                <Input type={'number'}
						label={'Amount to send'}
						value={amount}
						onInput={handleAmountChange}/>

                <div className="currency-wrapper__selected">
                    <div className="currency-wrapper__icon">
                        <img alt="btc" src="https://static.simpleswap.io/images/currencies-logo/btc.svg"/>
                    </div>
                    <span>{currencyToConvert.symbol}</span>
                    <div className="arrow"></div>
                </div>
            </div>

            <div className="currency-wrapper__btn-convert">
                <img src={echangeIcon} alt="svg" />
            </div>

            <div className="currency-wrapper">
                 <Input type={'number'}
						label={'Amount to receive'}
						value={convertedAmount}
						readonly/>
               
                <div className="currency-wrapper__selected">
                        <div className="currency-wrapper__icon">
                        <img alt="eth" src="https://static.simpleswap.io/images/currencies-logo/eth.svg"/>
                        </div>
                        <span>{convertedCurrency.symbol}</span>
                        <div className="arrow"></div>
                    </div>
                </div>
            {/* <button className="currency-wrapper__btn">Echange</button> */}
        </div>
    );
}

export default SimpleExchanger;