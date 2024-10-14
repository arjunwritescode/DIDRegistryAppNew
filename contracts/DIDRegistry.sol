// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DIDRegistry {
    struct DID {
        string name;
        string documentHash; // Hash of identity data stored on IPFS
        bool isRegistered;
    }

    mapping(address => DID) public dids; // Mapping from address to DID
    mapping(address => mapping(address => bool)) public dataAccessPermissions; // Mapping to manage selective data sharing

    event DIDCreated(address indexed user, string name, string documentHash);
    event DataShared(address indexed owner, address indexed recipient);
    event DataAccessRevoked(address indexed owner, address indexed recipient);

    // Function to register a new DID
    function registerDID(string memory _name, string memory _documentHash) public {
        require(!dids[msg.sender].isRegistered, "DID already registered.");
        dids[msg.sender] = DID(_name, _documentHash, true);
        emit DIDCreated(msg.sender, _name, _documentHash);
    }

    // Function to share data with another user (grant permission)
    function shareData(address _recipient) public {
        require(dids[msg.sender].isRegistered, "DID not registered.");
        dataAccessPermissions[msg.sender][_recipient] = true;
        emit DataShared(msg.sender, _recipient);
    }

    // Function to revoke data sharing permission
    function revokeDataAccess(address _recipient) public {
        require(dids[msg.sender].isRegistered, "DID not registered.");
        require(dataAccessPermissions[msg.sender][_recipient], "No access granted to this address.");
        dataAccessPermissions[msg.sender][_recipient] = false;
        emit DataAccessRevoked(msg.sender, _recipient);
    }

    // Function to check if a user has access to another user's data
    function hasDataAccess(address _owner, address _recipient) public view returns (bool) {
        return dataAccessPermissions[_owner][_recipient];
    }
}
