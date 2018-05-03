import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {createSetSelectedResponseMessage} from '../action/actionCreator';
import PropTypes from 'prop-types';
import $ from 'jquery';

class Output extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this._closeDialog = this._closeDialog.bind(this);
    }

    _closeDialog(e){
        e.preventDefault();
        this.props.createSetSelectedResponseMessage(null);
    }

    componentWillUpdate(){
        // if(this.props.selectedResponse){
            $('#responseModal').modal('show')
        // }
    }

    render(){
        console.log('selectedResponse: ', this.props.selectedResponse);
        let className = !this.props.selectedResponse? 'secondary' : this.props.selectedResponse.status === 200? 'success' : 'danger';
        return (

            <div className="modal fade" id="responseModal" tabIndex="-1" role="dialog" aria-labelledby="responseModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="responseModalLongTitle">Watson Response</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {this.props.selectedResponse && 
                        <div className="modal-body">
                            <pre>
                                <code>
                                    {JSON.stringify(this.props.selectedResponse.raw, null, 2)}
                                </code>
                            </pre>
                        </div>
                        }
                        <div className="modal-footer">
                            <button type="button" onClick={this._closeDialog} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>



            // <div className={`card border-${className}`} style={{"width": "18rem", "minHeight":"500px"}}>
            //     <div className="card-header text-center">
            //         <h5 className="card-title text-center">Watson Response</h5>
            //     </div>
            //     <div className={`card-body text-${className}`}>
            //     {
            //         this.props.selectedResponse &&
            //         <div>
            //             <h6 className="card-subtitle mb-4">Status: 200</h6>
            //             <pre>
            //                 <code className={`text-${className}`}>
            //                     {JSON.stringify(this.props.selectedResponse.raw, null, 2)}
            //                 </code>
            //             </pre>
            //         </div>
            //     }
                    
            //     </div>
            // </div>
        );
    }
}


Output.propTypes = {
    selectedResponse: PropTypes.any
}

const mapStateToProps = state => {
    return {
        selectedResponse: state.responses.filter(r => r.id === state.selectedResponse)[0] || null
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        createSetSelectedResponseMessage
    },dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Output);