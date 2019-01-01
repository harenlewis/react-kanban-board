import React, { Component } from 'react'
import '../css/project_card.css'

export default class ProjectCard extends Component {
    render() {
        return (
            <div className="proj-content">
                <div className="proj">
                    <span className="proj-margin proj-name">PROJ 1</span>
                    <div className="proj-margin-lt proj-margin">PROJ STAGE</div>
                    <div className="proj-data">
                        <div className="proj-margin proj-details">
                            <div className="proj-margin-lt">Production Type:
                                <div className="proj-data-margin proj-data-color"><span> Video </span></div>
                            </div>
                            <div className="proj-duration">Project duration
                                <div className="proj-data-margin proj-data-color"><span> Spet - Nov </span></div>
                            </div>
                        </div>
                        <div className="proj-margin proj-details proj-bottom">
                            <div className="proj-margin-lt">Producers
                                <div className="proj-data-margin proj-data-color"><span>Producer 1</span></div>
                            </div>
                            <div className="proj-budget">Budget
                                <div className="proj-data-margin proj-data-color"><span>63K</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}