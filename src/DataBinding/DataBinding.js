import React, { Component } from 'react'
import styleDatabinding from './DataBinding.module.css'
export default class DataBinding extends Component {
    //binding dữ liệu là thuộc tính
    sanPham = {
        ma: 1,
        tenSP: 'iPhoneX',
        gia: 1000000,
        hinhAnh: 'https://picsum.photos/200/100'
    }
    // Phương thức
        renderThongTin = () =>{
            return <div className="w-25">
                        <img className="card-img-top" src={this.sanPham.hinhAnh} />
                        <div className="card-body">

                            <p className="card-text">{this.sanPham.gia}</p>
                        </div>
            </div>
        }
    // render() là method sẵn có của Component để hiển thị giao diện.
    // var và function chỉ nên là cục bộ để trong method render() này.
    // còn method và properties của class lớn nên để toàn cục.
    render() {
        // binding dữ liệu là biến
        let title = 'CYBERSOFT';
        let srcImg = `https://picsum.photos/200/300`;
        let hocVien = {
            ma: 1,
            ten: 'Nguyễn Văn An',
            tuoi: 18
        }
        // binding dữ liệu là hàm.
        const renderImg = () =>{
            //return về component (jsx); Nội dung hàm phải trả về 1 số, chuỗi, hoặc thẻ html, hoặc component có duy nhất 1 thẻ bao phủ.
            return (
            <div>
                <img src="https://picsum.photos/300/200" />
            </div>)
        }
       
        return (
            <div>
                <h1 id="title">{title}</h1>
                <img src={srcImg} alt={srcImg}/>

                <div className="card w-25">
                    
                    <div className="card-body">
                        <h4 className="card-title" >
                            Họ tên: {hocVien.ten}
                        </h4>
                        <p className="card-text">
                            Tuổi: {hocVien.tuoi}
                        </p>
                    </div>
                </div>
                <div className="container">
                    {renderImg()}
                </div>
                <br></br>
                <div className="container">
                    <p>{this.sanPham.tenSP}</p>
                    {this.renderThongTin()}
                </div>

                {/* <div className="container">
                    
                </div>
                <div className="container">
                    
                    <div className="w-25">
                        <div className="card">
                            <img className=""
                        </div>
                        <h4 className="card-title" >
                            Họ tên: {hocVien.ten}
                        </h4>
                        <p className="card-text">
                            Tuổi: {hocVien.tuoi}
                        </p>
                    </div>
                </div> */}
            </div>
        )
    }
}
    