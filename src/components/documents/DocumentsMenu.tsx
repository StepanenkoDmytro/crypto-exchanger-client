import './Documents.css';
import { Link, useLocation } from 'react-router-dom';

const DocumentMenu: React.FC = () => { 
  const location = useLocation();
  const isActive = (path: string) => {
    console.log(location.pathname)
    return location.pathname === path};
  return (
    <section className='documents-menu'>
        <nav className='documents-menu__nav'>
            <h1 className='documents-menu__title'>LEGAL DOCUMENTS</h1>
            <ul>
                <li><Link to="/documents/terms" className={`documents-menu__nav-link ${isActive('/documents/terms') ? 'documents-menu__nav-active' : ''}`}>Terms of Service</Link></li>
                <li><Link to="/documents/privacy" className={`documents-menu__nav-link ${isActive('/documents/privacy') ? 'documents-menu__nav-active' : ''}`}>Privacy Policy</Link></li>
                <li><Link to="/documents/aml-kyc" className={`documents-menu__nav-link ${isActive('/documents/aml-kyc') ? 'documents-menu__nav-active' : ''}`}>AML/KYC</Link></li>
            </ul>
        </nav>
    </section>
  );
}

export default DocumentMenu;
