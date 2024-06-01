import { useEffect, useState } from 'react';
import './PaymentStep.css';
import copySvg from '../../../assets/copy.svg';

declare global {
    interface Window {
        QRCode: any; 
    }
}

const PaymentStep: React.FC<any> = (props) => {
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
            <h1 className="payment__title">Await your deposit</h1>
            <div className='payment__info'>
                <div className='payment__info--text'>Send deposit:</div>
                <div className='payment__info--currency'>
                    <img alt="btc" src="https://static.simpleswap.io/images/currencies-logo/btc.svg"/>
                    <p>
                        {props.form.currencyTo.amount}
                        {props.form.currencyTo.name}
                    </p>
                </div>
            </div>
            <div className='payment__details'>
                <div className='payment__info--text'>Deposit address:</div>
                <div className='payment__details--recipient'>
                    <div id="qr-code"></div>
                    <div className='payment__details--address'>
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