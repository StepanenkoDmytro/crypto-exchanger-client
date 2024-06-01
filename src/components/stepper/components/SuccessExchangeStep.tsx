import successIcon from '../../../assets/success.svg';
import './SuccessExchangeStep.css';

const SuccessExchangeStep: React.FC<any> = (props) => { 
    return (
    <div className="success">
        <div className='success__title'>
            <h4>Success</h4>
            <div className="success__title--icon">
                <img src={successIcon} alt="svg"/>
            </div>
        </div>
        <div className='success__text'>
            <p className='success__text--primary'>Expect ETH in your wallet.</p> 
            <p>Usually, funds arrive within 15 minutes. If not, please contact us.</p>
        </div>
        <ul className='success__info'>
            <li>
                <p className='success__info--desc'>Status</p>
                <p className='success__info--text'>Completed</p>
            </li>
            <li>
                <p className='success__info--desc'>
                    Send deposit:
                </p>
                <p className='success__info--text'>
                    {props.form.currencyTo.amount}
                    {props.form.currencyTo.symbol}
                </p>
            </li>
            <li>
                <p className='success__info--desc'>
                    You get:
                </p>
                <p className='success__info--text'>
                    {props.form.currencyFrom.amount}
                    {props.form.currencyFrom.symbol}
                </p>
            </li>
            <li>
                <p className='success__info--desc'>
                    Recipient address:
                </p>
                <p className='success__info--text'>
                    {props.form.recipientAddress}
                </p>
            </li>
        </ul>
    </div>
    );
}


export default SuccessExchangeStep;