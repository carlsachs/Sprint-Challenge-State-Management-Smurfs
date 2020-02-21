import React from "react";

const SmurfCard = props => {
    console.log("smurfs", props);

    return (
        <div>
            <div>
                <h2>{props.smurf.name}</h2>
                <h3>{props.smurf.age}</h3>
                <h3>{props.smurf.height}</h3>
            </div>
        </div>
    )
}

export default SmurfCard;