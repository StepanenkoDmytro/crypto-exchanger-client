import './Documents.css';
import DocumentMenu from './DocumentsMenu';
import { useTranslation } from 'react-i18next';

function AmlKyc() {
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
                <p className='document__primary-title'>{t('amlKyc.title')}</p>
                <p className='document__title'>{t('amlKyc.desc.title')}</p>
                {createParagraphs(t('amlKyc.desc.desc'))}

                <p className='document__title'>{t('amlKyc.liOne.title')}</p>
                {createParagraphs(t('amlKyc.liOne.text'))}
                
                <p className='document__title'>{t('amlKyc.liTwo.title')}</p>
                {createParagraphs(t('amlKyc.liTwo.text'))}

                <p className='document__title'>{t('amlKyc.liThree.title')}</p>
                {createParagraphs(t('amlKyc.liThree.text'))}

                
                <p className='document__title'>{t('amlKyc.liFour.title')}</p>
                {createParagraphs(t('amlKyc.liFour.text'))}

                <p className='document__title'>{t('amlKyc.liFive.title')}</p>
                {createParagraphs(t('amlKyc.liFive.text'))}

                <p className='document__title'>{t('amlKyc.liSix.title')}</p>
                {createParagraphs(t('amlKyc.liSix.text'))}

                <p className='document__title'>{t('amlKyc.liSeven.title')}</p>
                {createParagraphs(t('amlKyc.liSeven.text'))}

            </section>  
        </section>   
    );
    }
    
export default AmlKyc;
    