import './CurrencySelectorStep.css';
import { useState, useEffect } from 'react';
import echangeIcon from '../../../assets/echange.svg';
import Input from '../../ui/form-controls/Input';
import ApiService from '../../../services/ApiService';
import { IConvert, defaultCurrencyFrom, defaultCurrencyTo } from '../../../domain/models';
import CurrencySelector from '../../ui/form-controls/CurrencySelector';
import { useTranslation } from 'react-i18next';

interface CurrencySelectorStepProps {
    form: {
        currencyFrom: IConvert;
        currencyTo: IConvert;
    };
    onCoinsChanged: (data: { currencyFrom: IConvert; currencyTo: IConvert }) => void;
    onDisabledBtnChange: (isValid: boolean) => void;
    onError: () => void;
    retryTrigger: number;
}

const CurrencySelectorStep: React.FC<CurrencySelectorStepProps> = ({ form, onCoinsChanged, onError, retryTrigger, onDisabledBtnChange }) => {
    const { t } = useTranslation();
    const apiService = new ApiService();
    const [currencyFrom, setCurrencyFrom] = useState<IConvert>(defaultCurrencyFrom);
    const [currencyTo, setCurrencyTo] = useState<IConvert>(defaultCurrencyTo);
    const [amountFrom, setAmountFrom] = useState<number | string>(0.1);
    const [amonutTo, setAmonutTo] = useState<number | string>(0);

    useEffect(() => {
        handleSetCurrencyFrom(defaultCurrencyFrom);
        handleSetCurrencyTo(defaultCurrencyTo);
        onDisabledBtnChange(false);
    }, []);

    useEffect(() => {
        if(form.currencyFrom.id !== currencyFrom.id || form.currencyTo.id !== currencyTo.id) {
            handleSetCurrencyFrom(form.currencyFrom);
            handleSetCurrencyTo(form.currencyTo);
            convertCurrency();
        }
    }, [form.currencyFrom, form.currencyTo]);

    useEffect(() => {
        updateFormData();
        convertCurrency();
    }, [currencyFrom, currencyTo, amountFrom, amonutTo, retryTrigger]);

    const updateFormData = () => {
        currencyFrom.amount = amountFrom;
        currencyTo.amount = amonutTo;

        onCoinsChanged({
            currencyFrom: currencyFrom,
            currencyTo: currencyTo,
        });
    }

    const convertCurrency = () => {
        const parseAmount = typeof amountFrom === 'string' ? parseFloat(amountFrom) : amountFrom;
        if (parseAmount && currencyFrom.price && currencyTo.price) {
            const result = (parseAmount * currencyFrom.price / currencyTo.price).toFixed(6);
            setAmonutTo(parseFloat(result));
        }
    }

    const handleSetCurrencyFrom = async (currency: IConvert) => {
        try {
            const currencyFromInfo = await apiService.getCoinPrice(currency.id);
            if (!currencyFromInfo) {
                onError();
                return;
            }

            setCurrencyFrom(prevState => ({
                ...currency,
                price: currencyFromInfo.price,
            }));
        } catch (error) {
            console.error('Failed to fetch crypto price for currencyFrom:', error);
            onError();
        }
    };

    const handleSetCurrencyTo = async (currency: IConvert) => {
        try {
            const currencyToInfo = await apiService.getCoinPrice(currency.id);
            if (!currencyToInfo) {
                onError();
                return;
            }

            setCurrencyTo(prevState => ({
                ...currency,
                price: currencyToInfo.price,
            }));
        } catch (error) {
            console.error('Failed to fetch crypto price for currencyTo:', error);
            onError();
        }
    };

    const fetchPrices = async () => {
        try {
            const currencyFromInfo = await apiService.getCoinPrice(currencyFrom.id);
            const currencyToInfo = await apiService.getCoinPrice(currencyTo.id);
            
            if(!currencyFromInfo || !currencyToInfo) {
                onError();
                return;
            }

            setCurrencyFrom(prevState => ({
                ...prevState,
                price: currencyFromInfo.price,
            }));

            setCurrencyTo(prevState => ({
                ...prevState,
                price: currencyToInfo.price,
            }));

        } catch (error) {
            console.error('Failed to fetch crypto prices:', error);
            onError();
        }
    }

    const handleAmountChange = (event: string | number) => {
        setAmountFrom(event);
    }

    const handleChangeCurrencyFrom = (currency: IConvert) => {
        handleSetCurrencyFrom(currency);
    }

    const handleChangeCurrencyTo = (currency: IConvert) => {
        handleSetCurrencyTo(currency);
    }

    const handleSwapCurrencies = () => {
        const tmpCurr = currencyFrom;
        setCurrencyFrom(currencyTo);
        setCurrencyTo(tmpCurr);
    }
    
    return (
        <div className="currency-box">
            <div className="currency-wrapper">
                
                <Input type={'text'}
					   label={t('exchanger.currSelect.labelSend')}
					   value={amountFrom}
					   onInput={handleAmountChange}/>

                <CurrencySelector activeCurrency={currencyFrom} onChange={handleChangeCurrencyFrom}/>
            </div>

            <div className="currency-wrapper__btn-convert" onClick={handleSwapCurrencies}>
                <img src={echangeIcon} alt="svg" />
            </div>

            <div className="currency-wrapper">
                
                <Input type={'number'}
                    label={t('exchanger.currSelect.labelReceive')}
                    value={amonutTo}
                    readonly/>
                    
                <CurrencySelector activeCurrency={currencyTo} onChange={handleChangeCurrencyTo}/>
            </div>
        </div>
    );
}

export default CurrencySelectorStep;
