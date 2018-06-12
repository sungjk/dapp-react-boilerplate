import { Component } from 'react';

import { setWeb3Instance } from '../services/blockChainService';

class Page extends Component {
    componentDidMount() {
        setWeb3Instance();
    }

    render() {
        return (
            <div>Hi</div>
        );
    }
}

export default Page;
