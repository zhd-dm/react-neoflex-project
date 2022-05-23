import {FC} from 'react';
import './Header.scss';

import Input from '../UI/Input/Input';

import iconSearch from '../../assets/images/icons/icon-search.svg'
import iconBell from '../../assets/images/icons/icon-bell.svg'
import userPhoto from '../../assets/images/user-photo.jpg'
import iconLogOut from '../../assets/images/icons/icon-log-out.svg'

const Header:FC = () => {
    return (
        <div className="header-wrapper">
            <Input 
                inputTitle=''
                placeholder='Search'
                image={iconSearch}
            />
            <img src={iconBell} alt="" />
            <img src={userPhoto} alt="" />
            <span>Ivan Ivanov</span>
            <img src={iconLogOut} alt="" />
        </div> 
    );
};

export default Header;
