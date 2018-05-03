import React from 'react';
import {sendMessage} from '../../action/action'
import { connect } from 'react-redux';

class MessageForm extends React.Component{

    constructor(props){
        super(props);
        this.props=props;
        this.state = {text:''};
        this._onChange = this._onChange.bind(this);
        this._sendMessage = this._sendMessage.bind(this);
        this._onKeyPress = this._onKeyPress.bind(this);
    }

    _onChange(e){
        this.setState({text: e.target.value});
    }

    _onKeyPress(e){
        if(e.key === 'Enter'){
            this._sendMessage(e);
        }
    }

    _sendMessage(e){
        e.preventDefault();
        console.log('sending text:', this.state.text);
        if(this.state.text){
            this.props.sendMessage(this.state.text);
            this.setState({text: ''});
        }
    }

    render(){
        return(
        <div className="input-group my-4">
            <input type="text" value={this.state.text} onKeyPress={this._onKeyPress} onChange={this._onChange} className="form-control" placeholder="Type your message here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
                <button onClick={this._sendMessage} className="btn btn-outline-primary" type="button">SEND</button>
            </div>
        </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sendMessage: (msg) => dispatch(sendMessage(msg))
    };
};
export default connect(null, mapDispatchToProps)(MessageForm);