import './Documents.css';
import DocumentMenu from './DocumentsMenu';
import { useTranslation } from 'react-i18next';

function Terms() {
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
                                <p className='document__primary-title'>{t('terms.title')}</p>
                                <p className='document__title'>{t('terms.liOne.title')}</p>
                                
                                {createParagraphs(t('terms.liOne.textBeforePoint'))}
                                <ul className='document__ul-dots'>
                                        <li>{t('terms.liOne.textPointOne')}</li>
                                        <li>{t('terms.liOne.textPointTwo')}</li>
                                </ul>
                                {createParagraphs(t('terms.liOne.textAfterPoint'))}

                                <p className='document__title'>{t('terms.liTwo.title')}</p>
                                {createParagraphs(t('terms.liTwo.textBeforePoint'))}
                                <ul className='document__ul-dots'>
                                        <li>{t('terms.liTwo.textPointOne')}</li>
                                        <li>{t('terms.liTwo.textPointTwo')}</li>
                                        <li>{t('terms.liTwo.textPointThree')}</li>
                                        <li>{t('terms.liTwo.textPointFour')}</li>
                                        <li>{t('terms.liTwo.textPointFive')}</li>
                                </ul>
                                {createParagraphs(t('terms.liTwo.textAfterPoint'))}

                                <p className='document__title'>{t('terms.liThree.title')}</p>
                                {createParagraphs(t('terms.liThree.textBeforePoint'))}
                                <ul>
                                        <li>{t('terms.liThree.textPointOne')}</li>
                                        <li>{t('terms.liThree.textPointTwo')}</li>
                                        <li>{t('terms.liThree.textPointThree')}</li>
                                        <li>{t('terms.liThree.textPointFour')}</li>
                                        <li>{t('terms.liThree.textPointFive')}</li>
                                </ul>
                                {createParagraphs(t('terms.liThree.textAfterPoint'))}

                                <p className='document__title'>{t('terms.liFour.title')}</p>
                                {createParagraphs(t('terms.liFour.textBeforePoint'))}
                                <ul className='document__ul-dots'>
                                        <li>{t('terms.liFour.textPointOne')}</li>
                                        <li>{t('terms.liFour.textPointTwo')}</li>
                                        <li>{t('terms.liFour.textPointThree')}</li>
                                        <li>{t('terms.liFour.textPointFour')}</li>
                                        <li>{t('terms.liFour.textPointFive')}</li>
                                        <li>{t('terms.liFour.textPointSix')}</li>
                                        <li>{t('terms.liFour.textPointSeven')}</li>
                                        <li>{t('terms.liFour.textPointEight')}</li>
                                        <li>{t('terms.liFour.textPointNine')}</li>
                                        <li>{t('terms.liFour.textPointTen')}</li>
                                </ul>
                                {createParagraphs(t('terms.liFour.textAfterPoint'))}

                                <p className='document__title'>{t('terms.liFive.title')}</p>
                                {createParagraphs(t('terms.liFive.text'))}

                                <p className='document__title'>{t('terms.liSix.title')}</p>
                                {createParagraphs(t('terms.liSix.text'))}

                                <p className='document__title'>{t('terms.liSeven.title')}</p>
                                {createParagraphs(t('terms.liSeven.textBeforeFirstPoint'))}
                                <ul className='document__ul-numbers'>
                                        <li>{t('terms.liSeven.textFirstPointOne')}</li>
                                        <li>{t('terms.liSeven.textFirstPointTwo')}</li>
                                </ul>
                                {createParagraphs(t('terms.liSeven.textBeforeSecondPoint'))}
                                <ul className='document__ul-numbers'>
                                        <li>{t('terms.liSeven.textSecondPointOne')}</li>
                                        <li>{t('terms.liSeven.textSecondPointTwo')}</li>
                                        <li>{t('terms.liSeven.textSecondPointThree')}</li>
                                        <li>{t('terms.liSeven.textSecondPointFour')}</li>
                                </ul>
                                {createParagraphs(t('terms.liSeven.textBeforeThirdPoint'))}
                                <ul className='document__ul-dots'>
                                        <li>{t('terms.liSeven.textThirdPointOne')}</li>
                                        <li>{t('terms.liSeven.textThirdPointTwo')}</li>
                                        <li>{t('terms.liSeven.textThirdPointThree')}</li>
                                </ul>
                                {createParagraphs(t('terms.liSeven.textAfterPoints'))}

                                <p className='document__title'>{t('terms.liEight.title')}</p>
                                {createParagraphs(t('terms.liEight.text'))}

                                <p className='document__title'>{t('terms.liNine.title')}</p>
                                {createParagraphs(t('terms.liNine.text'))}

                                <p className='document__title'>{t('terms.liTen.title')}</p>
                                {createParagraphs(t('terms.liTen.textBeforeFirstPoint'))}
                                <ul className='document__ul-dots'>
                                        <li>{t('terms.liTen.textFirstPointOne')}</li>
                                        <li>{t('terms.liTen.textFirstPointTwo')}</li>
                                </ul>
                                {createParagraphs(t('terms.liTen.textBeforeSecondPoint'))}
                                <ul className='document__ul-dots'>
                                        <li>{t('terms.liTen.textSecondPointOne')}</li>
                                        <li>{t('terms.liTen.textSecondPointTwo')}</li>
                                        <li>{t('terms.liTen.textSecondPointThree')}</li>
                                        <li>{t('terms.liTen.textSecondPointFour')}</li>
                                </ul>
                                {createParagraphs(t('terms.liTen.textBeforeThirdPoint'))}
                                <ul className='document__ul-dots'>
                                        <li>{t('terms.liTen.textThirdPointOne')}</li>
                                        <li>{t('terms.liTen.textThirdPointTwo')}</li>
                                </ul>
                                {createParagraphs(t('terms.liTen.textAfterPoints'))}

                                <p className='document__title'>{t('terms.liEleven.title')}</p>
                                {createParagraphs(t('terms.liEleven.text'))}

                                <p className='document__title'>{t('terms.liTwelve.title')}</p>
                                {createParagraphs(t('terms.liTwelve.text'))}

                                <p className='document__title'>{t('terms.liThirteen.title')}</p>
                                {createParagraphs(t('terms.liThirteen.text'))}

                                <p className='document__title'>{t('terms.liFourteen.title')}</p>
                                {createParagraphs(t('terms.liFourteen.text'))}

                                <p className='document__title'>{t('terms.liFifteen.title')}</p>
                                {createParagraphs(t('terms.liFifteen.text'))}

                                <p className='document__title'>{t('terms.liSixteen.title')}</p>
                                {createParagraphs(t('terms.liSixteen.text'))}
                        </section>  
                </section>
        );
}

export default Terms;
