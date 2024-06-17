import successIcon from '../../../assets/success.svg';
import './SuccessExchangeStep.css';
import { useTranslation } from 'react-i18next';

const SuccessExchangeStep: React.FC<any> = (props) => { 
    const { t } = useTranslation();
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
        <ul className='success__info'>
            <li>
                <p className='success__info--desc'>{t('exchanger.success.status')}</p>
                <p className='success__info--text'>{t('exchanger.success.completed')}</p>
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