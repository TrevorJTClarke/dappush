pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/lifecycle/Pausable.sol";

contract UserPreferences is Ownable, Pausable {
  address public owner;

  /// @dev the data for each instance of a Preference
  struct Preference {
    bytes webhook;
    bytes email;
    uint32 phone;
  }

  /// @dev Preferences are bound to each dapp
  mapping (address => Preference) dappPrefs;

  constructor() public {
    owner = msg.sender;
  }

  function getPreferenceByDappId(address dappId) whenNotPaused external view
    returns (
      bytes webhook,
      bytes email,
      uint32 phone
    ) {
      Preference memory _pref = dappPrefs[dappId];
      return (
        _pref.webhook,
        _pref.email,
        _pref.phone
      );
    }
}
