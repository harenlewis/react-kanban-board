import React, { Component } from 'react';
import '../css/header.css'


export default class Header extends Component {

    render() {
        return (
            <div className="header">
                <img className="header-logo" alt="logo" src={require('../../logo.png')} />
                <div className="actions">
                    <div className="add-project">
                        <button className="add-proj-btn">
                           <span className="fas fa-plus"></span>
                            Add a Project
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}