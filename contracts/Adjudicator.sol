pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";

contract Adjudicator is Ownable, Pausable {
  using SafeMath for uint256;

  address public owner;

  enum StateType { PreFundSetup, PostFundSetup, Queue, Conclude }

  struct StateStruct {
    address channelType;
    uint256 channelNonce;
    uint256 numberOfParticipants;
    address[] participants;
    uint8 stateType;
    /* uint256 turnNum;
    uint256 stateCount;
    uint256[] resolution;
    bytes gameAttributes; */
  }

}
