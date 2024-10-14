// const HDWalletProvider = require('@truffle/hdwallet-provider');
// require('dotenv').config(); // Load environment variables from a .env file

// const privateKey = process.env.PRIVATE_KEY; // Load private key from .env
// const alchemyApiKey = process.env.ALCHEMY_API_KEY; // Load Alchemy API key from .env

// // Ensure the private key is in the correct format (without '0x' prefix)
// const formattedPrivateKey = privateKey.startsWith('0x') ? privateKey.slice(2) : privateKey;

// // Debug logging (remove in production)
// console.log('Private key length:', privateKey ? privateKey.length : 'not set');
// console.log('Formatted private key length:', formattedPrivateKey ? formattedPrivateKey.length : 'not set');
// console.log('Alchemy API key length:', alchemyApiKey ? alchemyApiKey.length : 'not set');

// module.exports = {
//   networks: {
//     // Local development network (Ganache)
//     development: {
//       host: "127.0.0.1",     // Localhost (default: none)
//       port: 8545,            // Standard Ganache port (default: none)
//       network_id: "*",       // Match any network id
//     },

//     // Goerli testnet (replacing Rinkeby)
//     goerli: {
//       provider: () => {
//         if (!privateKey || !alchemyApiKey) {
//           throw new Error('Please set your PRIVATE_KEY and ALCHEMY_API_KEY in the .env file');
//         }
//         return new HDWalletProvider({
//           privateKeys: [formattedPrivateKey],
//           providerOrUrl: `https://eth-goerli.alchemyapi.io/v2/${alchemyApiKey}`,
//           pollingInterval: 8000 // Increase polling interval to reduce load
//         });
//       },
//       network_id: 5,       // Goerli's network ID
//       gas: 5500000,        // Gas limit
//       gasPrice: 20000000000,  // 20 gwei (adjust as needed)
//       confirmations: 2,    // # of confirmations to wait between deployments
//       timeoutBlocks: 200,  // # of blocks before a deployment times out
//       skipDryRun: true,    // Skip dry run before migrations
//       networkCheckTimeout: 10000, // Increase timeout for network connection
//     }
//   },

//   // Set default mocha options here, use special reporters, etc.
//   mocha: {
//     timeout: 100000
//   },

//   // Configure your compilers
//   compilers: {
//     solc: {
//       version: "0.5.16",    // Updated to a more recent version
//       settings: {          // See the solidity docs for advice about optimization and evmVersion
//         optimizer: {
//           enabled: true,
//           runs: 200
//         },
//       }
//     }
//   }
// }



// const HDWalletProvider = require('@truffle/hdwallet-provider');
// require('dotenv').config(); // Load environment variables from a .env file

// const privateKey = process.env.PRIVATE_KEY; // Load private key from .env
// console.log('Private Key:', privateKey); // Debugging

// module.exports = {
//   networks: {
//     // Local development network (Ganache)
//     development: {
//       host: "127.0.0.1",     // Localhost (default: none)
//       port: 7545,            // Standard Ganache port (default: none)
//       network_id: "*",       // Match any network id
//     },
    
//     // Sepolia testnet
//     sepolia: {
//       provider: () => new HDWalletProvider(
//         privateKey, // Your wallet's private key
//         `https://eth-sepolia.g.alchemy.com/v2/lvGxcBTgpSowpm4Q72GsgWdgPrXlA59R}` // Alchemy API key for Sepolia
//       ),
//       network_id: 11155111, // Sepolia's network ID
//       gas: 5500000,         // Gas limit
//       confirmations: 2,     // # of confirmations to wait between deployments
//       timeoutBlocks: 200,   // # of blocks before a deployment times out
//       skipDryRun: true      // Skip dry run before migrations (default: false for public nets)
//     }
//   },

//   // Set default mocha options here, use special reporters, etc.
//   mocha: {
//     timeout: 100000
//   },

//   // Configure your compilers
//   compilers: {
//     solc: {
//       version: "0.5.16",    // Fetch exact version from solc-bin (default: truffle's version)
//       settings: {          // See the solidity docs for advice about optimization and evmVersion
//         optimizer: {
//           enabled: true,
//           runs: 200
//         },
//       }
//     }
//   }
// };




const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config(); // Load environment variables from a .env file

const privateKey = process.env.PRIVATE_KEY; // Load private key from .env
console.log('Private Key:', privateKey); // Debugging

const alchemyApiKey = process.env.ALCHEMY_API_KEY; // Load Alchemy API key from .env
const alchemyNetwork = process.env.NETWORK || 'ETH_SEPOLIA'; // Default to Sepolia if not specified

module.exports = {
  networks: {
    // Local development network (Ganache)
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ganache port (default: none)
      network_id: "*",       // Match any network id
    },
    
    // Sepolia testnet
    sepolia: {
      provider: () => new HDWalletProvider(
        privateKey, // Your wallet's private key
        `https://eth-sepolia.g.alchemy.com/v2/lvGxcBTgpSowpm4Q72GsgWdgPrXlA59R` // Alchemy API key for Sepolia
      ),
      network_id: 11155111, // Sepolia's network ID
      gas: 5000000,
      gasPrice: 5000000000,         // Gas limit
      confirmations: 2,     // # of confirmations to wait between deployments
      timeoutBlocks: 200,   // # of blocks before a deployment times out
      skipDryRun: true      // Skip dry run before migrations (default: false for public nets)
    }
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (updated to match latest practices)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    }
  }
};
