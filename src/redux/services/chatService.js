import contract from 'truffle-contract';
import ChatArtifact from 'build/contracts/EthChat.json';
import config from 'src/config';

let web3Instance;

let setWeb3Instance = () => {
    return new Promise((resolve, reject) => {
        if (web3Instance) {
            resolve();
        } else {
            // Wait for loading completion to avoid race conditions with web3 injection timing.
            window.addEventListener('load', function() {
                var provider = new Web3.providers.HttpProvider(config.apiEndpoint);
                const web3 = new Web3(provider);
                web3Instance = web3;
                resolve(web3Instance);
            });
            window.addEventListener('load', function() {
                // Checking if Web3 has been injected by the browser (Mist/MetaMask)
                if (typeof web3 !== 'undefined') {
                    // Use the browser's ethereum provider
                    var provider = web3.currentProvider;
                } else {
                    console.log('No web3? You should consider trying MetaMask!');
                    reject('No web3? You should consider trying MetaMask!');
                }
            });
        }
    });
};

let getChatInstance = () => {
    return new Promise((resolve, reject) => {
        const Chat = contract(ChatArtifact);
        Chat.setProvider(web3Instance.currentProvider);
        web3Instance.eth.getAccounts((error, acocunts) => {
            Chat.deployed()
            .then(instance => resolve({ instance, acocunt: acocunts[0] }))
            .catch(error => reject(error));
        });
    });
};

/* define your blockChain function */

export const chatService = {
    setWeb3Instance,
};
