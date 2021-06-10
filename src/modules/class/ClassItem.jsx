import React, {useContext} from 'react'

/** Import Global Context */

export default function ClassItem({ career }) {


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
                            <button className="btn btn-warning">
                                <span aria-hidden="true"><i className="fa fa-edit" ></i></span>
                            </button>
                        </div>
                        <div className="col-md-7"></div>
                        <div className="col-md-3">
                            <button className="btn btn-danger" >
                                <span aria-hidden="true"><i className="fa fa-angellist"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
                <img
                    src={'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/45894/black-small-square-emoji-clipart-md.png'}
                    alt={career.nombre_clase}
                    className="card-img-top"
                    style={imgStyles}
                />
                <div className="card-body">
                    <h4>{career.nombre_clase}</h4>
                    <p>{career.descripcion_clase}</p>
                </div>
            </div>
        </div>
    )
}
