pragma solidity ^0.5.0;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";

contract Registry{

//Is the masterNode only allowed to call this contract?
/*
    address masterNode;

    constructor () public{
        require(msg.sender == masterNode);
    }
*/

    struct node {
        address node;
        address nodeContract;
        uint256 channelID;
        uint256 balance;
        uint256 notificationsPushed;
    }

    struct user{
        address user;
        address preferences;
        //uint256 id; Not sure if required;
    }

    mapping(address => node) nodeRegistry;
    mapping(address => uint256) nodeID;

    address[] iterateNodes;

    function addNode

}