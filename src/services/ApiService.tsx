class ApiService {
    DOMAIN = 'http://localhost';
	PORT = '8080'
	API_BASE_URL = `${this.DOMAIN}:${this.PORT}`;

    async successExchange(data: any) {
		const apiEndpoint = `/api/v1/exchange/submit`;
		const url = this.API_BASE_URL + apiEndpoint;

        console.log(data);
        
        // const formData = new FormData();
		// Object.entries(data).forEach(([key, value]) => {
		// 	formData.append(key, value);
		// })

		return fetch(url, {
			method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
			body: JSON.stringify(data),
		}).then( response => response.json() );
	}
}

export default ApiService;