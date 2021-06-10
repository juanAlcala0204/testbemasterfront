import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
/** Import external Components */
import TitleGlobal from '../../components/TitleGlobal'
import List from './List'
import ModalRegister from './ModalRegister';
import ModalEdit from './ModalEdit';

/** Import Global Context */
import CareerContext from '../../context/CareerContext';
import ModalContext from '../../context/ModalContext';

export default function Career() {

    const { career, getCareers } = useContext(CareerContext);
    const { openModal } = useContext(ModalContext);
    const [searchFigure, setSearchFigure] = useState("");

    useEffect(() => {
        const serviceGetData = async () => {
            const data = await getCareers();
            console.log(data);
        }
        serviceGetData();
    }, [])

    const handleChange = event => {
        setSearchFigure(event.target.value);
    }

    // Make List Geometric Figures
    const results = !searchFigure
        ? career
        : career.filter(item => (
            item.nombre_carrera.toLowerCase().includes(searchFigure.toLowerCase())
        )
        );

    return (
        <>
            <div className='row'>
                <div className='col'>
                    <Link to={`/`}>
                        <button className='btn btn-success'>Volver</button>
                    </Link>
                </div>
            </div>
            <TitleGlobal title={'Carreras Universitarias'} />
            <div className="row" style={{ marginTop: '30px', marginBottom: '30px' }}>
                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <button className="btn btn-lg btn-success" onClick={() => openModal('registerCareer')}>Agregar Carrera  <i className="fa fa-plus-square"></i></button>
                </div>
                <div className="col-md-3">
                    <div className="input-group input-group-lg">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg"><i className="fa fa-search"></i></span>
                        </div>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search"
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            defaultValue={searchFigure}
                            onChange={(event) => { handleChange(event) }}
                        />
                    </div>


                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row" style={{ marginTop: '50px', marginBottom: '30px' }}>
                <div className="col-md-1"></div>
                <div className="col-md-10" >
                    <List results={results} />
                </div>
                <div className="col-md-1"></div>
            </div>
            <ModalEdit />
            <ModalRegister />
        </>
    )
}
