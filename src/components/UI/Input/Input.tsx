import {FC} from 'react';
import './Input.scss';

interface Input {
    // children?: React.ReactNode;
    inputTitle?: string;
    placeholder: string;
    className?: string;
    type?: string;
    image?: any;
}

const Input: FC<Input> = ({
    inputTitle,
    placeholder,
    className,
    type,
    image
}) => {
    return (
        <div className="input-wrapper">
            <span
                className={'input-title'}
            >
                {inputTitle}
            </span>
            <div className="input-content">
                <input 
                    className={'input-text ' + className}
                    placeholder={placeholder}
                >
                </input>
                <img src={image} alt=""/> 
            </div>    
        </div>
    );
  }
  
  export default Input;