import './Documents.css';
import DocumentMenu from './DocumentsMenu';
import { useTranslation } from 'react-i18next';

function Terms() {
	const { t } = useTranslation();
        return (
                <section className='documents'>
                <DocumentMenu />  
                <section className='document'>
                        <p className='document__primary-title'>{t('terms.title')}</p>
                        <p className='document__title'>{t('terms.liOne.title')}</p>
                        <p className='document__text'>{t('terms.liOne.text')}</p>

                </section>  
                </section>
        );
}

export default Terms;
