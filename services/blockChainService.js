import contract from 'truffle-contract';
import TalkTalkArtifact from '../build/contracts/TalkTalk';

let web3Instance;

let setWeb3Instance = function() {
    return new Promise((resolve, reject) => {
        if (web3Instance) {
            resolve();
        } else {
            // Wait for loading completion to avoid race conditions with web3 injection timing.
            window.addEventListener('load', function() {
                let web3 = window.web3;
                // Checking if Web3 has been injected by the browser (Mist/MetaMask)
                if (typeof web3 !== 'undefined') {
                    // Use Mist/MetaMask's provider.
                    /* eslint no-use-before-define: 0 */
                    web3 = new Web3(web3.currentProvider);
                    web3Instance = web3;
                } else {
                    // Fallback to localhost if no web3 injection.
                    let provider = new Web3.providers.HttpProvider('localhost:8501');
                    /* eslint no-use-before-define: 0 */
                    web3 = new Web3(provider);
                    web3Instance = web3;
                }

                resolve();
            });
    
            window.addEventListener('load', function() {
                // Checking if Web3 has been injected by the browser (Mist/MetaMask)
                if (typeof web3 !== 'undefined') {
                    // Use the browser's ethereum provider
                    let provider = web3.currentProvider;
                } else {
                    console.log('No web3? You should consider trying MetaMask!');
                }
            });
        }
    });
};

export {
    setWeb3Instance,
};
