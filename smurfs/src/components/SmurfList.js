import React, { useEffect } from "react";
import { connect } from "react-redux";

import SmurfCard from "./SmurfCard.js";
import { fetchSmurfs } from "../actions/actions.js";

const SmurfList = props => {

    useEffect(() => {
        props.fetchSmurfs()
    }, [])


    return (
        <div>
            <h1>Redux Sprint</h1>
            <div>
                {props.smurfs.map(smurf => (
                    <SmurfCard smurf={smurf}/>
                ))}
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps, 
    { fetchSmurfs }
)(SmurfList);