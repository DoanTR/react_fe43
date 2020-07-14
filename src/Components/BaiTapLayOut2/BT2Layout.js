import React, { Component } from 'react'
import Header_BT2 from './Header_BT2'
import Banner_BT2 from './Banner_BT2'
import Body_BT2 from './Body_BT2'

export default class BT2Layout extends Component {
    render() {
        return (
            <div>
                <Header_BT2 />
                <Body_BT2 />
            </div>
        )
    }
}
