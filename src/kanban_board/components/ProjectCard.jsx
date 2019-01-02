import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd';
import boardData from '../../stores/board-data';
import '../css/project_card.css'

export default class ProjectCard extends Component {
    render() {
        const { name, stage, type, duration, budget, producer } = this.props;
        const stageDetails = boardData.stagesById[stage]
        return (
            <Draggable
                draggableId="proj-1"
                key={Math.random()}
                index={parseInt(Math.random())}
            >
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="proj-content">
                        <div className="proj">
                            <span className="proj-margin proj-name">{name}</span>
                            <div className="proj-margin-lt proj-margin">{stageDetails.name}</div>
                            <div className="proj-data">
                                <div className="proj-margin proj-details">
                                    <div className="proj-margin-lt">Production Type:
                                <div className="proj-data-margin proj-data-color"><span> {type} </span></div>
                                    </div>
                                    <div className="proj-duration">Project duration
                                <div className="proj-data-margin proj-data-color"><span> {duration} </span></div>
                                    </div>
                                </div>
                                <div className="proj-margin proj-details proj-bottom">
                                    <div className="proj-margin-lt">Producers
                                <div className="proj-data-margin proj-data-color"><span>{producer}</span></div>
                                    </div>
                                    <div className="proj-budget">Budget
                                <div className="proj-data-margin proj-data-color"><span><span className="fas fa-rupee-sign"></span> {budget}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Draggable>
        )
    }
}