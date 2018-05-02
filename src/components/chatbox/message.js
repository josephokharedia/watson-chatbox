import React from 'react';

class Message extends React.Component {

    render() {
        let left = {float: 'float-left', rounded: 'rounded-right', color: 'bg-primary'};
        let right = {float: 'float-right', rounded: 'rounded-left', color: 'bg-dark'};
        let directions = {left, right};

        let direction = (this.props.direction && directions[this.props.direction])? directions[this.props.direction] : left;
        
        return (

            <div className="d-block mb-2">
                <div className={`${direction.float} d-inline p-2 ${direction.color} text-white w-70 ${direction.rounded}`}>Hi, This is a message</div>
                <div className="clearfix"/>
            </div>
    
        );
    }
}

Message.propTypes = {
    direction: PropTypes.oneOf(['left', 'right']).isRequired
};


export default Message;