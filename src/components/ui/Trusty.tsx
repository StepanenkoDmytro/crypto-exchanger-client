import './Trusty.css';
import { useTranslation } from 'react-i18next';
import sucurityIcon from '../../assets/desc/security.svg';
import communityIcon from '../../assets/desc/community.svg';
import clarityPng from '../../assets/desc/clarity.svg';
import chartIcon from '../../assets/desc/chart.svg';

const Trusty: React.FC = () => { 
    const { t } = useTranslation();
    return (
        <section className='container border' id='trusty'>
            <h1 className='container__title'>{t('advantages.title')}</h1>
            <p className='container__desc'>{t('advantages.desc')}</p>
            <div className='card-container'>
                <div className='card-item'>
                    <div className='card-item__content'>
                        <span className='card-item__title security-color'>{t('advantages.privacy.title')}</span>
                        <h3 className='card-item__primary'>{t('advantages.privacy.primary')}</h3>
                        <p className='card-item__text security-color'>{t('advantages.privacy.desc')}</p>
                    </div>
                    <div className='card-item__icon security'>
                        <img src={sucurityIcon} alt="svg"/>
                    </div>
                </div>

                <div className='card-item'>
                    <div className='card-item__content'>
                        <span className='card-item__title community-color'>{t('advantages.support.title')}</span>
                        <h3 className='card-item__primary'>{t('advantages.support.primary')}</h3>
                        <p className='card-item__text  community-color'>{t('advantages.support.desc')}</p>
                    </div>

                    <div className='card-item__icon community'>
                        <img src={communityIcon} alt="svg"/>
                    </div>
                </div>

                
                <div className='card-item'>
                    <div className='card-item__content'>
                        <span className='card-item__title clarity-color'>{t('advantages.choice.title')}</span>
                        <h3 className='card-item__primary'>{t('advantages.choice.primary')}</h3>
                        <p className='card-item__text clarity-color'>{t('advantages.choice.desc')}</p>
                    </div>
                    <div className='card-item__icon clarity'>
                        <img src={clarityPng} alt="svg"/>
                    </div>
                </div>

                <div className='card-item'>
                    <div className='card-item__content'>
                        <span className='card-item__title chart-color'>{t('advantages.safety.title')}</span>
                        <h3 className='card-item__primary'>{t('advantages.safety.primary')}</h3>
                        <p className='card-item__text chart-color'>{t('advantages.safety.desc')}</p>
                    </div>
                    <div className='card-item__icon chart'>
                        <img src={chartIcon} alt="svg"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Trusty;