import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";

class Sidebar extends React.Component {
    render(){
        return(
            <div className="Sidebar">
                <a className="active" href='#home'><FontAwesomeIcon icon={faHome} /> Home</a>
                <a href='#courses'><FontAwesomeIcon icon={faBuildingColumns}/> Courses</a>
                <a href='#seminars'><FontAwesomeIcon icon={faBook}/> Seminars</a>
            </div>
        )
    }
}

export default Sidebar;