import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd';
import ProjectCard from './ProjectCard'
import '../css/stage.css'
// import boardData from '../../stores/board-data';


export default class Stage extends Component {
    render() {
        const { name } = this.props;
        return (
            <Droppable droppableId={`droppable-${name}`}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        className={`stage-content ${snapshot.isDraggingOver ? "dragover" : ""}`}>
                        <div className="stage">
                            <span className="stage-name"> {name} </span>
                            <ProjectCard />
                        </div>
                    </div>
                )}
            </Droppable>
        )
    }
}