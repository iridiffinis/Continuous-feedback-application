import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import "./header.css";

class Header extends React.Component {
    render(){
        return(
            <div className="Header">
                <a href="#home" className="snv"><FontAwesomeIcon icon={faGraduationCap}/></a>
                <a href="#home" className="logo">Activity Quest</a>
                <div className="Account">
                    <button className="accBtn">Account</button>
                    <div className="account-dropdown" id="accOptions">
                        <a href="#op1">op1</a>
                        <a href="#op2">op2</a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Header;