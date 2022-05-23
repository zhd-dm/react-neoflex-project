import {FC} from 'react';
import './Footer.scss';

import logoSmall from '../../assets/images/logo-small.svg'

const Footer:FC = () => {
    return (
        <div className="footer-wrapper">
            <img src={logoSmall} alt="" className='footer-logo'/>
        </div> 
    );
};

export default Footer;
