import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './PaymentStep.css';
import copySvg from '../../../assets/copy.svg';
import Countdown from '../../ui/form-controls/Countdown';

declare global {
    interface Window {
        QRCode: any; 
    }
}

const PaymentStep: React.FC<any> = (props) => {
    const { t } = useTranslation();
    const [recipient, setRecipient] = useState<string>('0x7e75dbd8fd65104d41d49c278e4ed3d47e4dc8fb');
   
    useEffect(() => {
        const qrCodeElement = document.getElementById('qr-code');
        console.log(props);
        if (window.QRCode && qrCodeElement && !qrCodeElement.innerHTML) {
            const computedStyles = getComputedStyle(document.documentElement);
            const colorDark = computedStyles.getPropertyValue('--surface');
            const colorLight = computedStyles.getPropertyValue('--gray');
            
            new window.QRCode(document.getElementById('qr-code'), {
                text: recipient,
                width: 88,
                height: 88,
                colorDark: colorDark,
                colorLight: colorLight,
                correctLevel: window.QRCode.CorrectLevel.H
            });
        }
   }, []);

    const copyToClipboard = () => {
      navigator.clipboard.writeText(recipient);
    };

    return (
        <div className='payment'>
            <h1 className="payment__title">{t('exchanger.payment.title')}</h1>
            <div className='payment__info'>
                <div className='payment__info--text'>{t('exchanger.payment.sendText')}</div>
                <div className='payment__info--currency'>
                    <img alt="btc" src="https://static.simpleswap.io/images/currencies-logo/btc.svg"/>
                    <p>
                        {props.form.currencyFrom.amount}
                        {props.form.currencyFrom.name}
                    </p>
                </div>
            </div>
            <Countdown duration={300} />
            <div className='payment__details'>
                <div className='payment__info--text'>{t('exchanger.payment.depositText')}</div>
                <div className='payment__details--recipient'>
                    <div id="qr-code"></div>
                    <div className='payment__details--address' onClick={copyToClipboard}>
                        <p>{recipient}</p>
                    </div>
                    <button className='payment__details--copy-btn' onClick={copyToClipboard}>
                        <img src={copySvg} alt="svg"/>
                    </button>
                </div>
            </div>
        </div>
    );
}


export default PaymentStep;