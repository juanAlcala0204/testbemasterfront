import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
/** Import Global Context */
import CareerContext from '../../context/CareerContext';
import ModalContext from '../../context/ModalContext';

export default function CareerItem({ career }) {

    const { openModal } = useContext(ModalContext);
    const { selectCareer } = useContext(CareerContext);

    const updateAction = (careerSelected) => {
        selectCareer(careerSelected);
        openModal('editCareer')
    }

    const imgStyles = {
        height: '200px',
        objectFit: 'cover'
    }

    return (
        <div>
            <div className="card" style={{ marginTop: '20px', height:'420px'}}>
                <div className="card-header bg-dark border-bottom-0">
                    <div className="row">
                        <div className="col-md-2">
                            <button className="btn btn-warning" onClick={()=> updateAction(career)}>
                                <span aria-hidden="true"><i className="fa fa-edit" ></i></span>
                            </button>
                        </div>
                        <div className="col-md-7"></div>
                        <div className="col-md-3">
                        <Link to={`/Class/${career.idCarrera}/${career.nombre_carrera}`}>
                        <button className="btn btn-danger" >
                                <span aria-hidden="true"><i className="fa fa-users"></i></span>
                            </button>
                        </Link>
                            
                        </div>
                    </div>
                </div>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5kxMFNzZI5W9JfetBPISbeXv96y-SmMU5lA&usqp=CAU'}
                    alt={career.nombre_carrera}
                    className="card-img-top"
                    style={imgStyles}
                />
                <div className="card-body">
                    <h4>{career.nombre_carrera}</h4>
                    <p>{career.descripcion_carrera}</p>
                </div>
            </div>
        </div>
    )
}
