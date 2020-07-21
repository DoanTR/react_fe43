import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        srcImg: './img/black-car.jpg'
    }
    changeColor = (color) =>{
        let imgColor = `./img/${color}-car.jpg`;
        this.setState({
            srcImg :imgColor
        })
        
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-6">
                        <img className="w-100" src={this.state.srcImg} alt="123" />
                        {/* Nếu để src="./img/black-car.jpg" thì code sẽ không chạy? */}
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <button onClick={()=>{
                                    
                                    this.changeColor('red');
                                    console.log(this.state.srcImg);
                                }} className="btn text-white" style={
                                    { backgroundColor: 'red' }
                                }>Red Color</button>
                            </div>
                            <div className="col-3">
                                <button onClick={()=>{
                                    
                                    this.changeColor('black');
                                    console.log(this.state.srcImg);
                                }} className="btn text-white" style={
                                    { backgroundColor: 'black' }
                                }>Black Color</button>
                            </div>
                            <div className="col-3">
                                <button onClick={()=>{
                                    
                                    this.changeColor('silver');
                                    console.log(this.state.srcImg);
                                }}className="btn text-black" style={
                                    { backgroundColor: 'silver' }
                                }>Silver Color</button>
                            </div>
                            <div className="col-3">
                                <button onClick={()=>{
                                    
                                    this.changeColor('steel');
                                    console.log(this.state.srcImg);
                                }}className="btn text-black" style={
                                    { backgroundColor: 'grey' }
                                }>Steel Color</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
