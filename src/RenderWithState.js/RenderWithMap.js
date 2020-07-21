import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    productList = [
        {id: 1, name:'Iphone 2G', price:1000},
        {id: 2, name:'Iphone 3G', price:2000},
        {id: 3, name:'Iphone 4G', price:3000},
    ]
    renderProductList = () => {
        let arrProductJSX = [];
        for(let i = 0; i < this.productList.length; i++){
            let prouduct = this.productList[i];
            let trProduct = <tr key={i}>
                <td>{prouduct.id}</td>
                <td>{prouduct.name}</td>
                <td>{prouduct.price}</td>
                <td><button className="btn btn-danger">Xóa</button></td>
            </tr>;
            arrProductJSX.push(trProduct);
        }
        return arrProductJSX;
    }
    renderProductList2 = ()=>{
        
        return this.productList.map((productItem, index)=>{
            return <tr key={index}>
            <td>{productItem.id}</td>
            <td>{productItem.name}</td>
            <td>{productItem.price}</td>
            <td><button className="btn btn-danger">Xóa</button></td>
        </tr>;
        })
    }
    
    render() {
        return (
            <div className="container">
                <h3>Product list</h3>
               <table class="table">
                   <thead>
                       <tr>
                           <th>id</th>
                           <th>name</th>
                           <th>price</th>
                       </tr>
                   </thead>
                   <tbody>
                      {this.renderProductList2()}
                   </tbody>
               </table>
               
            </div>
        )
    }
}
