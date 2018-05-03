import React from 'react';
import MessageForm from './messageForm';
import Message from './message';
import Reset from './reset';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BlockUi from 'react-block-ui';

class ChatBox extends React.Component{

    constructor(props){
        super(props);
        this.props = props;
    }

    _scrollToBottom(){
        let chatBoxElement = document.querySelector('#chatbox');
        chatBoxElement.scrollTop = chatBoxElement.scrollHeight;
    }

    componentDidMount(){
        this._scrollToBottom();
    }

    componentDidUpdate(){
        this._scrollToBottom();
    }

    render(){
        return (

            <BlockUi tag="div" blocking={this.props.blocking}>
                {this.props.error &&
                <div className="alert alert-danger" role="alert">
                Technical error! Something went wrong!
                </div>
                }
                <div className="border border-dark rounded px-3 py-3">
                    <h1 className="text-center">Watson Chatbox</h1>
                    <hr/>

                    <Reset />

                    <div id="chatbox" className="pre-scrollable" style={{'minHeight':'500px'}}>
                       {this.props.conversation.map(c => 
                        { 
                            let text = c.payload.text || c.payload.output.text.join('\n');
                            return (<Message id={c.id} key={c.id} direction={c.direction} text={text} payload={c.payload}/>);
                        })}
                    </div>

                    <MessageForm />
                </div>
            </BlockUi>
        );
    }
}


ChatBox.propTypes={
    blocking: PropTypes.bool,
    error: PropTypes.bool,
    onMessageClick: PropTypes.func,
    conversation: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        payload: PropTypes.any,
        direction: PropTypes.oneOf(['left','right']).isRequired
    })).isRequired,
}
const mapStateToProps = state => {
    return {
        blocking: state.status.sending,
        error: state.status.error,
        conversation: state.conversation.map(c => Object.assign({}, c, {direction: c.sender? 'left' : 'right'})),
    }
}

export default connect(mapStateToProps)(ChatBox);