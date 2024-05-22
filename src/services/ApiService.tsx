class ApiService {
    DOMAIN = 'http://localhost';
	PORT = '8080'
	API_BASE_URL = `${this.DOMAIN}:${this.PORT}`;

    async successExchange(data: any) {
		const apiEndpoint = '/api/v1/exchange/submit';
		const url = this.API_BASE_URL + apiEndpoint;

		return fetch(url, {
			method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
			body: JSON.stringify(data),
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

export default ApiService;