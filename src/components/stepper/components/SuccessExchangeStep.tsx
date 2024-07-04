import { useEffect, useState } from 'react';
import successIcon from '../../../assets/success.svg';
import Countdown from '../../ui/form-controls/Countdown';
import './SuccessExchangeStep.css';
import { useTranslation } from 'react-i18next';

function getRandomNumber(min = 700, max = 900) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const SuccessExchangeStep: React.FC<any> = (props) => { 
    const { t } = useTranslation();
    const [countdown] = useState<number>(900);
    const [timeLeft, setTimeLeft] = useState<number>(300);
    const [successExchange, setSuccessExchange] = useState<boolean>(false);
    const [status, setStatus] = useState<string>(t('exchanger.success.waiting'));

    useEffect(() => {

        if(timeLeft === getRandomNumber()) {
            setStatus(t('exchanger.success.completed'));
            setTimeLeft(0);
        }

        if(timeLeft === 0) {
            setStatus(t('exchanger.success.completed'));
        }
    }, [timeLeft]);

    return (
    <div className="success">
        <div className='success__title'>
            <h4>{t('exchanger.success.title')}</h4>
            <div className="success__title--icon">
                <img src={successIcon} alt="svg"/>
            </div>
        </div>
        <div className='success__text'>
            <p className='success__text--primary'>{t('exchanger.success.expectPartOne')} ETH {t('exchanger.success.expectPartTwo')}</p> 
            <p>{t('exchanger.success.desc')}</p>
        </div>
        <div className='success__countdown'>
            <Countdown duration={countdown} onTimeUpdate={(timeLeft) => setTimeLeft(timeLeft)}/>
        </div>
        <ul className='success__info'>
            <li>
                <p className='success__info--desc'>{t('exchanger.success.status')}</p>
                <p className='success__info--text'>{status}</p>
            </li>
            <li>
                <p className='success__info--desc'>{t('exchanger.success.send')}</p>
                <p className='success__info--text'>
                    {props.form.currencyFrom.amount}
                    {props.form.currencyFrom.symbol}
                </p>
            </li>
            <li>
                <p className='success__info--desc'>{t('exchanger.success.get')}</p>
                <p className='success__info--text'>
                    {props.form.currencyTo.amount}
                    {props.form.currencyTo.symbol}
                </p>
            </li>
            <li>
                <p className='success__info--desc'>{t('exchanger.success.recipient')}</p>
                <p className='success__info--text'>
                    {props.form.recipientAddress}
                </p>
            </li>
        </ul>
    </div>
    );
}


export default SuccessExchangeStep;