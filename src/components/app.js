import React from 'react';
import ChatBox from './chatbox/chatbox';
import Output from './output';
const App = () => {
    return (
        <div className="row mt-5">
            <div className="col-4" ></div>
            <div className="col-4">
                <ChatBox />
            </div>
            <div className="col-4">
                {/* <Output /> */}
            </div>
        </div>
        
    );
}
export default App;