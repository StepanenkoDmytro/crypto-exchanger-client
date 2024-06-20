import { useEffect, useState } from 'react';
import { ApprovedCurrenciesList } from '../../domain/models';
import { useTranslation } from 'react-i18next';
import './Coins.css';

const Coins: React.FC = () => { 
  const { t } = useTranslation();
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

  const handleRedirect = (coinId: string) => {
    return () => {
      window.location.href = `https://coinmarketcap.com/currencies/${coinId}`;
    };
  }

  const updateIsMobile = () => {
    if(window.innerWidth < 800) {
      setShowAll(false); 
    }
  };

  return (
    <section className='container border' id='coins'>
      <h1 className='container__title'>{t('supportedCoins.title')}</h1>
      <p className='container__desc'>{t('supportedCoins.desc')}</p>
      
      <div className='coin-grid'>
        {displayedCoins.map((coin, index) => (
          <div key={index} className="coin-card" onClick={handleRedirect(coin.id)}>
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
