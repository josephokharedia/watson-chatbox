import React from 'react';
class Output extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this._output = {
            "name":"John",
            "age":30,
            "cars": {
                "car1":"Ford",
                "car2":"BMW",
                "car3":"Fiat"
            }
         };
        this._prettyPrint = this._prettyPrint.bind(this);
    }

    _prettyPrint(){
        return(
            <pre>
                <code>
                    {JSON.stringify(this._output, null, 2)}
                </code>
            </pre>
        );
    }

    render(){
        return (
            <div className="card" style={{"width": "18rem", "minHeight":"500px"}}>
                <div className="card-body">
                    <h5 className="card-title text-center">Watson Response</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <div className="card-text">
                        {this._prettyPrint()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Output;