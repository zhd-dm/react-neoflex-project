import {FC} from 'react';
import './Sidebar.scss';

import logoSmall from '../../assets/images/logo-small.svg'
import iconHome from '../../assets/images/icons/icon-home.svg'
import iconGLobe from '../../assets/images/icons/icon-globe.svg'
import iconArchive from '../../assets/images/icons/icon-archive.svg'
import iconPieChart from '../../assets/images/icons/icon-pie-chart.svg'
import iconDollarSign from '../../assets/images/icons/icon-dollar-sign.svg'
import iconDatabase from '../../assets/images/icons/icon-database.svg'
import iconNavigation from '../../assets/images/icons/icon-navigation.svg'

const Sidebar:FC = () => {
    return (
        <div className="sidebar-wrapper">
            <img src={logoSmall} alt="" className='sidebar-logo'/>
            <ul className="sidebar-links">
                <li className="sidebar-item">
                    <a href="" className='sidebar-link'>
                        <img src={iconHome} alt="" />
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="" className='sidebar-link'>
                        <img src={iconGLobe} alt="" />
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="" className='sidebar-link'>
                        <img src={iconArchive} alt="" />
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="" className='sidebar-link'>
                        <img src={iconPieChart} alt="" />
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="" className='sidebar-link'>
                        <img src={iconDollarSign} alt="" />
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="" className='sidebar-link'>
                        <img src={iconDatabase} alt="" />
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="" className='sidebar-link'>
                        <img src={iconNavigation} alt="" />
                    </a>
                </li>
            </ul>
        </div> 
    );
};

export default Sidebar;
