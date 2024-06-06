import './HowItWorks.css';
import sucurityIcon from '../../assets/desc/security.svg';
import communityIcon from '../../assets/desc/community.svg';
import clarityPng from '../../assets/desc/clarity.svg';
import chartIcon from '../../assets/desc/chart.svg';
import successIcon from '../../assets/circle-success.svg';

const HowItWorks: React.FC = () => { 
    return (
        <div className='container border'>
            <h1 className='container__title'>We Are The Most Trusted Cryptocurrency Platform.</h1>
            <p className='container__desc'>We believe Cryptolly is here to stay — and that a future worth building is one which opens its doors and invites everyone in.</p>
            <div className='card-container'>
                <div className='card-item'>
                    <div className='card-item__content'>
                        <span className='card-item__title security-color'>Privacy</span>
                        <h3 className='card-item__primary'>Sign-up is not required</h3>
                        <p className='card-item__text security-color'>SimpleSwap provides cryptocurrency exchange without registration.</p>
                    </div>
                    <div className='card-item__icon security'>
                        <img src={sucurityIcon} alt="svg"/>
                    </div>
                </div>

                <div className='card-item'>
                    <div className='card-item__content'>
                        <span className='card-item__title community-color'>Privacy</span>
                        <h3 className='card-item__primary'>Sign-up is not required</h3>
                        <p className='card-item__text  community-color'>SimpleSwap provides cryptocurrency exchange without registration.</p>
                    </div>

                    <div className='card-item__icon community'>
                        <img src={communityIcon} alt="svg"/>
                    </div>
                </div>

                
                <div className='card-item'>
                    <div className='card-item__content'>
                        <span className='card-item__title clarity-color'>Privacy</span>
                        <h3 className='card-item__primary'>Sign-up is not required</h3>
                        <p className='card-item__text clarity-color'>SimpleSwap provides cryptocurrency exchange without registration.</p>
                    </div>
                    <div className='card-item__icon clarity'>
                        <img src={clarityPng} alt="svg"/>
                    </div>
                </div>

                <div className='card-item'>
                    <div className='card-item__content'>
                        <span className='card-item__title chart-color'>Privacy</span>
                        <h3 className='card-item__primary'>Sign-up is not required</h3>
                        <p className='card-item__text chart-color'>SimpleSwap provides cryptocurrency exchange without registration.</p>
                    </div>
                    <div className='card-item__icon chart'>
                        <img src={chartIcon} alt="svg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;