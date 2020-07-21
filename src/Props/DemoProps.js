import React, { Component } from 'react'
import ClassProps from './ClassProps'
import FunctionProps from './FunctionProps'

export default class DemoProps extends Component {
    render() {
        const rb ={
            image: "https://img1.yeggi.com/images_q/42075/borg-3d-pentomino-puzzle-by-icesedros",
            name: "Rubik",
            material: "wood"
        }

        return (
            <div>
               <h1>Demo Props</h1>
               {/* Truyền props image cho component ClassProps */}
                {/* <ClassProps rubikWood={rb} /> */}
                
                <FunctionProps rubikWood={rb}/>
            </div>
        )
    }
}
