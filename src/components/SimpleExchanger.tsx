import Card from "@mui/material/Card";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { useState, useEffect, ChangeEvent } from 'react';

interface IConvert {
    id: string;
    name: string;
    price: number | null;
    symbol: string;
    amount: number | string;
}

const SimpleExchanger: React.FC = () => { 
    const currencyToConvertMock: IConvert = {
        id: "bitcoin",
        name: "Bitcoin",
        price: null,
        symbol: "BTC",
        amount: 0.1
    }

    const convertedCurrencyMock: IConvert = {
        id: "ethereum",
        name: "Ethereum",
        price: null,
        symbol: "ETH",
        amount: 0
    }
    const [isLoading, setIsLoading] = useState(true);
    const [currencyToConvert, setCurrencyToConvert] = useState<IConvert>(currencyToConvertMock);
    const [convertedCurrency, setConvertedCurrency] = useState<IConvert>(convertedCurrencyMock);
    const [amount, setAmount] = useState<number | string>(currencyToConvert.amount);
    const [convertedAmount, setConvertedAmount] = useState<number | null>(0);

    useEffect(() => {
        convertCurrency();
        if (!isLoading) {
            return;
        }
        if (currencyToConvert && convertedCurrency) {
            fetch(`http://localhost:8080/api/v1/crypto/list?tickers=${currencyToConvert.id}&tickers=${convertedCurrency.id}`)
                .then(response => response.json())
                .then((coinsInfo: any) => {
                    const currencyToConvertInfo = coinsInfo.find((coin: any) => coin.id === currencyToConvert.id);
                    const convertedCurrencyInfo = coinsInfo.find((coin: any) => coin.id === convertedCurrency.id);

                    if (currencyToConvertInfo) {
                        setCurrencyToConvert(prevState => ({
                            ...prevState,
                            price: currencyToConvertInfo.price
                        }));
                    }

                    if (convertedCurrencyInfo) {
                        setConvertedCurrency(prevState => ({
                            ...prevState,
                            price: convertedCurrencyInfo.price
                        }));
                    }
                    
                    setIsLoading(false);
                })
        }

    }, [currencyToConvert, convertedCurrency, amount, isLoading]);

    const convertCurrency = () => {
        const parseAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
        if (parseAmount && currencyToConvert.price && convertedCurrency.price) {
            const result = (parseAmount * currencyToConvert.price / convertedCurrency.price).toFixed(6);
            setConvertedAmount(parseFloat(result));
        }
    };

    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        
        setAmount(inputValue);
    };  
    

    return (
        <Card sx={{ maxWidth: 345 }}>
            <div>
                <TextField
                    id="standard-basic"
                    label="Amount to send"
                    value={amount}
                    onChange={handleAmountChange}
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={currencyToConvert.symbol}
                    helperText="Please select your currency"
                    variant="standard"
                >
                    <MenuItem key={currencyToConvert.id} value={currencyToConvert.symbol}>
                        {currencyToConvert.name}
                    </MenuItem>
                </TextField>
            </div>
            <div>
                <TextField
                    id="standard-error"
                    label="Amount to receive"
                    value={convertedAmount}
                    variant="standard"
                    disabled
                />
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    defaultValue={convertedCurrency.symbol}
                    helperText="Please select your currency"
                    variant="standard"
                >
                    <MenuItem key={convertedCurrency.id} value={convertedCurrency.symbol}>
                        {convertedCurrency.name}
                    </MenuItem>
                </TextField>
            </div>
        </Card>
    );
}

export default SimpleExchanger;