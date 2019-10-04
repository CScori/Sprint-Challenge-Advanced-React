import React from 'react'




class Players extends React.Component {

    render(props) {
        return (
            <div>
                <h3>{props.name}</h3>
                <div>{props.country}</div>
            </div>
        )
    }
};

export default Players