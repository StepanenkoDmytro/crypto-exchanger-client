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
                    icon: `https://cryptologos.cc/logos/thumbs/${currencyToConvert.id}.png`
                }));
            }

            if (convertedCurrencyInfo) {
                setConvertedCurrency(prevState => ({
                    ...prevState,
                    price: convertedCurrencyInfo.price,
                    icon: `https://cryptologos.cc/logos/thumbs/${convertedCurrency.id}.png`
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
    
    return (
        <div className="currency-box">
            <div className="currency-wrapper">
                
                <Input type={'text'}
					   label={'Amount to send'}
					   value={amount}
					   onInput={handleAmountChange}/>

                <div className="currency-wrapper__selected">
                    <div className="currency-wrapper__icon">
                        {currencyToConvert.icon 
                            ? <img alt="btc" src={currencyToConvert.icon}/>
                            : <></>
                        }
                    </div>
                    <span>{currencyToConvert.symbol}</span>
                    <div className="arrow"></div>
                    {/* <SelectCurrency /> */}
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
                        {convertedCurrency.icon 
                            ? <img alt="btc" src={convertedCurrency.icon}/>
                            : <></>
                        }
                    </div>
                    <span>{convertedCurrency.symbol}</span>
                    <div className="arrow"></div>
                    
                    <SelectCurrency activeCurrency={convertedCurrency.id}/>
                </div>
            </div>
        </div>
    );
}

export default SimpleExchangerStep;
