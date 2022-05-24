import {FC, useState, useEffect} from 'react';
import axios from "axios";

import {IClaims} from "../../types";
import Title from '../UI/Title/Title';
import Button from '../UI/Button/Button';
import './ClaimsList.scss';

import iconPlus from '../../assets/images/icons/icon-plus.svg'

const ClaimsList:FC = () => {

    const [claims, setClaims] = useState<IClaims[]>([]);

    useEffect(() => {
        fetchClaims()
    }, [])

    async function fetchClaims() {
        try {
            const response = await axios.get<IClaims[]>('https://jsonplaceholder.typicode.com/users');
            setClaims(response.data);

        } catch (e) {
            alert(e);
        }
    }
    
    console.log(claims)

    return (
        <div className="claims-list">
            <Title value='Your claims'/>
            <Button 
                value={
                    <img src={iconPlus} alt=''></img>
                    
                }
            />

        </div> 
    );
};

export default ClaimsList;
