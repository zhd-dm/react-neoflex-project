import {FC} from 'react';
import './ClaimsPage.scss';

import Header from '../../Header/Header';
import Sidebar from '../../Sidebar/Sidebar';
import ClaimsList from '../../ClaimsList/ClaimsList'

const ClaimsPage:FC = () => {
    return (
        <div className="claims-page">
            <Header />
            <Sidebar />
            <ClaimsList />
        </div> 
    );
};

export default ClaimsPage;
