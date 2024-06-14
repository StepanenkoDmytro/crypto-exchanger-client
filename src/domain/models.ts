 export interface IConvert {
    id: string;
    name: string;
    price: number | null;
    symbol: string;
    amount: number | string;
    icon: string;
}

export const defaultCurrencyFrom: IConvert = {
    id: "bitcoin",
    name: "Bitcoin",
    price: null,
    symbol: "BTC",
    amount: 0,
    icon: ''
}

export const defaultCurrencyTo: IConvert = {
    id: "ethereum",
    name: "Ethereum",
    price: null,
    symbol: "ETH",
    amount: 0,
    icon: ''
}

export const ApprovedCurrenciesList: IConvert[] = [
    {
        id: "bitcoin",
        name: "Bitcoin",
        price: null,
        symbol: "BTC",
        amount: 0,
        icon: ''
    },
    {
        id: "ethereum",
        name: "Ethereum",
        price: null,
        symbol: "ETH",
        amount: 0,
        icon: ''
    },
    {
        id: "binance-coin",
        name: "BNB",
        price: null,
        symbol: "BNB",
        amount: 0,
        icon: ''
    },
    {
        id: "xrp",
        name: "XRP",
        price: null,
        symbol: "XRP",
        amount: 0,
        icon: ''
    },
    {
        id: "cardano",
        name: "Cardano",
        price: null,
        symbol: "ADA",
        amount: 0,
        icon: ''
    },
    {
        id: "solana",
        name: "Solana",
        price: null,
        symbol: "SOL",
        amount: 0,
        icon: ''
    },
    {
        id: "monero",
        name: "Monero",
        price: null,
        symbol: "XMR",
        amount: 0,
        icon: ''
    },
    {
        id: "tether",
        name: "Tether",
        price: null,
        symbol: "USDT",
        amount: 0,
        icon: ''
    },
    {
        id: "usd-coin",
        name: "USD Coin",
        price: null,
        symbol: "USDC",
        amount: 0,
        icon: ''
    },
    {
        id: "bitcoin-cash",
        name: "Bitcoin Cash",
        price: null,
        symbol: "BCH",
        amount: 0,
        icon: ''
    },
    {
        id: "ethereum-classic",
        name: "Ethereum Classic",
        price: null,
        symbol: "ETC",
        amount: 0,
        icon: ''
    },
    {
        id: "shiba-inu",
        name: "Shiba Inu",
        price: null,
        symbol: "SHIB",
        amount: 0,
        icon: ''
    },
    {
        id: "dogecoin",
        name: "Dogecoin",
        price: null,
        symbol: "DOGE",
        amount: 0,
        icon: ''
    },
    {
        id: "polkadot",
        name: "Polkadot",
        price: null,
        symbol: "DOT",
        amount: 0,
        icon: ''
    },
    {
        id: "litecoin",
        name: "Litecoin",
        price: null,
        symbol: "LTC",
        amount: 0,
        icon: ''
    },
    {
        id: "cosmos",
        name: "Cosmos",
        price: null,
        symbol: "ATOM",
        amount: 0,
        icon: ''
    },
    {
        id: "avalanche",
        name: "Avalanche",
        price: null,
        symbol: "AVAX",
        amount: 0,
        icon: ''
    },
    {
        id: "eos",
        name: "EOS",
        price: null,
        symbol: "EOS",
        amount: 0,
        icon: ''
    },
    {
        id: "stellar",
        name: "Stellar",
        price: null,
        symbol: "XLM",
        amount: 0,
        icon: ''
    },
    {
        id: "chainlink",
        name: "Chainlink",
        price: null,
        symbol: "LINK",
        amount: 0,
        icon: ''
    },
    {
        id: "vechain",
        name: "VeChain",
        price: null,
        symbol: "VET",
        amount: 0,
        icon: ''
    },
];

ApprovedCurrenciesList.map(coin => {
    const icon = coin.id === 'polkadot' ? `https://cryptologos.cc/logos/thumbs/${coin.id}-new.png` : `https://cryptologos.cc/logos/thumbs/${coin.id}.png`;
    coin.icon = icon;
    return coin;
})