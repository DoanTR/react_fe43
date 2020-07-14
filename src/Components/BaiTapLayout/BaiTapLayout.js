// Nội dung giao diện react class component chứa trong lệnh return của phương thức render. Tất cả nội dung trong component đều phải đc bao phủ bởi 1 thẻ duy nhất.

import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTSlider from './BTSlider'
import BTProduct from './BTProduct'
import BTPromotion from './BTPromotion'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader />
                <BTSlider />
                <BTProduct />
                <BTPromotion />
            </div>
        )
    }
}
