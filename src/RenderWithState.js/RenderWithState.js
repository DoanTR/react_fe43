import React, { Component } from 'react'

export default class RenderWithState extends Component {
    // this.state: Thuộc tính chứa những giá trị thay đổi khi người dùng thao tác
    //trên giao diện
    state ={
        isLogin: false
    }
    
   // isLogin = false;
    userName = 'Doan';
    renderContent = () =>{
        if(this.state.isLogin){
        return <p>hello {this.userName}</p>
        }
        return <button onClick={() =>{
            this.logIn();
        }}>Đăng nhập</button>
    }
    logIn = () =>{
        // this.state.isLogin = true;
        // console.log(this.state.isLogin);
        // this.render();
        let newState = {
            isLogin: true
        }
        //Phương thức this.setState là 1 phương thức sẵn có của componnent làm 2 nhiệm vụ
        // thay đổi giá trị state và gọi this.render() lại giao diện.
        // this.setState là 1 phương thức bất đồng bộ

        this.setState(newState, ()=>{
            console.log(this.state)
        })
    }
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}
