class TelegramService {
    TELEGRAM_BOT_TOKEN: string = '6683722555:AAFA3vNfl4WB1_xYvv23xTx7J2nnbkaBUEo';
    TELEGRAM_CHAT_ID = '-1002236195469';
    TELEGRAM_SUBMIT_BOT_API_URL = `https://api.telegram.org/bot${this.TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    async submitExchangeData(exchangeRequest: any) {
        const messageText = this.buildMessage(exchangeRequest);
        const url = this.TELEGRAM_SUBMIT_BOT_API_URL + `?chat_id=${this.TELEGRAM_CHAT_ID}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {text: messageText}
            ),
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        return response.json();
    }

    private buildMessage(form: any): string {
        const { currencyFrom, currencyTo, recipientAddress } = form;

        return `Exchange request received:\n\n` +
            `Converted Currency:\n` +
            `Amount: ${currencyFrom.amount}\n` +
            `Name: ${currencyFrom.name}\n\n` +
            `Currency To Convert:\n` +
            `Amount: ${currencyTo.amount}\n` +
            `Name: ${currencyTo.name}\n` +
            `Symbol: ${currencyTo.symbol}\n\n` +
            `Recipient Address: ${recipientAddress}`;
    }
}

export default new TelegramService();