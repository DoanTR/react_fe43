import React from 'react'

export default function FunctionProps(props) {
    
    return (
        <div>
            <h2>Stateless Component</h2>
            <div className="card text-left">
                <img className="card-img-top" src={props.rubikWood.image} alt ="def" style={{width: "400px"}} />
                <div className="card-body">
                    <h4 className="card-title">{props.rubikWood.name}</h4>
                    <p className="card-text">{props.rubikWood.material}</p>
                </div>
            </div>

        </div>
    )
}
