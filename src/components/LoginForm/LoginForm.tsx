import {FC} from 'react';
import './LoginForm.scss';

import logoLoginForm from '../../assets/images/logo-login-form.svg'
import iconMail from '../../assets/images/icons/icon-mail.svg'
import iconLock from '../../assets/images/icons/icon-lock.svg'

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const LoginForm:FC = () => {
    return (
        <div className="login-form-wrapper">
            <img src={logoLoginForm} alt="" className='logo-login-form'/>
            <form className="login-form">
                <Input
                    inputTitle='E-MAIL'
                    placeholder='Type your e-mail'
                    image={iconMail}
                />
                <Input
                    inputTitle='PASSWORD'
                    placeholder='Type your password'
                    image={iconLock}
                />
                <div className='keep-logged'>
                    <input type='checkbox'/>
                    <label>Keep me logged in</label>
                </div>
                <Button
                    value='Login'
                    onClick={() => console.log('hello')}
                />
                <span className='request-registration'>
                    Not a member? 
                    <a> Request registration.</a>
                </span>
            </form>
        </div> 
    );
};

export default LoginForm;
