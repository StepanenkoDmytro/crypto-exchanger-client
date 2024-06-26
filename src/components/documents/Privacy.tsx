import './Documents.css';
import DocumentMenu from './DocumentsMenu';
import { useTranslation } from 'react-i18next';

function Privacy() {
	const { t } = useTranslation();
    const createParagraphs = (text: string) => {
        return text.split('\n').map((item, index) => (
            <p key={index} className="document__text">{item}</p>
        ));
    };
    return (
        <section className='documents container'>
            <DocumentMenu />  
            <section className='document'>
                <p className='document__primary-title'>{t('privacy.title')}</p>
                <p className='document__title'>{t('privacy.liOne.title')}</p>
                {createParagraphs(t('privacy.liOne.text'))}

                <p className='document__title'>{t('privacy.liTwo.title')}</p>
                {createParagraphs(t('privacy.liTwo.text'))}
            </section>  
        </section>
    );
    }
    
export default Privacy;
    