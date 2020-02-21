import React, { useEffect } from "react";
import SmurfCard from "./SmurfCard.js";
import { connect } from "react-redux";

import { fetchSmurfs } from "../actions/actions.js";

const SmurfList = (props) => {
    console.log(props)

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
        players: state.smurfs,
        isFetching: state.isFetching,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps, 
    { fetchSmurfs }
)(SmurfList);