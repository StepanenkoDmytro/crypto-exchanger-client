import './SimpleExchangerStep.css';
import { useState, useEffect, ChangeEvent } from 'react';
import echangeIcon from '../../../assets/echange.svg';
import Input from '../../forms/Input';
import ApiService from '../../../services/ApiService';
import { IConvert } from '../../../constants/models';
import { ApprovedCurrenciesList, convertedCurrencyStart, currencyToConvertStart } from '../../../constants/init';
import SelectCurrency from '../../forms/SelectCurrency';


const SimpleExchangerStep: React.FC<any> = (props) => { 

    const [currencyToConvert, setCurrencyToConvert] = useState<IConvert>(currencyToConvertStart);
    const [convertedCurrency, setConvertedCurrency] = useState<IConvert>(convertedCurrencyStart);
    const [amount, setAmount] = useState<number | string>(0.1);
    const [convertedAmount, setConvertedAmount] = useState<number | string>(0);

    useEffect(() => {
        updateFormData();
        convertCurrency();

        fetchPrices();

    }, [currencyToConvert, convertedCurrency, amount, props.retryTrigger]);

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
                    price: currencyToConvertInfo.price,
                }));
            }

            if (convertedCurrencyInfo) {
                setConvertedCurrency(prevState => ({
                    ...prevState,
                    price: convertedCurrencyInfo.price,
                }));
            }

        } catch (error) {
            console.error('Failed to fetch crypto prices:', error);
            props.onError();
        }
    };

    const handleAmountChange = (event: string | number) => {
        setAmount(event);
    };  

    const handleChangeCurrencyToConvert = (currency: IConvert) => {
        setCurrencyToConvert(currency);
    }

    const handleChangeConvertedCurrency = (currency: IConvert) => {
        setConvertedCurrency(currency);
    }
    
    return (
        <div className="currency-box">
            <div className="currency-wrapper">
                
                <Input type={'text'}
					   label={'Amount to send'}
					   value={amount}
					   onInput={handleAmountChange}/>

                <SelectCurrency activeCurrency={currencyToConvert} onChange={handleChangeCurrencyToConvert}/>
            </div>

            <div className="currency-wrapper__btn-convert">
                <img src={echangeIcon} alt="svg" />
            </div>

            <div className="currency-wrapper">
                <Input type={'number'}
                    label={'Amount to receive'}
                    value={convertedAmount}
                    readonly/>
                    
                <SelectCurrency activeCurrency={convertedCurrency} onChange={handleChangeConvertedCurrency}/>
            </div>
        </div>
    );
}

export default SimpleExchangerStep;
