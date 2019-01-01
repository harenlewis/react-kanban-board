import React, { Component } from 'react'
import Stage from './Stage'
import '../css/board.css'

export default class Board extends Component {
    render() {
        return (
            <div className="main-board">
                <div className="main-stage">
                    <Stage />
                    <Stage />
                    <Stage />
                    <Stage />
                    <Stage />
                    <Stage />
                    <Stage />
                    <Stage />
                    <Stage />
                    <Stage />
                    <Stage />
                    <Stage />
                    <Stage />
                    <Stage />
                    <Stage />
                </div>
            </div>
        )
    }
}