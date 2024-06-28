class TelegramService {
    DOMAIN = 'http://45.77.60.247';
	PORT = '8080'
	API_BASE_URL = `${this.DOMAIN}:${this.PORT}`;

    async submitExchangeData(form: any) {
		const apiEndpoint = '/api/v1/exchange/submit';
		const url = this.API_BASE_URL + apiEndpoint;
		return fetch(url, {
			method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
			body: JSON.stringify(form),
		}).then( response => response.json() );
	}

    async getCoinPrice(coinId: string) {
        const apiEndpoint = `/api/v1/crypto/by-id?ticker=${coinId}`;
        const url = this.API_BASE_URL + apiEndpoint;
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch crypto prices');
        }
        return response.json();
    }
}

export default new TelegramService();