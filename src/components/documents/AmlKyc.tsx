import './Documents.css';
import DocumentMenu from './DocumentsMenu';
import { useTranslation } from 'react-i18next';

function AmlKyc() {
	const { t } = useTranslation();
    return (
        <section className='documents'>
            <DocumentMenu />  
            <section className='document'>
                <p className='document__primary-title'>{t('amlKyc.title')}</p>
                <p className='document__title'>{t('amlKyc.desc.title')}</p>
                <p className='document__text'>{t('amlKyc.desc.desc')}</p>

                <p className='document__title'>{t('amlKyc.liOne.title')}</p>
                <p className='document__text'>{t('amlKyc.liOne.text')}</p>
                
                <p className='document__title'>{t('amlKyc.liTwo.title')}</p>
                <p className='document__text'>{t('amlKyc.liTwo.text')}</p>

                <p className='document__title'>{t('amlKyc.liThree.title')}</p>
                <p className='document__text'>{t('amlKyc.liThree.text')}</p>

                <p className='document__title'>{t('amlKyc.liFour.text')}</p>
                <p className='document__text'>{t('amlKyc.liFour.text')}</p>

                <p className='document__title'>{t('amlKyc.liFive.title')}</p>
                <p className='document__text'>{t('amlKyc.liFive.text')}</p>

                <p className='document__title'>{t('amlKyc.liSix.text')}</p>
                <p className='document__text'>{t('amlKyc.liSix.text')}</p>

                <p className='document__title'>{t('amlKyc.liSeven.title')}</p>
                <p className='document__text'>{t('amlKyc.liSeven.text')}</p>

            </section>  
        </section>   
    );
    }
    
export default AmlKyc;
    