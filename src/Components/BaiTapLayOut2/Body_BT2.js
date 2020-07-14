import React, { Component } from 'react'
import Banner_BT2 from './Banner_BT2'
import Item_BT2 from './Item_BT2'

export default class Body_BT2 extends Component {
    render() {
        return (
            <div className = "container">
                <Banner_BT2 />
                <div className = "row">
                    <div className="col-3">
                        <Item_BT2 />
                    </div>
                    <div className="col-3">
                        <Item_BT2 />
                    </div>
                    <div className="col-3">
                        <Item_BT2 />
                    </div>
                    <div className="col-3">
                        <Item_BT2 />
                    </div>
                </div>
            </div>
        )
    }
}
