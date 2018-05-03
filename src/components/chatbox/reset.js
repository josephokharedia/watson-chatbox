import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  {createResetMessage} from '../../action/actionCreator';
import PropTypes from 'prop-types';

class Reset extends React.Component{

    render(){
        return(
        <div className="shadow-sm py-2">
            <button type="button" onClick={this.props.createResetMessage} className="btn btn-sm btn-outline-secondary">RESET</button>
        </div>
        );
    }
}

Reset.propTypes = {
    createResetMessage: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        createResetMessage
    },dispatch);
};

export default connect(null, mapDispatchToProps)(Reset);