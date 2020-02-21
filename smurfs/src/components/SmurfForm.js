import React, { useState } from "react";
import { connect } from "react-redux";

import  { postSmurfs } from "../actions/actions.js";

const SmurfForm = props => {
    
    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: "",
        id: Date.now()
      });

    const inputHandler = e => {
        e.preventDefault()
        setSmurf({ ...smurf, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        props.postSmurfs(smurf);
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    label="name"
                    placeholder="Their Name?"
                    value={props.name}
                    onChange={inputHandler}
                    className="input"
                />
                <label htmlFor="age">Age</label>
                <input
                    type="text"
                    name="age"
                    label="age"
                    placeholder="Their Age?"
                    value={props.age}
                    onChange={inputHandler}
                    className="input"
                />
                <label htmlFor="height">Height</label>
                <input
                    type="text"
                    name="height"
                    label="height"
                    placeholder="What's the height?"
                    value={props.height}
                    onChange={inputHandler}
                    className="input"
                />
                <button onClick={submitHandler} className="btn">Add This Smurf</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps,
    { postSmurfs }
)(SmurfForm);