import React, { useEffect, useState } from 'react';
import { fetchOperations } from '../api/api-client';
import '../css/balance.css'

const Balance = () => {
    const [operations, setOperations] = useState([])

    let balance = 0

    operations.forEach(element => {
        if(element.opType === "ingreso"){
            balance += element.amount
        }else{
            balance -= element.amount
        }
    });
    

    useEffect(() => {
        fetchOperations().then(operations => setOperations(operations))

    }, []);

    
    return (
        <div className='balance'>
            <h1>Total Balance</h1>
            <p>{`$ ${balance}`}</p>
        </div>
    );
};

export default Balance;