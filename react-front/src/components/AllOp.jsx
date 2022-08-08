import React, { useEffect, useState } from 'react';
import Actions from './Actions';
import Balance from './Balance';
import NavBar from './NavBar';
import '../css/all_op.css'
import { useNavigate } from 'react-router-dom';
import EditOp from './EditOp';
import { fetchOperations, deleteOperation } from '../api/api-client';

const AllOp = () => {

    const navigate = useNavigate()


    const [operations, setOperations] = useState([])
    const [opID, setOpId] = useState(null)
    const [isEditOpen, setIsEditOpen] = useState(false)

    const requestOperations = ()=>{
        fetchOperations().then(operations => setOperations(operations))
    }

    useEffect(requestOperations, []);
    
    const delHandler=(id)=>{        
        deleteOperation(id)
            .then(() => navigate("/"))
            .catch(err => console.log(err))
    }

    const editHandler=(id)=>{
        setOpId(id)
        setIsEditOpen(true)
    }

    return (
        <div className='all-op'>
            <Balance/>
            <Actions/>
            <div className='op-history'>
            <h3>Historial de Operaciones</h3>
            <div className='opes-container'>
                <ul>

                {operations.map(ope => (
                    <li key={ope.id}>
                        <div className='op-container'>
                            <div className='op-info'>
                                <div className={`img-container ${ope.opType === "egreso" && "amount-negative"}`}>
                                <span className="material-symbols-outlined">{`${ope.opType === "ingreso" ? "trending_up" : "trending_down"}`}</span>
                                </div>
                                <div className='ope-description'>
                                    <h4>{ope.opName}</h4>
                                    <div className='ope-date'>{ope.date}</div>
                                </div>
                            </div>
                            <div className={`ope-amount ${ope.opType === "egreso" && "amount-negative"}`}>
                                {ope.opType === "ingreso" ? `+ $${ope.amount}` : `- $${ope.amount}`}
                            </div>
                        </div>
                        <div className='op-edit-container'>
                            <button className='edit edit-btn material-symbols-outlined' onClick={()=>editHandler(ope.id)}>edit</button>
                            <button className='edit del-btn material-symbols-outlined' onClick={()=>delHandler(ope.id)}>delete</button>
                        </div>
                    </li>
                ))}
                    
                </ul>
                
            </div>
        </div>
            <NavBar/>
            {isEditOpen && <EditOp opID={opID} setIsEditOpen={setIsEditOpen} onSave={requestOperations}/>}
            
        </div>
    );
};

export default AllOp;