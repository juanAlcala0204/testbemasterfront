import React from 'react'

/** Import external Components */
import TitleGlobal from '../../components/TitleGlobal'

import '../../assets/Home/home.css'

export default function Home() {
    return (
        <>
            <TitleGlobal title={'University App BeMaster'}/>
            <div className="row text-center">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <a className="btn btn-lg btn-success btn-home" href='/Career'>Comenzar  <i className="fa fa-hand-peace-o"></i></a>
                </div>
                <div className="col-md-4"></div>
            </div>
        </>
    )
}
