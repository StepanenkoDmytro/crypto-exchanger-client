import './Documents.css';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DocumentMenu: React.FC = () => { 
  const { t } = useTranslation();
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path};
  return (
    <section className='documents-menu'>
        <nav className='documents-menu__nav'>
            <h1 className='documents-menu__title'>{t('legalDocuments')}</h1>
            <ul>
                <li className={`documents-menu__nav-link ${isActive('/documents/terms') ? 'documents-menu__nav-active' : ''}`}><Link to="/documents/terms">{t('terms.title')}</Link></li>
                <li className={`documents-menu__nav-link ${isActive('/documents/privacy') ? 'documents-menu__nav-active' : ''}`}><Link to="/documents/privacy">{t('privacy.title')}</Link></li>
                <li className={`documents-menu__nav-link ${isActive('/documents/aml-kyc') ? 'documents-menu__nav-active' : ''}`}><Link to="/documents/aml-kyc">{t('amlKyc.title')}</Link></li>
            </ul>
        </nav>
    </section>
  );
}

export default DocumentMenu;
