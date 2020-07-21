import React, { Component } from 'react'

export default class EventBinding extends Component {
    handleClick = () =>{
        alert('hello FE43');
    }
    showMessage = (mess) => {
        alert("hello " + mess)
    }
    render() {
        return (
            <div>
                {/* Cách 1: truyền callback function sử lí sự kiện */}
                <button onClick ={this.handleClick}>Click me!</button>     
                <button onClick ={this.showMessage.bind(this, 'cyber soft')}>Click me!</button>   
                <br />
                <hr />
                {/* Cách 2: dùng arrow function */}
                <h3>Dùng Arrow function</h3>
                <button onClick={() => {
                    this.showMessage('cybersoft');
                }}>ShowMess</button>     
            </div>
        )
    }
}
