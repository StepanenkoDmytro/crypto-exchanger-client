import './Contacts.css';
import telegramIcon from '../../assets/telegram-footer.png';
import emailIcon from '../../assets/email-footer.png';

const Contacts: React.FC = () => { 
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
        <h1 className='container__title'>Contacts</h1>
        <div className='contacts__box'>
            <div className='contacts__desc'>
                <p>Мы всегда готовы помочь! Если у вас есть вопросы, предложения или нужна помощь, свяжитесь с нами, используя следующую информацию</p>
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
