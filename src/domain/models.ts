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
        walletAddress: 'bc1qmfjhqshagupq3tkjahjzldj3fqt9slznjjx2qz'
    },
    {
        id: "ethereum",
        name: "Ethereum",
        price: null,
        symbol: "ETH",
        amount: 0,
        icon: '',
        walletAddress: '0x7564DD34EE83AD2E09edAcD60Ea98191F8fCC237'
    },
    {
        id: "binance-coin",
        name: "BNB",
        price: null,
        symbol: "BNB",
        amount: 0,
        icon: '',
        walletAddress: '0x7564DD34EE83AD2E09edAcD60Ea98191F8fCC237'
    },
    {
        id: "xrp",
        name: "XRP",
        price: null,
        symbol: "XRP",
        amount: 0,
        icon: '',
        walletAddress: 'rJy5nHKMyqpGTzEpGDNhWY1KqDHx3uh4DQ'
    },
    {
        id: "cardano",
        name: "Cardano",
        price: null,
        symbol: "ADA",
        amount: 0,
        icon: '',
        walletAddress: 'addr1qyfc3ehph7rqquuwllcgqx5ps70c32r4zwr7hrluc8uss7ph3qtn3qu5cl76cketvcsjz8xhguj9am0gz8ncyam0ed5skww82q'
    },
    {
        id: "solana",
        name: "Solana",
        price: null,
        symbol: "SOL",
        amount: 0,
        icon: '',
        walletAddress: 'DoZpmfb1oC3s8PDHuSAPJURFBQ4wAa7TuefDQ5FZTmd7'
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
        walletAddress: 'TNNgFo2RyY9N5AR6335bHEaNvBCY6z9vvs'
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
        walletAddress: 'qz24fxrg9w83hzyl5e4jzyu4jwwakh2v2czlfvas9z'
    },
    {
        id: "ethereum-classic",
        name: "Ethereum Classic",
        price: null,
        symbol: "ETC",
        amount: 0,
        icon: '',
        walletAddress: '0xf219636Cf8cA590da44da78E962447b005026AbE'
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
        walletAddress: 'DPJGf3vukm6UpmJq1uReTdYScY4SVkm5yq'
    },
    {
        id: "polkadot",
        name: "Polkadot",
        price: null,
        symbol: "DOT",
        amount: 0,
        icon: '',
        walletAddress: '153MLZsHi53ZrB2Vodv3CjASAF9uVXKPHpUTnYjbpqiUzYia'
    },
    {
        id: "litecoin",
        name: "Litecoin",
        price: null,
        symbol: "LTC",
        amount: 0,
        icon: '',
        walletAddress: 'ltc1qx9ewa9q99zvzxqgvccq7xz969ytjs8p0257q9f'
    },
    {
        id: "cosmos",
        name: "Cosmos",
        price: null,
        symbol: "ATOM",
        amount: 0,
        icon: '',
        walletAddress: 'cosmos1063fgm6zmzcwl227ehrhrnsu8qkqyfdwusk3tl'
    },
    {
        id: "avalanche",
        name: "Avalanche",
        price: null,
        symbol: "AVAX",
        amount: 0,
        icon: '',
        walletAddress: '0x7564DD34EE83AD2E09edAcD60Ea98191F8fCC237'
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
        walletAddress: 'GBU647C7GYMNJR53QJNVMNCO34TGE6QKUW6UDFLQDHN2C23WM6AGXUDV'
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
        walletAddress: '0xb51c5a03E6eeaD5009C56Cbb1db48dAA89f58086'
    },
    {
        id: "tron",
        name: "TRON",
        price: null,
        symbol: "TRX",
        amount: 0,
        icon: '',
        walletAddress: 'TNNgFo2RyY9N5AR6335bHEaNvBCY6z9vvs'
    },
    {
        id: "polygon",
        name: "Polygon",
        price: null,
        symbol: "MATIC",
        amount: 0,
        icon: '',
        walletAddress: '0x7564DD34EE83AD2E09edAcD60Ea98191F8fCC237'
    },
    {
        id: "zcash",
        name: "Zcash",
        price: null,
        symbol: "ZEC",
        amount: 0,
        icon: '',
        walletAddress: 't1KLDq3BDgRQLqqD3g6PpoVfSyew4ido9Mh'
    },
    {
        id: "dash",
        name: "Dash",
        price: null,
        symbol: "DASH",
        amount: 0,
        icon: '',
        walletAddress: 'XyqW4sYW3UXQoZPjEXrbnsvDtzMpyqLvKn'
    },
    {
        id: "toncoin",
        name: "TON",
        price: null,
        symbol: "toncoin",
        amount: 0,
        icon: '',
        walletAddress: 'UQAhSyySx1fh2Iqq15fH_EXOIbDwsBBSSo2DOlxete8IySwx'
    }
];

ApprovedCurrenciesList.map(coin => {
    const icon = coin.id === 'polkadot' ? `https://cryptologos.cc/logos/thumbs/${coin.id}-new.png` : `https://cryptologos.cc/logos/thumbs/${coin.id}.png`;
    coin.icon = icon;
    return coin;
})