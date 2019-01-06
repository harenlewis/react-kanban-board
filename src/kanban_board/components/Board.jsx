import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import Stage from '../containers/Stage'
import '../css/board.css'

export default class Board extends Component {
    render() {
        const { stages, stagesById } = this.props
        return (
            <div className="main-board">
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div className="main-stage">
                        {stages.map((stage, index) => {
                            let stageDetails = stagesById[stage]
                            return (
                                <Stage
                                    key={index}
                                    name={stageDetails.name}
                                    projects={stageDetails.projects}
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
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            // when dropped within the same droppable
            // const items = reorder(
            //     this.getList(source.droppableId),
            //     source.index,
            //     destination.index
            // );

            // let state = { items };

            // if (source.droppableId === 'droppable2') {
            //     state = { selected: items };
            // }

            // this.setState(state);
        } else {
            // when dropped within the diff droppable
        //     const result = move(
        //         this.getList(source.droppableId),
        //         this.getList(destination.droppableId),
        //         source,
        //         destination
        //     );

        //     this.setState({
        //         items: result.droppable,
        //         selected: result.droppable2
        //     });
        }
    };
}