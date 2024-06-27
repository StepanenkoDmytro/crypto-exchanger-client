import './ExchangeDetailsStep.css';
import forIcon from '../../../assets/for.svg';
import walletIcon from '../../../assets/wallet.svg';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../ui/form-controls/Input';
import cryptoAddressService from '../service/CryptoAddressService';

const ExchangeDetailsStep: React.FC<any> = (props) => { 
    const { t } = useTranslation();
    // const cryptoAddressService = new CryptoAddressService();
    const [recipientAddress, setRecipientAddress] = useState<string>('');
    const [isCorrectWallet, setIsCorrectWallet] = useState<boolean | null>(null);

    useEffect(() => {
        props.onDisabledBtnChange(true);
    }, [])

    useEffect(() => {
        updateFormData();
    }, [recipientAddress]);

    const updateFormData = () => {
        props.onDetailsChange({
            recipientAddress: recipientAddress
        });
    };

    const handleRecipientAddressChange = (event : string) => {
        const isValid = cryptoAddressService.isValidAddress(props.form.currencyTo.id, event);
        setIsCorrectWallet(!isValid);
        props.onDisabledBtnChange(!isValid);
        setRecipientAddress(event);
    };

    return (
        <div className="exchange-details">
            <p className="exchange-details__primary-text">{t('exchanger.exchangeDetails.title')}</p>
            <ul className="exchange-details__presentation">
                <li>
                    <div className="exchange-details__icon">
                        <img src={walletIcon} alt="svg" />
                    </div>
                    <div className="exchange-details__content">
                        <p>{t('exchanger.exchangeDetails.pay')}</p>
                        <p className="exchange-details__content-value">{props.form.currencyFrom.amount} {props.form.currencyFrom.symbol}</p>
                    </div>
                </li>
                <li>
                    <div className="exchange-details__icon">
                        <img src={walletIcon} alt="svg" />
                    </div>
                    <div className="exchange-details__content">
                        <p>{t('exchanger.exchangeDetails.get')}</p>
                        <p className="exchange-details__content-value">{props.form.currencyTo.amount} {props.form.currencyTo.symbol}</p>
                    </div>
                </li>
                <li>
                    <div className="exchange-details__icon">
                        <img src={forIcon} alt="svg" />
                    </div>
                    <div className="exchange-details__content">
                        <p>{t('exchanger.exchangeDetails.for')}</p>
                        <p className="exchange-details__content-value">Rockie</p>
                    </div>
                </li>
            </ul>

            <p className="exchange-details__text">{t('exchanger.exchangeDetails.textPartOne')} <span className='exchange-details__text-primary'>{props.form.currencyFrom.amount} {props.form.currencyFrom.name}</span> {t('exchanger.exchangeDetails.textPartTwo')}</p>
            <div className='exchange-details__input'>
                <Input 
                    type={'text'}
                    label={`${t('exchanger.exchangeDetails.labelPartOne')}${props.form.currencyTo.name}${t('exchanger.exchangeDetails.labelPartTwo')}`}
                    placeholder={t('exchanger.exchangeDetails.placeholder')}
                    value={recipientAddress}
                    onInput={handleRecipientAddressChange}
                    hasError={!!isCorrectWallet}/>
            </div>
        </div>
    );
}


export default ExchangeDetailsStep;