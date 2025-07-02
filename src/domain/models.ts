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
    walletAddress: 'bc1qwzgvl5tfhlqzyca6f5f5mth49fxcy32z5esgla'
}

export const defaultCurrencyTo: IConvert = {
    id: "ethereum",
    name: "Ethereum",
    price: null,
    symbol: "ETH",
    amount: 0,
    icon: 'https://cryptologos.cc/logos/thumbs/ethereum.png',
    walletAddress: '0x6cBc3c9F9f7ccdD98a7DCecFE7cfCD989b0c955F'
}

export const ApprovedCurrenciesList: IConvert[] = [
    {
        id: "bitcoin",
        name: "Bitcoin",
        price: null,
        symbol: "BTC",
        amount: 0,
        icon: '',
        walletAddress: 'bc1qwzgvl5tfhlqzyca6f5f5mth49fxcy32z5esgla'
    },
    {
        id: "ethereum",
        name: "Ethereum",
        price: null,
        symbol: "ETH",
        amount: 0,
        icon: '',
        walletAddress: '0x6cBc3c9F9f7ccdD98a7DCecFE7cfCD989b0c955F'
    },
    {
        id: "binance-coin",
        name: "BNB",
        price: null,
        symbol: "BNB",
        amount: 0,
        icon: '',
        walletAddress: '0x6cBc3c9F9f7ccdD98a7DCecFE7cfCD989b0c955F'
    },
    {
        id: "xrp",
        name: "XRP",
        price: null,
        symbol: "XRP",
        amount: 0,
        icon: '',
        walletAddress: 'rGTcZXshuauqcdRBgPczQiSrdkH7bYkfb9'
    },
    {
        id: "cardano",
        name: "Cardano",
        price: null,
        symbol: "ADA",
        amount: 0,
        icon: '',
        walletAddress: 'addr1qykmk6u5nlmvfq3uhelsrxylezrg38hfcjv72d57grvktzhhucru62kyw985k5uvqz6w9p3fud94sfy8h8ttfgqt5xwskf9cf6'
    },
    {
        id: "solana",
        name: "Solana",
        price: null,
        symbol: "SOL",
        amount: 0,
        icon: '',
        walletAddress: 'BzdSACqGuR5oCs1rXi9DuoPgTZzXzXams99up3u8AuNq'
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
        walletAddress: 'TV8Cbt65MdXqhRSxWj9e4W25ZvPuZTevKH'
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
        walletAddress: 'qzv4h94q4eqcecwzj2wvrmqt8eaup462xq625c53cv'
    },
    {
        id: "ethereum-classic",
        name: "Ethereum Classic",
        price: null,
        symbol: "ETC",
        amount: 0,
        icon: '',
        walletAddress: '0x5D07f930A3D590B3238828585aEC4E004f92Fc53'
    },
    {
        id: "shiba-inu",
        name: "Shiba Inu",
        price: null,
        symbol: "SHIB",
        amount: 0,
        icon: '',
        walletAddress: '0x7564DD34EE83AD2E09edAcD60Ea98191F8fCC237'
    },
    {
        id: "dogecoin",
        name: "Dogecoin",
        price: null,
        symbol: "DOGE",
        amount: 0,
        icon: '',
        walletAddress: 'DGG3x4AvyNCAhLiiTW3kQfSYZzG7k2dfJd'
    },
    {
        id: "polkadot",
        name: "Polkadot",
        price: null,
        symbol: "DOT",
        amount: 0,
        icon: '',
        walletAddress: '13y6zoeU1rD7rUsSZjKzLyx38L94Qv42JrjFm92grWAqeYRH'
    },
    {
        id: "litecoin",
        name: "Litecoin",
        price: null,
        symbol: "LTC",
        amount: 0,
        icon: '',
        walletAddress: 'ltc1qr4muhtex253lppdr087fnlylrteehsfty5d0kh'
    },
    {
        id: "cosmos",
        name: "Cosmos",
        price: null,
        symbol: "ATOM",
        amount: 0,
        icon: '',
        walletAddress: 'cosmos10acrfr80ek7yjyjwpdcpkurh7zneshechp8hu9'
    },
    {
        id: "avalanche",
        name: "Avalanche",
        price: null,
        symbol: "AVAX",
        amount: 0,
        icon: '',
        walletAddress: '0x6cBc3c9F9f7ccdD98a7DCecFE7cfCD989b0c955F'
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
        walletAddress: 'GCBZKGBAGTLUILAVBXBPW4Q47RFHHIF6SWAMSLP2RQMHTLOSC7WHCJSR'
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
        walletAddress: '0xa2a74aecC437177316D4985CE143E608b1D03Beb'
    },
    {
        id: "tron",
        name: "TRON",
        price: null,
        symbol: "TRX",
        amount: 0,
        icon: '',
        walletAddress: 'TV8Cbt65MdXqhRSxWj9e4W25ZvPuZTevKH'
    },
    {
        id: "polygon",
        name: "Polygon",
        price: null,
        symbol: "MATIC",
        amount: 0,
        icon: '',
        walletAddress: '0x6cBc3c9F9f7ccdD98a7DCecFE7cfCD989b0c955F'
    },
    {
        id: "zcash",
        name: "Zcash",
        price: null,
        symbol: "ZEC",
        amount: 0,
        icon: '',
        walletAddress: 't1Nqu8ucL7d66sYxvrFSR8cXB4DRBK4uBEF'
    },
    {
        id: "dash",
        name: "Dash",
        price: null,
        symbol: "DASH",
        amount: 0,
        icon: '',
        walletAddress: 'XseiEY3JEW5K8WqdEnU52Tp2rZ3gZK8wpr'
    },
    {
        id: "toncoin",
        name: "TON",
        price: null,
        symbol: "toncoin",
        amount: 0,
        icon: '',
        walletAddress: 'UQCkBBSy08xCN_FCIjAtTrQBo_Xsq61g9I4-m5mjJfdeH6rQ'
    }
];

ApprovedCurrenciesList.map(coin => {
    const icon = coin.id === 'polkadot' ? `https://cryptologos.cc/logos/thumbs/${coin.id}-new.png` : `https://cryptologos.cc/logos/thumbs/${coin.id}.png`;
    coin.icon = icon;
    return coin;
});