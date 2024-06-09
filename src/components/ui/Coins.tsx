import { ApprovedCurrenciesList } from '../../domain/models';
import './Coins.css';

const Coins: React.FC = () => { 

    return (
        <section className='container border'>
        <h1 className='container__title'>Supported Coins</h1>
        <p className='container__desc'>We support 19 distinctive cryptocurrencies, providing you with a broad spectrum of digital asset choices. Join Cryptolly to discover and invest in your preferred coins</p>
        
        <div className='coin-grid'>
        {/* {ApprovedCurrenciesList} */}
        {ApprovedCurrenciesList.map((coin, index) => (
        <div key={index} className="coin-card">
          <img src={`https://cryptologos.cc/logos/thumbs/${coin.id}.png`} alt={coin.name} className="coin-image" />
          <div className="coin-details">
            <p>{coin.name}</p>
            {/* <p>{coin.symbol}</p> */}
          </div>
        </div>
      ))}
        </div>
        </section>
    );
}

export default Coins;
