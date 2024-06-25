import './Documents.css';
import DocumentMenu from './DocumentsMenu';
import { useTranslation } from 'react-i18next';

function Privacy() {
	const { t } = useTranslation();
    return (
        <section className='documents'>
            <DocumentMenu />  
            <section className='document'>
                <p className='document__primary-title'>{t('privacy.title')}</p>
                <p className='document__title'>{t('privacy.liOne.title')}</p>
                <p className='document__text'>{t('privacy.liOne.text')}</p>

                <p className='document__title'>{t('privacy.liTwo.title')}</p>
                <p className='document__text'>{t('privacy.liTwo.text')}</p>
            </section>  
        </section>
    );
    }
    
export default Privacy;
    