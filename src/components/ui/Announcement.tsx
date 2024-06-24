import './Announcement.css';
import blumIcon from '../../assets/announcement/blum.png';

const Announcement: React.FC = () => { 
  
  return (
    <section className='container'>
        
        <div className='announcement-container'>
            <h1 className='container__title'>Don’t Miss Out</h1>

            <div className='announcement__box'>
                <div className='announcement__contect'>
                    <img src={blumIcon}/>
                </div>
            
                <div className='announcement__desc'>
                    <p className='announcement__desc-title'>New Coins Coming Soon to Rocky Finance!</p>
                    <p>Stay one step ahead with RockyFinance! New coins are coming soon to our platform: </p>
                    <p><span>Blum</span> - это криптовалютное торговое приложение, биржа в мессенджере Telegram. На гибридной CeDeFi модели.</p>
                </div>
            </div>
        </div>
        
    </section>
  );
}

export default Announcement;
