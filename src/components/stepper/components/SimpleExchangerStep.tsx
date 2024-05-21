import './SimpleExchangerStep.css';
import { useState, useEffect, ChangeEvent } from 'react';
import echangeIcon from '../../../assets/echange.svg';
import Input from '../../forms/Input';
import ApiService from '../../../services/ApiService';
import { IConvert } from '../../../constants/models';
import { convertedCurrencyStart, currencyToConvertStart } from '../../../constants/init';


const SimpleExchangerStep: React.FC<any> = (props) => { 

    const [isLoading, setIsLoading] = useState(true);
    const [currencyToConvert, setCurrencyToConvert] = useState<IConvert>(currencyToConvertStart);
    const [convertedCurrency, setConvertedCurrency] = useState<IConvert>(convertedCurrencyStart);
    const [amount, setAmount] = useState<number | string>(currencyToConvert.amount);
    const [convertedAmount, setConvertedAmount] = useState<number | string>(0);

    useEffect(() => {
        updateFormData();
        convertCurrency();

        if (!isLoading) {
            return;
        }

        fetchPrices();

    }, [currencyToConvert, convertedCurrency, amount, isLoading]);

    const updateFormData = () => {
        currencyToConvert.amount = amount;
        convertedCurrency.amount = convertedAmount;

        props.onCoinsChanged({
            currencyToConvert: currencyToConvert,
            convertedCurrency: convertedCurrency,
        });
    };

    const convertCurrency = () => {
        const parseAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
        if (parseAmount && currencyToConvert.price && convertedCurrency.price) {
            const result = (parseAmount * currencyToConvert.price / convertedCurrency.price).toFixed(6);
            setConvertedAmount(parseFloat(result));
        }
    };

    const fetchPrices = async () => {
        const apiService = new ApiService();
        try {
            const currencyToConvertInfo = await apiService.getCoinPrice(currencyToConvert.id);
            const convertedCurrencyInfo = await apiService.getCoinPrice(convertedCurrency.id);

            if (currencyToConvertInfo) {
                setCurrencyToConvert(prevState => ({
                    ...prevState,
                    price: currencyToConvertInfo.price
                }));
            }

            if (convertedCurrencyInfo) {
                setConvertedCurrency(prevState => ({
                    ...prevState,
                    price: convertedCurrencyInfo.price
                }));
            }

            setIsLoading(false);
        } catch (error) {
            console.error('Failed to fetch crypto prices:', error);
        }
    };

    const handleAmountChange = (event: string | number) => {
        setAmount(event);
    };  
    
    return (
        <div className="currency-box">
            <div className="currency-wrapper">
                
                <Input type={'text'}
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
        </div>
    );
}

export default SimpleExchangerStep;
