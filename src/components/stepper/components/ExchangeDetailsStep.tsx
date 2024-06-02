import './ExchangeDetailsStep.css';
import forIcon from '../../../assets/for.svg';
import walletIcon from '../../../assets/wallet.svg';
import { useEffect, useState } from 'react';
import Input from '../../ui/form-controls/Input';

const ExchangeDetailsStep: React.FC<any> = (props) => { 
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
            <p className="exchange-details__primary-text">Confirm Information</p>
            <p className="exchange-details__text">You Are About To Receive <span className='exchange-details__text-primary'>{props.form.currencyFrom.amount} {props.form.currencyFrom.name}</span> For Bitcloud Bank</p>
            <ul className="exchange-details__presentation">
                <li>
                    <div className="exchange-details__icon">
                        <img src={walletIcon} alt="svg" />
                    </div>
                    <div className="exchange-details__content">
                        <p>Pay</p>
                        <p className="exchange-details__content-value">{props.form.currencyFrom.amount} {props.form.currencyFrom.symbol}</p>
                    </div>
                </li>
                <li>
                    <div className="exchange-details__icon">
                        <img src={walletIcon} alt="svg" />
                    </div>
                    <div className="exchange-details__content">
                        <p>Get</p>
                        <p className="exchange-details__content-value">{props.form.currencyTo.amount} {props.form.currencyTo.symbol}</p>
                    </div>
                </li>
                <li>
                    <div className="exchange-details__icon">
                        <img src={forIcon} alt="svg" />
                    </div>
                    <div className="exchange-details__content">
                        <p>For</p>
                        <p className="exchange-details__content-value">Rockie</p>
                    </div>
                </li>
            </ul>
            <div className='exchange-details__input'>
                <Input type={'text'}
                    label={'Enter the wallet address'}
                    value={recipientAddress}
                    onInput={handleRecipientAddressChange}/>
            </div>
        </div>
    );
}


export default ExchangeDetailsStep;