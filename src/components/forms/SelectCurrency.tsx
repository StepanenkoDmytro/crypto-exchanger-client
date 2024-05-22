import { ApprovedCurrenciesList } from "../../constants/init";
import './SelectCurrency.css';

type SelectCurrencyProps = {
    activeCurrency?: string;
  };

export default function SelectCurrency({activeCurrency}: SelectCurrencyProps) {
    return (
        <div className='select'>
            <ul>
                {ApprovedCurrenciesList.map((currency) => (
                    <li key={currency.id}>
                        {activeCurrency && activeCurrency === currency.id ? <span>OK</span> : <></>}
                        <img src={`https://cryptologos.cc/logos/thumbs/${currency.id}.png`} alt="icon" />
                        <span>{currency.name} ({currency.symbol})</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}