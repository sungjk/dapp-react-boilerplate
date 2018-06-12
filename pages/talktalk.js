import React, { Component } from 'react';

import { setWeb3Instance } from '../services/blockChainService';

export default class TalkTalk extends Component {
    static getInitialProps({ req }) {
        return {
        };
    }
    
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        setWeb3Instance();
    }
    
    render() {
        return (
            <div>TalkTalk</div>
        );
    }
}
