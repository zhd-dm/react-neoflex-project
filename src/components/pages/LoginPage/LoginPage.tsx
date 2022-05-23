import {FC} from 'react';
import './LoginPage.scss';

import LoginForm from '../../LoginForm/LoginForm';
import Footer from '../../Footer/Footer';

import logoMain from '../../../assets/images/logo-main.jpg'

const LoginPage:FC = () => {
    return (
        <div className="login-page">
            <div className="main-content-wrapper">
                <div className="logo-wrapper">
                    <img src={logoMain} alt="" className="logo-login-page"/>
                </div>
                <LoginForm />
            </div>
            <Footer />
        </div> 
    );
};

export default LoginPage;
