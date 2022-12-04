import React from "react";
import "./utility.css";

class Utility extends React.Component {
    render(){
        return(
            <div className="Utility">
                <button id="modalBtn" className="madalBtn">Enrole in activity</button>
                <div id="modal" className="Modal">
                    <div className="modal-content">
                        <span className="close">&times;</span>
                        <h4>Enter the activity code</h4>
                        <input type="text" placeholder="Enter code here"></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default Utility;