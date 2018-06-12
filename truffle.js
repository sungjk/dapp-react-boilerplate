module.exports = {
    migrations_directory: './migrations',
    networks: {
        development: {
            host: 'localhost',
            port: 8545,
            network_id: '*',
        },
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200,
        },
    },
};
