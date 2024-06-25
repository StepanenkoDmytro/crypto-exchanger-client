import './Documents.css';
import { Link } from 'react-router-dom';

const DocumentMenu: React.FC = () => { 
  return (
    <section className='documents-menu'>
        <nav className='documents-menu__nav'>
            <h1>LEGAL DOCUMENTS</h1>
            <ul>
                <li><Link to="/documents/terms">Terms of Service</Link></li>
                <li><Link to="/documents/privacy">Privacy Policy</Link></li>
                <li><Link to="/documents/aml-kyc">AML/KYC</Link></li>
            </ul>
        </nav>
    </section>
  );
}

export default DocumentMenu;
