import React from 'react';
class ChatBox extends React.Component{
    
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

            <div className="border border-dark rounded px-3 py-3">
                <h1 className="text-center">Watson Chatbox</h1>
                <hr/>
                <div className="mb-2">
                    <button type="button" className="btn btn-sm btn-outline-secondary">RESET</button>
                </div>
                <div id="chatbox" className="pre-scrollable" style={{'minHeight':'500px'}}>
                    <div className="d-block mb-2">
                        <div className="float-left d-inline p-2 bg-primary text-white w-70 rounded-right">Hi, This is a message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-right d-inline p-2 bg-dark text-white w-70 rounded-left">Hello, This is another message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-left d-inline p-2 bg-primary text-white w-70 rounded-right">Hi, This is a message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-right d-inline p-2 bg-dark text-white w-70 rounded-left">Hello, This is another message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-left d-inline p-2 bg-primary text-white w-70 rounded-right">Hi, This is a message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-right d-inline p-2 bg-dark text-white w-70 rounded-left">Hello, This is another message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-left d-inline p-2 bg-primary text-white w-70 rounded-right">Hi, This is a message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-right d-inline p-2 bg-dark text-white w-70 rounded-left">Hello, This is another message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-left d-inline p-2 bg-primary text-white w-70 rounded-right">Hi, This is a message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-right d-inline p-2 bg-dark text-white w-70 rounded-left">Hello, This is another message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-left d-inline p-2 bg-primary text-white w-70 rounded-right">Hi, This is a message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-right d-inline p-2 bg-dark text-white w-70 rounded-left">Hello, This is another message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-left d-inline p-2 bg-primary text-white w-70 rounded-right">Hi, This is a message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-right d-inline p-2 bg-dark text-white w-70 rounded-left">Hello, This is another message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-left d-inline p-2 bg-primary text-white w-70 rounded-right">Hi, This is a message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-right d-inline p-2 bg-dark text-white w-70 rounded-left">Hello, This is another message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-left d-inline p-2 bg-primary text-white w-70 rounded-right">Hi, This is a message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-right d-inline p-2 bg-dark text-white w-70 rounded-left">Hello, This is another message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-left d-inline p-2 bg-primary text-white w-70 rounded-right">Hi, This is a message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-right d-inline p-2 bg-dark text-white w-70 rounded-left">Hello, This is another message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-left d-inline p-2 bg-primary text-white w-70 rounded-right">Hi, This is a message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-right d-inline p-2 bg-dark text-white w-70 rounded-left">Hello, This is another message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-left d-inline p-2 bg-primary text-white w-70 rounded-right">Hi, This is a message</div>
                        <div className="clearfix"/>
                    </div>
                    <div className="d-block mb-2">
                        <div className="float-right d-inline p-2 bg-dark text-white w-70 rounded-left">Hello, This is another message</div>
                        <div className="clearfix"/>
                    </div>
                </div>
                <div>
                    
                    <div className="input-group my-4">
                        <input type="text" className="form-control" placeholder="Type your message here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary" type="button">SEND</button>
                        </div>
                    </div>
    
    
                </div>
            </div>
    
        );
    }
}

export default ChatBox;