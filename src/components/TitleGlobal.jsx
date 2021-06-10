import React from 'react'

export default function TitleGlobal({ title }) {
    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <h1 className="title-custom text-center">{title}</h1>
            </div>
            <div className="col-md-2"></div>
        </div>
    )
}
