import {FC} from 'react';
import './Button.scss';

interface Button {
    // children?: React.ReactNode;
    onClick?: () => void;
    value?: string;
    className?: string;
}

const Button: FC<Button> = ({
    onClick,
    value,
    className
}) => {
    return (
        <button 
            className={'button-wrapper ' + className}
            onClick={onClick}
        >
            {value}
        </button>
    );
  }
  
  export default Button;