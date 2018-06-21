import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import map from 'lodash/map';

import { chatAction } from 'src/redux/actions/chatAction';

class ChatContainer extends Component {
    static async getInitialProps({ store, query }) {
    
    }
    
    componentDidMount() {
        this.props.setWeb3Instance();
    }
    
    render() {
        let { chats } = this.props;
        
        return (null);
    }
}

function mapStateToProps(state) {
    return {
        chats: state.chats,
    };
}

ChatContainer.propTypes = {
};
ChatContainer.defaultProps = {
};

export { ChatContainer };
export default connect(mapStateToProps, {
    setWeb3Instance: chatAction.setWeb3Instance,
})(ChatContainer);
