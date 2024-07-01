import coinMarketService from './CoinMarketService';
import telegramService from './TelegramService';

class ApiService {

    async submitExchangeData(form: any) {
        return telegramService.submitExchangeData(form);
	}

    async getCoinPrice(coinId: string) {
        return coinMarketService.getCoinPrice(coinId);
    }
}

export default new ApiService();