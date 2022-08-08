import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/edit_op.module.css' 
import { fetchOperationById, updateOperation } from '../api/api-client';

const EditOp = ({opID, setIsEditOpen, onSave}) => {
    const navigate = useNavigate()
    const [opName, setOpName] = useState("")
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState("")

    useEffect(() => {
        fetchOperationById(opID)
        .then(operation => {
            setOpName (operation.opName)
            setAmount(operation.amount)
            setDate(operation.date)
        })

    }, []);

    
    const submitHandler = () => {
        console.log('funciona');
        const newOp = {
            opName,
            amount,
            date,
         }
        
        updateOperation(opID, newOp)
          .then(() => {
            setIsEditOpen(false)
            onSave()
          });
      };
    return (
        <div className={styles.editOp} onClick={()=>setIsEditOpen(false)}>
            <div className={styles.cardContainer} onClick={(e)=>e.stopPropagation()}>
                <form >
                    <h2>EDITAR OPERACIÓN</h2>
                    <div className={styles.formControl}>
                        <label>Concepto</label>
                        <input type="text" name="opName" value={opName} onChange={(e) =>{setOpName (e.target.value)} } required></input>
                    </div>
                    <div className={styles.formControl}>
                        <label>Monto</label>
                        <input type="number" name="amount" value={amount} onChange={(e) =>{setAmount (e.target.value)} } required></input>
                    </div>
                    <div className={styles.formControl}>
                        <label>Fecha</label>
                        <input type="date" name="date" value={date} onChange={(e) =>{setDate (e.target.value)} } required></input>
                    </div>
                    <div className={styles.btnContainer}>

                        <button className={styles.btnCancel} type="button" onClick={()=>setIsEditOpen(false)}>CANCELAR</button>
                        <button className={styles.btnSave} type="button" onClick={submitHandler}>GUARDAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditOp;