import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        const {image, name, material} = this.props.rubikWood;
        return (
            <div>
                <div className="card text-left">
                   {/* Nhận props image từ component DemoProps */}
                    <img className="card-img-top" src={image} alt ="abc" 
                    style={{width: "300px"}} />
                    <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{material}</p>
                    </div>
                </div>

            </div>
        )
    }
}
