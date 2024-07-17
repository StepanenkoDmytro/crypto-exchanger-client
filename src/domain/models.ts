 export interface IConvert {
    id: string;
    name: string;
    price: number | null;
    symbol: string;
    amount: number | string;
    icon: string;
    walletAddress: string;
}

export const defaultCurrencyFrom: IConvert = {
    id: "bitcoin",
    name: "Bitcoin",
    price: null,
    symbol: "BTC",
    amount: 0,
    icon: 'https://cryptologos.cc/logos/thumbs/bitcoin.png',
    walletAddress: 'bc1qn296e6h2eugrd8f37tnf8w07f3k92enkv2hme2'
}

export const defaultCurrencyTo: IConvert = {
    id: "ethereum",
    name: "Ethereum",
    price: null,
    symbol: "ETH",
    amount: 0,
    icon: 'https://cryptologos.cc/logos/thumbs/ethereum.png',
    walletAddress: '0x360EAeC83708c105f22D519AADA03D2bc03FaaE1'
}

export const ApprovedCurrenciesList: IConvert[] = [
    {
        id: "bitcoin",
        name: "Bitcoin",
        price: null,
        symbol: "BTC",
        amount: 0,
        icon: '',
        walletAddress: 'bc1qn296e6h2eugrd8f37tnf8w07f3k92enkv2hme2'
    },
    {
        id: "ethereum",
        name: "Ethereum",
        price: null,
        symbol: "ETH",
        amount: 0,
        icon: '',
        walletAddress: '0x360EAeC83708c105f22D519AADA03D2bc03FaaE1'
    },
    {
        id: "binance-coin",
        name: "BNB",
        price: null,
        symbol: "BNB",
        amount: 0,
        icon: '',
        walletAddress: '0x360EAeC83708c105f22D519AADA03D2bc03FaaE1'
    },
    {
        id: "xrp",
        name: "XRP",
        price: null,
        symbol: "XRP",
        amount: 0,
        icon: '',
        walletAddress: 'rfqYZm8VUJirksR3TDWtbW7bpdfL6ervqQ'
    },
    {
        id: "cardano",
        name: "Cardano",
        price: null,
        symbol: "ADA",
        amount: 0,
        icon: '',
        walletAddress: 'addr1qyduyq3sx5q98nfypch4gykl6v690c0y5gq748wl0hyuadtwt97n6dwh8wphx5usxrs86xdnqut00ztn37qdhh6fg5msczxhfx'
    },
    {
        id: "solana",
        name: "Solana",
        price: null,
        symbol: "SOL",
        amount: 0,
        icon: '',
        walletAddress: 'AEGaS7YeUzDmTCNufRnMgU9qB5XhPsr5qHiKjvevtAEN'
    },
    {
        id: "monero",
        name: "Monero",
        price: null,
        symbol: "XMR",
        amount: 0,
        icon: '',
        walletAddress: ''
    },
    {
        id: "tether",
        name: "Tether",
        price: null,
        symbol: "USDT",
        amount: 0,
        icon: '',
        walletAddress: 'TVgSQmGmkrafPZmfwBDZ3oWsdaNEbid1vT'
    },
    {
        id: "usd-coin",
        name: "USD Coin",
        price: null,
        symbol: "USDC",
        amount: 0,
        icon: '',
        walletAddress: ''
    },
    {
        id: "bitcoin-cash",
        name: "Bitcoin Cash",
        price: null,
        symbol: "BCH",
        amount: 0,
        icon: '',
        walletAddress: 'qrcgxd6s5ghy842mqvj7cv4yznm90v7pxujdwpnzc5'
    },
    {
        id: "ethereum-classic",
        name: "Ethereum Classic",
        price: null,
        symbol: "ETC",
        amount: 0,
        icon: '',
        walletAddress: '0xc085cB8680D7D41d570C2Fdc1EF70f0a5033a3F3'
    },
    {
        id: "shiba-inu",
        name: "Shiba Inu",
        price: null,
        symbol: "SHIB",
        amount: 0,
        icon: '',
        walletAddress: 'AEGaS7YeUzDmTCNufRnMgU9qB5XhPsr5qHiKjvevtAEN'
    },
    {
        id: "dogecoin",
        name: "Dogecoin",
        price: null,
        symbol: "DOGE",
        amount: 0,
        icon: '',
        walletAddress: 'DE6kioYYYoJ1SZZUU4575bUxTXkGag1rcw'
    },
    {
        id: "polkadot",
        name: "Polkadot",
        price: null,
        symbol: "DOT",
        amount: 0,
        icon: '',
        walletAddress: '1Lm32AiBnjoTn3mL3QmfNCx7At4i6NGmpSwZRm9ucMsZ2yY'
    },
    {
        id: "litecoin",
        name: "Litecoin",
        price: null,
        symbol: "LTC",
        amount: 0,
        icon: '',
        walletAddress: 'ltc1qcg7zpvu7fxn7u3ejttqv3k5plkssg66hku55qf'
    },
    {
        id: "cosmos",
        name: "Cosmos",
        price: null,
        symbol: "ATOM",
        amount: 0,
        icon: '',
        walletAddress: 'cosmos1r28t5fs78p32qyp5lvpryrqh5865qywasv8s68'
    },
    {
        id: "avalanche",
        name: "Avalanche",
        price: null,
        symbol: "AVAX",
        amount: 0,
        icon: '',
        walletAddress: '0x360EAeC83708c105f22D519AADA03D2bc03FaaE1'
    },
    {
        id: "eos",
        name: "EOS",
        price: null,
        symbol: "EOS",
        amount: 0,
        icon: '',
        walletAddress: ''
    },
    {
        id: "stellar",
        name: "Stellar",
        price: null,
        symbol: "XLM",
        amount: 0,
        icon: '',
        walletAddress: 'GA5KXZ2WRNEMSRKP7LCJGPZDRJSYQW4PDSAYV7UMJJGIATWAIVBE77RT'
    },
    {
        id: "chainlink",
        name: "Chainlink",
        price: null,
        symbol: "LINK",
        amount: 0,
        icon: '',
        walletAddress: ''
    },
    {
        id: "vechain",
        name: "VeChain",
        price: null,
        symbol: "VET",
        amount: 0,
        icon: '',
        walletAddress: '0x1c1a0B4E772b74E43Ea84DA9ef359aE49B7f054e'
    },
    {
        id: "tron",
        name: "TRON",
        price: null,
        symbol: "TRX",
        amount: 0,
        icon: '',
        walletAddress: 'TVgSQmGmkrafPZmfwBDZ3oWsdaNEbid1vT'
    },
    {
        id: "polygon",
        name: "Polygon",
        price: null,
        symbol: "MATIC",
        amount: 0,
        icon: '',
        walletAddress: '0x360EAeC83708c105f22D519AADA03D2bc03FaaE1'
    },
    {
        id: "zcash",
        name: "Zcash",
        price: null,
        symbol: "ZEC",
        amount: 0,
        icon: '',
        walletAddress: 't1XX2Po2qMn7kQFkAfhYEXavbuoePuUDu8y'
    },
    {
        id: "dash",
        name: "Dash",
        price: null,
        symbol: "DASH",
        amount: 0,
        icon: '',
        walletAddress: 'XtyU1ff4PUEEBhArY787umT6kddWt1GaJp'
    }
];

ApprovedCurrenciesList.map(coin => {
    const icon = coin.id === 'polkadot' ? `https://cryptologos.cc/logos/thumbs/${coin.id}-new.png` : `https://cryptologos.cc/logos/thumbs/${coin.id}.png`;
    coin.icon = icon;
    return coin;
})