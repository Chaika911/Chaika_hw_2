import React from "react";

class ChildrenComponents extends React.Component {
    render (){
        return(
            <div>{this.props.children}</div>
        )
    }
}

export default ChildrenComponents;