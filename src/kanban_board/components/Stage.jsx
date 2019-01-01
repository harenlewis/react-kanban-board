import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import '../css/stage.css'

export default class Stage extends Component {
    render() {
        return (
            <div className="stage-content">
                <div className="stage">
                    <span className="stage-name"> STAGE 1 </span>
                    <ProjectCard />
                </div>
            </div>
        )
    }
}