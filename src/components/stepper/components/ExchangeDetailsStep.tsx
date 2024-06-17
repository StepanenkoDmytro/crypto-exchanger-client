import './ExchangeDetailsStep.css';
import forIcon from '../../../assets/for.svg';
import walletIcon from '../../../assets/wallet.svg';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../ui/form-controls/Input';

const ExchangeDetailsStep: React.FC<any> = (props) => { 
    const { t } = useTranslation();
    const [recipientAddress, setRecipientAddress] = useState<string>('');

    useEffect(() => {
        updateFormData();
    }, [recipientAddress]);

    const updateFormData = () => {
        props.onDetailsChange({
            recipientAddress: recipientAddress
        })
    };

    const handleRecipientAddressChange = (event : string) => {
        setRecipientAddress(event);
    };

    return (
        <div className="exchange-details">
            <p className="exchange-details__primary-text">{t('exchanger.exchangeDetails.title')}</p>
            <p className="exchange-details__text">{t('exchanger.exchangeDetails.textPartOne')} <span className='exchange-details__text-primary'>{props.form.currencyFrom.amount} {props.form.currencyFrom.name}</span> {t('exchanger.exchangeDetails.textPartTwo')}</p>
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
            <div className='exchange-details__input'>
                <Input type={'text'}
                    label={t('exchanger.exchangeDetails.label')}
                    placeholder={'0x'}
                    value={recipientAddress}
                    onInput={handleRecipientAddressChange}/>
            </div>
        </div>
    );
}


export default ExchangeDetailsStep;