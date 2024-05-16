import successIcon from '../../../assets/success.svg';
import './SuccessExchangeStep.css';

const SuccessExchangeStep: React.FC<any> = () => { 
    return (
    <div className="heading">
        <h4>Success</h4>
        <div className="heading__icon">
            <img src={successIcon} alt="svg"/>
        </div>
    </div>
    );
}


export default SuccessExchangeStep;