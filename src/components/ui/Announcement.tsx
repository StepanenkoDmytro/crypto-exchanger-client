import './Announcement.css';
import blumIcon from '../../assets/announcement/blum.png';
import { useTranslation } from 'react-i18next';

const Announcement: React.FC = () => { 
    const { t } = useTranslation();
  return (
    <section className='container'>
        
        <div className='announcement-container'>
            <h1 className='container__title'>{t('announcement.title')}</h1>

            <div className='announcement__box'>
                <div className='announcement__contect'>
                    <img src={blumIcon}/>
                </div>
            
                <div className='announcement__desc'>
                    <p className='announcement__desc-title'>{t('announcement.secondTitle')}</p>
                    <p>{t('announcement.descFirst')}</p>
                    <p><span>{t('announcement.coin')}</span> {t('announcement.descSecond')}</p>
                </div>
            </div>
        </div>
        
    </section>
  );
}

export default Announcement;
