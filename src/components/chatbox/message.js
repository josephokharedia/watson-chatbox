import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

class Message extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
        this._onClick = this._onClick.bind(this);
    }

    _onClick(){
        if(this.props.response){
            $(`#${this.props.id}`).modal('show')
        }
    }

    render() {
        let left = {float: 'float-left', rounded: 'rounded-right', color: 'bg-primary'};
        let right = {float: 'float-right', rounded: 'rounded-left', color: 'bg-dark'};
        let directions = {left, right};

        let direction = directions[this.props.direction] || left;
        let style = this.props.response? {"cursor": "pointer"} : {};
        
        return (

            <div className="d-block mb-2">
                <div style={style} onClick={this._onClick} className={`${direction.float} d-inline p-2 ${direction.color} text-white w-70 ${direction.rounded}`}>
                    {this.props.text
                        .split("\n")
                        .map( (t,idx) => (<span key={idx} ><span>{t}</span><br/></span>) )
                    }
                </div>
                <div className="clearfix"/>

                {this.props.response && 
                <div id={this.props.id} className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="responseModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="responseModalLongTitle">Watson Response</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <pre>
                                    <code>
                                        {JSON.stringify(this.props.response.raw, null, 2)}
                                    </code>
                                </pre>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                }


            </div>
    
        );
    }
}

Message.propTypes = {
    id: PropTypes.number.isRequired,
    direction: PropTypes.oneOf(['left', 'right']).isRequired,
    text: PropTypes.string.isRequired
    // onMessageClick: PropTypes.func
};


export default Message;