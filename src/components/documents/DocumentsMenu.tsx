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
                <li className={`documents-menu__nav-link ${isActive('/documents/terms') ? 'documents-menu__nav-active' : ''}`}><Link to="/documents/terms">Terms of Service</Link></li>
                <li className={`documents-menu__nav-link ${isActive('/documents/privacy') ? 'documents-menu__nav-active' : ''}`}><Link to="/documents/privacy">Privacy Policy</Link></li>
                <li className={`documents-menu__nav-link ${isActive('/documents/aml-kyc') ? 'documents-menu__nav-active' : ''}`}><Link to="/documents/aml-kyc">AML/KYC</Link></li>
            </ul>
        </nav>
    </section>
  );
}

export default DocumentMenu;
