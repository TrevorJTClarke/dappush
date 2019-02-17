pragma solidity ^0.5.0;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";

contract Registry{

    //Is the masterNode only allowed to call this contract?
    //address masterNode;

    constructor(address _node, address _nodeContract, uint256 _channelID, uint256 _balance, uint256 _notificationsPushed) public{
        node.node = _node;
        node.nodeContract = _nodeContract;
        node.channelID = _channelID;
        node.balance = _balance;
        node.notificationsPushed = _notificationsPushed;

        //require(msg.sender == masterNode, "Only owner can access this contract"); Is this true?
    }

    struct node {
        address node;
        address nodeContract;
        uint256 channelID;
        uint256 balance;
        uint256 notificationsPushed;
        //uint256 nodeID
    }

    struct user{
        address user;
        address preferences;
        //uint256 id; Not sure if required;
    }

    mapping(address => node) nodeRegistry;
    //mapping(address => uint256) nodeID; Not sure if needed

    address[] nodes;

    function addNode (address _node) public{
        nodes.push(_node);
    }

    function countNodes() public returns(uint256) {
        uint256 registryLength;
        for (uint i; i < nodes.length; ++i){
            registryLength++;
        }
        return registryLength;
    }

}