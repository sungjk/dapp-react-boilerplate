pragma solidity ^0.4.23;

import "./Ownable.sol";
import "./Strings.sol";

contract EthChat {

    event CreatedSpace(uint spaceId, string name, address owner);
    event MemberJoined(uint spaceId, address member);
    event NewMessage(uint spaceId, address member, string message);

    struct Message {
        uint timestamp;
        address writer;
        string message;
    }

    struct Space {
        string name;
        address owner;
        uint num_members;
        uint num_messages;
        mapping (uint => address) members;
        mapping (uint => Message) messages;
    }

    uint num_spaces;
    mapping (uint => Space) spaces;

    modifier existsSpace(uint _spaceId) {
        require(_spaceId >= 0 && bytes(spaces[_spaceId].name).length > 0);
        _;
    }

    modifier newMember(uint _spaceId, address _member) {
        require(_spaceId >= 0 && !isJoined(_spaceId, _member));
        _;
    }

    modifier membership(uint _spaceId, address _member) {
        require(_spaceId >= 0 && !isJoined(_spaceId, _member));
        _;
    }

    function isJoined(uint _spaceId, address _member) internal view returns (bool joined) {
        Space storage s = spaces[_spaceId];
        for (uint i = 0; i < s.num_members; i++) {
            if (s.members[i] == msg.sender) {
                return true;
            }
        }
        return false;
    }

    function createSpace(string _name) external {
        require(bytes(_name).length > 0);

        Space storage s = Space(_name, msg.sender, 0, 0);
        s.owner = msg.sender;
        uint spaceId = spaces.push(s);
        num_spaces++;
        emit CreatedSpace(spaceId, _name, owner);
        joinSpace(spaceId);
    }

    function joinSpace(uint _spaceId) public existsSpace(_spaceId) newMember(_spaceId, msg.sender) {
        Space storage s = spaces[_spaceId];
        s.members[s.num_members++] = msg.sender;
        emit MemberJoined(_spaceId, msg.sender);
    }

    function write(uint _spaceId, string _message) external existsSpace(_spaceId) membership(_spaceId, msg.sender) {
        require(bytes(_message).length > 0);

        Space storage s = spaces[_spaceId];
        s.messages[num_messages++] = Message(now, msg.sender, _message);
        emit NewMessage(_spaceId, msg.sender, _message);
    }
}
