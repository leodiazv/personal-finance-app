import React, { useEffect, useState } from 'react';
import { fetchOperations } from '../api/api-client';
import '../css/resume.css'

const Resume = () => {

    const [operations, setOperations] = useState([])

    useEffect(() => {
        fetchOperations().then(operations => setOperations(operations.slice(0,10)))
    }, []);


    return (
        <div className='resume'>
            <h3>Operaciones</h3>
            <div className='opes-container'>
                <ul>
                {operations.map(ope => (
                    <li key={ope.id}>
                        <div>
                            <div className={`img-container ${ope.opType === "egreso" && "amount-negative"} `}>
                            <span className="material-symbols-outlined">{`${ope.opType === "ingreso" ? "trending_up" : "trending_down"}`}</span></div>
                            <div className='ope-description'>
                                <h4>{ope.opName}</h4>
                                <div className='ope-date'>{ope.date}</div>
                            </div>
                        </div>
                        <div className={`ope-amount ${ope.opType === "egreso" && "amount-negative"}`}>
                            {ope.opType === "ingreso" ? `+ $${ope.amount}` : `- $${ope.amount}`}
                        </div>
                    </li>
                ))}
                    
                </ul>
                
            </div>
        </div>
    );
};

export default Resume;