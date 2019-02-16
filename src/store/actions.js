// import Web3 from 'web3'
import dotenv from 'dotenv'
dotenv.load()

const getAbiDeployedAddress = abi => {
  const networks = abi.networks
  return networks[Math.max(...Object.keys(networks))].address
}

export default {
  mountContract({ commit, state }) {
    commit('CLEAR_CONTRACT')
    commit('USE_CONTRACT', {
      contract: window.web3.eth.contract(state.abi.abi),
      address: getAbiDeployedAddress(state.abi.abi)
    })
  }
}
