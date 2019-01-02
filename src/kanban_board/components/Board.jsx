import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import boardData from '../../stores/board-data';
import Stage from './Stage'
import '../css/board.css'

export default class Board extends Component {
    render() {
        return (
            <div className="main-board">
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div className="main-stage">
                        {boardData.stages.map((stage, index) => {
                            let stageDetails = boardData.stagesById[stage]
                            return (
                                <Stage
                                    key={index}
                                    name={stageDetails.name}
                                />
                            )
                        })}
                    </div>
                </DragDropContext>
            </div>
        )
    }

    onDragEnd = result => {
        console.log(result)
    }
}