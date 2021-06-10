import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

/** Import external Components */
import TitleGlobal from '../../components/TitleGlobal'
import List from './List'

/** Import Services */
import ClassService from '../../services/Class/classServices'

export default function Class() {

    const [classes, setClasses] = useState([]);
    const service = new ClassService();
    const { idCareer, nameCareer } = useParams();

    useEffect(() => {
        console.log(idCareer)
        const serviceGetData = async () => {
            const data = await service.getClasses(idCareer);
            setClasses(data);
        }
        serviceGetData();
    }, [idCareer])

    return (
        <>
            <div className='row'>
                <div className='col'>
                    <Link to={`/Career`}>
                        <button className='btn btn-success'>Volver</button>
                    </Link>
                </div>
            </div>

            <TitleGlobal title={`Clases Carrera:${nameCareer}`} />

            <div className="row" style={{ marginTop: '50px', marginBottom: '30px' }}>
                <div className="col-md-1"></div>
                <div className="col-md-10" >
                    {classes.length > 0 ? (
                        <List results={classes} />
                    ): (
                        <h3>No hay clases para esta carrera :(</h3>
                    )}
                    
                </div>
                <div className="col-md-1"></div>
            </div>
        </>
    )
}
