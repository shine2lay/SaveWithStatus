/**
 * assume web3 is injected by the status framework
 */

let contractAbi = '' // needs to be updated once smart contract is finalized

/**
 * create a new rosca Object which requires the contract Address and contributionSize
 * @param address
 * @param contributionSize
 */

function roscaContract(address, contributionSize) {
this.rosca = web3.eth.contract(contractAbi).at(address)
this.contributionSize = contributionSize
}

roscaContract.prototype.contribute = function (userAddress, optRosca, optContributionSize) {
let rosca = optRosca || this.rosca
let contributionSize = optContributionSize || this.contributionSize

return rosca.contribute({value: contributionSize, from: userAddress})
}

roscaContract.prototype.withdraw = function (userAddress, optRosca) {
let rosca = optRosca || this.rosca

return rosca.withdraw({from: userAddress})
}

/**
 * members will have the following structure:
 * name : {address: *, balance: * } (balance will be negative if user is in debt)
 * @param optRosca
 * @returns {{currentRound: *, members: {}}}
 */

roscaContract.prototype.stats = function (optRosca) {
let rosca = optRosca || this.rosca

let currentRound = rosca.currentRound.call()
let memberAddresses = this.memberAddresses()
let members = {}
for (let address of memberAddresses) {
let name = this.getUserName(address)
let balance = this.getParticipantBalance(address)
members[name] = {address: address, balance: balance}
}
return {currentRound: currentRound, members: members}
}

roscaContract.prototype.getParticipantBalance = function (userAddress, optRosca) {
let rosca = optRosca || this.rosca

return rosca.getParticipantBalance.call(userAddress)
}

roscaContract.prototype.getBalance = function (optRosca) {
let rosca = optRosca || this.rosca

return web3.eth.getBalance(rosca.address)
}

roscaContract.prototype.getUserName = function (userAddress, optRosca) {
let rosca = optRosca || this.rosca

return rosca.getUserName.call(userAddress)
}

roscaContract.prototype.advance = function (optRosca) {
let rosca = optRosca || this.rosca

return rosca.starRound()
}

roscaContract.prototype.memberAddresses = function (optRosca) {
let rosca = optRosca || this.rosca

return rosca.memberAddresses.call()
