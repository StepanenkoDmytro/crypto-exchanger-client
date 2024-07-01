import './Contacts.css';
import telegramIcon from '../../assets/telegram-footer.png';
import emailIcon from '../../assets/email-footer.png';
import { useTranslation } from 'react-i18next';

const Contacts: React.FC = () => { 
    const { t } = useTranslation();
    const telegram: string = '@usdt_trc_20';
    const email: string = 'supportrockychange@gmail.com';

    const copyTelegtamToClipboard = () => {
        navigator.clipboard.writeText(telegram);
    };

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(email);
    };
  
  return (
    <section className='container border' id='contacts'>
        <h1 className='container__title'>{t('contacts.title')}</h1>
        <div className='contacts__box'>
            <div className='contacts__desc'>
                <p>{t('contacts.desc')}</p>
            </div>
            <div className='contacts__container'>
                <div>
                    <div className='contacts__contact-item' onClick={copyTelegtamToClipboard}>
                        <img src={telegramIcon}></img>
                        <p>{telegram}</p>
                    </div>
                    <div className='contacts__contact-item' onClick={copyEmailToClipboard}>
                        <img src={emailIcon}></img>
                        <p>{email}</p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  );
}

export default Contacts;
