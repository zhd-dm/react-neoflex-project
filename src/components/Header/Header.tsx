import {FC} from 'react';
import './Header.scss';

import Input from '../UI/Input/Input';

import iconSearch from '../../assets/images/icons/icon-search.svg'
import iconBell from '../../assets/images/icons/icon-bell.svg'
import userPhoto from '../../assets/images/user-photo.jpg'
import iconLogout from '../../assets/images/icons/icon-log-out.svg'

const Header:FC = () => {
    return (
        <div className="header-wrapper">
            <Input 
                inputTitle=''
                placeholder='Search'
                image={iconSearch}
                className='header-search'
            />
            <ul className="header-links">
                <li className="header-link">
                    <img src={iconBell} alt="" className='icon-bell'/>
                </li>
                <li className="header-link">
                    <img src={userPhoto} alt="" className='user-photo'/>
                </li>
                <li className="header-link">
                    <span className='usen-name'>Ivan Ivanov</span>
                </li>
                <li className="header-link">
                    <img src={iconLogout} alt="" className='icon-logout'/>
                </li>
            </ul>
        </div> 
    );
};

export default Header;
