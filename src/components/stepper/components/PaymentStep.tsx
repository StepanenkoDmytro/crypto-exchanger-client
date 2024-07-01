import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './PaymentStep.css';
import copySvg from '../../../assets/copy.svg';
import Countdown from '../../ui/form-controls/Countdown';
import telegramIcon from '../../../assets/telegram-footer.png';
import emailIcon from '../../../assets/email-footer.png';

declare global {
    interface Window {
        QRCode: any; 
    }
}

const PaymentStep: React.FC<any> = (props) => {
    const { t } = useTranslation();
    const [recipient] = useState<string>(props.form.currencyFrom.walletAddress);
    const [countdown] = useState<number>(300);
    const [timeLeft, setTimeLeft] = useState<number>(300);

    const telegram: string = '@usdt_trc_20';
    const email: string = 'supportrockychange@gmail.com';

    const copyTelegtamToClipboard = () => {
        navigator.clipboard.writeText(telegram);
    };

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(email);
    };

    useEffect(() => {
        props.onDisabledBtnChange(true);
    }, []);
   
    useEffect(() => {
        const qrCodeElement = document.getElementById('qr-code');
        
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

        handleSubmit();
   }, [timeLeft]);

   const handleSubmit = () => {
    if(countdown - timeLeft === 60) {
        props.onDisabledBtnChange(false);
    }
   }

    const copyToClipboard = () => {
      navigator.clipboard.writeText(recipient);
    };

    return (
        <div className='payment'>
            <h1 className="payment__title">{t('exchanger.payment.title')}</h1>
            <div className='payment__info'>
                <div className='payment__info--text'>{t('exchanger.payment.sendText')}</div>
                <div className='payment__info--currency'>
                    <img alt="btc" src={props.form.currencyFrom.icon}/>
                    <p>
                        {props.form.currencyFrom.amount}
                        {props.form.currencyFrom.name}
                    </p>
                </div>
                <div className='payment__info--countdown'><Countdown duration={countdown} onTimeUpdate={(timeLeft) => setTimeLeft(timeLeft)}/></div>
            </div>
            {recipient.length > 0 
                ? (<>
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
                    </>) 
                : (<div className='payment__details--recipient-error'>
                    <div>
                        <p>{t('exchanger.payment.errorFirstPart')}</p>
                        <p>{t('exchanger.payment.errorSecondPart')}</p>
                        <p>{t('exchanger.payment.errorThirdPart')}</p>
                    </div>
                    <div style={{marginTop: '15px'}}>
                        <div className='payment__details--recipient-error__contact' onClick={copyTelegtamToClipboard}>
                            <img src={telegramIcon}></img>
                            <p>{telegram}</p>
                        </div>
                        <div className='payment__details--recipient-error__contact' onClick={copyEmailToClipboard}>
                            <img src={emailIcon}></img>
                            <p>{email}</p>
                        </div>
                    </div>
                </div>)
             }
        </div>
        
    );
}


export default PaymentStep;