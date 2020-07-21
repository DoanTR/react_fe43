import React, { Component } from 'react'

export default class StateNhieuGiaTri extends Component {
    listCar = [
        {id:1, gia:2000, url:'./img/black-car.jpg'},
        {id:2, gia:1500, url:'./img/red-car.jpg'},
        {id:3, gia:10000, url:'./img/silver-car.jpg'},
        {id:4, gia:6000, url:'./img/steel-car.jpg'}
    ]
    state = {
        id_: 1,
        gia_: 2000,
        url_: './img/black-car.jpg',
    }
    changeInfo = (newCar) =>{
        // let imgColor = `./img/${color}-car.jpg`;
        let newId = newCar.id;
        let newGia = newCar.gia;
        let newURL = newCar.url;
        this.setState({
            // srcImg :imgColor
            id_: newId,
            gia_: newGia,
            url_: newURL
        })
        
    }
   
    render() {
        return (
            <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-6">
                    <img className="w-100" src={this.state.url_} alt="123" />
                     <p>{this.state.gia_}</p>
                    {/* Nếu để src="./img/black-car.jpg" thì code sẽ không chạy? */}
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-3">
                            <button onClick={()=>{
                                
                                this.changeInfo(this.listCar[1]);
                                console.log(this.state.srcImg);
                            }} className="btn text-white" style={
                                { backgroundColor: 'red' }
                            }>Red Color</button>
                        </div>
                        <div className="col-3">
                            <button onClick={()=>{
                                
                                this.changeInfo(this.listCar[0]);
                                console.log(this.state.srcImg);
                            }} className="btn text-white" style={
                                { backgroundColor: 'black' }
                            }>Black Color</button>
                        </div>
                        <div className="col-3">
                            <button onClick={()=>{
                                
                                this.changeInfo(this.listCar[2]);
                                console.log(this.state.srcImg);
                            }}className="btn text-black" style={
                                { backgroundColor: 'silver' }
                            }>Silver Color</button>
                        </div>
                        <div className="col-3">
                            <button onClick={()=>{
                                
                                this.changeInfo(this.listCar[3]);
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
