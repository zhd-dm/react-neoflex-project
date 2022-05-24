import {FC} from 'react';
import './Title.scss';

interface Title {
    value: string;
}

const Title: FC<Title> = ({
    value
}) => {
    return (
        <span className="pages-title">
            {value}
        </span>
    );
  }
  
  export default Title;