class CoinMarketService {
    API_BASE_URL = 'https://api.coincap.io/v2/assets';

    async getCoinPrice(coinId: string) {
        const apiEndpoint = `/${coinId}`;
        const url = this.API_BASE_URL + apiEndpoint;
        
        const response: any = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch crypto prices');
        }
        return response.json();
    }
}

export default new CoinMarketService();