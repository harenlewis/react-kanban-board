import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import Stage from './Stage'
import '../css/board.css'

export default class Board extends Component {
    render() {
        return (
            <div className="main-board">
                <DragDropContext onDragEnd={this.onDragEnd}>
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
                </DragDropContext>
            </div>
        )
    }

    onDragEnd = result => {
        console.log(result)
    }
}