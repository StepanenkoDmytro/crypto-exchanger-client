import './ExchangeDetailsStep.css';
import forIcon from '../../../assets/for.svg';
import walletIcon from '../../../assets/wallet.svg';
import Input from '../../forms/Input';

const ExchangeDetailsStep: React.FC = () => { 
    return (
        <div className="exchange-details">
            <p className="exchange-details__primary-text">Confirm Information</p>
            <p className="exchange-details__text">You Are About To Receive 1.356 BTC For Bitcloud Bank</p>
            <ul className="exchange-details__presentation">
                <li>
                    <div className="exchange-details__icon">
                        <img src={walletIcon} alt="svg" />
                    </div>
                    <div className="exchange-details__content">
                        <p>Pay</p>
                        <p className="exchange-details__content-value">3.000.000 VND</p>
                    </div>
                </li>
                <li>
                    <div className="exchange-details__icon">
                        <img src={walletIcon} alt="svg" />
                    </div>
                    <div className="exchange-details__content">
                        <p>Get</p>
                        <p className="exchange-details__content-value">0.00207026 BTC</p>
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
            <Input type={'text'}
					   label={'Enter the wallet address'}
					   value=""/>
        </div>
    );
}


export default ExchangeDetailsStep;