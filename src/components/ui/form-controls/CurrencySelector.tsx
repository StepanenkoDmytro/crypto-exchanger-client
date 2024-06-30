import { useEffect, useRef, useState } from "react";
import { ApprovedCurrenciesList, IConvert } from "../../../domain/models";
import './CurrencySelector.css';
import Arrow from "./Arrow";

type CurrencySelectorProps = {
    activeCurrency: IConvert;
    onChange?: (value: any) => void
  };

export default function CurrencySelector({activeCurrency, onChange}: CurrencySelectorProps) {
    const [isDropdownExpanded, setIsDropdownExpanded] = useState<boolean>(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setIsDropdownExpanded(prevState => !prevState);
    }

    const handleOptionClick = (currency: IConvert) => {
        onChange && onChange(currency);
        setIsDropdownExpanded(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setIsDropdownExpanded(false);
        }
    };

    useEffect(() => {
        if (isDropdownExpanded) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownExpanded]);

    return (
        <div className="select" ref={selectRef}>
            <div className="select-wrapper" onClick={handleClick}>
                <div className="select-wrapper__icon">
                    <img alt="btc" src={`https://cryptologos.cc/logos/thumbs/${activeCurrency.id}.png`}/>
                </div>
                <span>{activeCurrency.symbol}</span>
                <div className="select-wrapper__arrow"><Arrow direction="down" color="var(--surface)" width={10}/></div>
            </div>

            <div className={`select__options ${isDropdownExpanded ? 'visible' : ''}`}>
                <ul>
                    {ApprovedCurrenciesList.map((currency) => (
                        <li className={`${activeCurrency && activeCurrency.id === currency.id ? 'selected-cur' : ''}`} key={currency.id} onClick={() => handleOptionClick(currency)}>
                            
                            <div className='select__options__icon'>
                                <img src={currency.icon} alt="icon" />
                            </div>
                            <span className="select__options__name">{currency.name}</span>
                            <span className="select__options__id">{currency.symbol}</span>
                            {activeCurrency.id === currency.id  &&
                                <div className="selected-cur--active">
                                    <div className="selected-cur--dot"></div>
                                </div>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}