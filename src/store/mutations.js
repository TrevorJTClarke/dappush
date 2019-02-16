export default {
  CLEAR_ACCOUNT(state) {
    state.account = null
  },
  USE_ACCOUNT(state, account) {
    state.account = account
  },
  USE_CONTRACT(state, { contract, address }) {
    state.Contract = contract.at(address)
  },
  CLEAR_CONTRACT(state) {
    state.Contract = null
  },
  SET_ABI(state, abi) {
    state.abi = abi
  }
}
