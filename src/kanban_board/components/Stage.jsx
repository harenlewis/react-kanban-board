import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd';
import ProjectCard from './ProjectCard'
import '../css/stage.css'

export default class Stage extends Component {
    render() {
        return (
            <Droppable droppableId="droppable-uui">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        className={`stage-content ${snapshot.isDraggingOver? "" : "dragover"}`}>
                        <div className="stage">
                            <span className="stage-name"> STAGE 1 </span>
                            <ProjectCard />
                        </div>
                    </div>
                )}
            </Droppable>
        )
    }
}