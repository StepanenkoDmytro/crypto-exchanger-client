type CoinRegexMap = {
    [coin: string]: RegExp[];
};

class CryptoAddressService {
    private isWallet = false;
    private coinRegexMap: CoinRegexMap = {
        'bitcoin': [
            /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/, 
            /^bc1[q|p][a-z0-9]{38}$/, 
            /^bc1[q|p][a-z0-9]{58}$/, 
        ],
        'ethereum': [
            /^0x[a-fA-F0-9]{40}$/,
        ],
        'litecoin': [
            /^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$/,
        ],
        // Додайте інші монети за необхідності
    };

    isCorrectWallet(): boolean {
        return this.isWallet;
    }

    setWallet(isWallet: boolean): void {
        this.isWallet = isWallet;
    }

    isValidAddress(coin: string, address: string): boolean {
        const regexes = this.coinRegexMap[coin];
        if (!regexes) {
            throw new Error(`Unknown coin: ${coin}`);
        }
        const result = regexes.some((regex) => regex.test(address));
        this.setWallet(result);
        return result;
    }
}

export default new CryptoAddressService();