import "../css/create_op.css"
import { useNavigate } from "react-router-dom"
import { createOperation } from "../api/api-client";

const CreateOp = () => {

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        
        const newOp = {
            opName : e.target.opName.value,
            amount : e.target.amount.value,
            date : e.target.date.value,
            opType : e.target.opType.value
         }
        
        console.log(newOp);
        createOperation(newOp).then(() => navigate("/"));
      };
    return (
        <div className='create-op'>
            <h3>Agregar operación</h3>
            <form onSubmit={submitHandler}>
                <div className='form-control'>
                    <label>Concepto</label>
                    <input type="text" name="opName" required></input>
                </div>
                <div className='form-control'>
                    <label>Monto</label>
                    <input type="number" name="amount" required></input>
                </div>
                <div className='form-control'>
                    <label>Fecha</label>
                    <input type="date" name="date" required></input>
                </div>
                
                <div className="wrapper">
                    <input type="radio" name="opType" id="option-1" value="ingreso"></input>
                    <input type="radio" name="opType" id="option-2" value="egreso"></input>
                    <label htmlFor="option-1" className="option option-1">
                        <div className="dot"></div>
                        <span>INGRESO</span>
                    </label>
                    <label htmlFor="option-2" className="option option-2">
                        <div className="dot"></div>
                        <span>EGRESO</span>
                    </label>
                </div>
                <button className='btn add-btn'>AGREGAR</button>
                

            </form>
        </div>
    );
};

export default CreateOp;