import { useEffect, useState } from 'react';
import './PaymentStep.css';

declare global {
    interface Window {
        QRCode: any; 
    }
}

const PaymentStep: React.FC<any> = (props) => {
    const [qrRecipient, setQrRecipient] = useState<string>('0x7e75dbd8fd65104d41d49c278e4ed3d47e4dc8fb');
   
    useEffect(() => {
        const qrCodeElement = document.getElementById('qr-code');
        

        if (window.QRCode && qrCodeElement && !qrCodeElement.innerHTML) {
            const computedStyles = getComputedStyle(document.documentElement);
            const colorDark = computedStyles.getPropertyValue('--surface');
            const colorLight = computedStyles.getPropertyValue('--bg1');
            
            new window.QRCode(document.getElementById('qr-code'), {
                text: qrRecipient,
                width: 88,
                height: 88,
                colorDark: colorDark,
                colorLight: colorLight,
                correctLevel: window.QRCode.CorrectLevel.H
            });

        }
   }, []);

//    const CopyToClipboardButton = () => {
    const copyToClipboard = () => {
      navigator.clipboard.writeText(qrRecipient)
        // .then(() => {
        //   console.log('Text copied to clipboard:', text);
        //   // Додаткові дії після копіювання в буфер обміну, якщо потрібно
        // })
        // .catch((error) => {
        //   console.error('Failed to copy text to clipboard:', error);
        // });
    };

    return (
        <div className='payment'>
            <h3 className="">Await your deposit</h3>
            <div className='payment__info'>
                <p>Send deposit</p>
                <div className='payment__info--currency'>
                    <img alt="btc" src="https://static.simpleswap.io/images/currencies-logo/btc.svg"/>
                    <p>
                        <span>{props.form.currencyToConvert.amount}</span>
                        <span>{props.form.currencyToConvert.name}</span>
                    </p>
                </div>
            </div>
            <div className='payment__details'>
                <p>Deposit adress </p>
                <div className='payment__details--recipient'>
                    <div id="qr-code"></div>
                    <p>{qrRecipient}</p>
                    <button onClick={copyToClipboard}></button>
                </div>
            </div>
        </div>
    );
}


export default PaymentStep;