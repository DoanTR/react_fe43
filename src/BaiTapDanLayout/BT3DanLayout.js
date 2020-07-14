import React, { Component } from 'react'
import BT3Header from './BT3Header'
import BT3SiderBar from './BT3SiderBar'
import BT3Content from './BT3Content'
import BT3Footer from './BT3Footer'

export default class BT3DanLayout extends Component {
    render() {
        return (
            <div>
                <BT3Header />
                <div className="container">
                    <div className="row">
                        
                            <BT3SiderBar />
                        
                       
                            <BT3Content />
                       
                    </div>
                </div>
                <BT3Footer />
            </div>
        )
    }
}

