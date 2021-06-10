import React from 'react'

import Navbar from '../components/Navbar'

export default function Main({children}) {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card" style={{ marginTop: '50px' }}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ModalRegisterFigure /> */}
        </div>
    )
}
