import { useEffect, useState } from 'react';
import { ApprovedCurrenciesList } from '../../domain/models';
import './Coins.css';

const Coins: React.FC = () => { 
  const [showAll, setShowAll] = useState<boolean>(true);

  const displayedCoins = showAll ? ApprovedCurrenciesList : ApprovedCurrenciesList.slice(0, 6);

  useEffect(() => {
    updateIsMobile(); 
    // window.addEventListener('resize', updateIsMobile);

    // return () => {
    //     window.removeEventListener('resize', updateIsMobile);
    // };
  }, []);

  const handleShowMore = () => {
      setShowAll(prevShowAll => !prevShowAll);
  };

  const updateIsMobile = () => {
    if(window.innerWidth < 800) {
      setShowAll(false); 
    }
  };

  return (
    <section className='container border'>
      <h1 className='container__title'>Supported Coins</h1>
      <p className='container__desc'>We support 21 distinctive cryptocurrencies, providing you with a broad spectrum of digital asset choices. Join Cryptolly to discover and invest in your preferred coins</p>
      
      <div className='coin-grid'>
        {displayedCoins.map((coin, index) => (
          <div key={index} className="coin-card">
            <img src={coin.icon} alt={coin.name} className="coin-image" />
            <div className="coin-details">
              <p>{coin.name}</p>
            </div>
          </div>
        ))}
      </div>

      <button className='show-more-btn' onClick={handleShowMore}>
        {showAll ? 'Show less' : 'Show more'}
      </button>
    </section>
  );
}

export default Coins;
