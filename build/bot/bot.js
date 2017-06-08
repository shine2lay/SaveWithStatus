var DB_PREFIX = 'savewithstatus_'
var CIRCLE_ABI = [{'constant': true, 'inputs': [], 'name': 'contributionSize', 'outputs': [{'name': '', 'type': 'uint128'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [], 'name': 'withdraw', 'outputs': [{'name': 'success', 'type': 'bool'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [], 'name': 'startRound', 'outputs': [], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [{'name': '', 'type': 'uint256'}], 'name': 'membersAddresses', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'endOfROSCA', 'outputs': [{'name': '', 'type': 'bool'}], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'currentRound', 'outputs': [{'name': '', 'type': 'uint16'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'index', 'type': 'uint256'}], 'name': 'getUserName', 'outputs': [{'name': 'userName', 'type': 'string'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [], 'name': 'getMemberCount', 'outputs': [{'name': 'memberCount', 'type': 'uint256'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'newMember', 'type': 'address'}, {'name': 'userName', 'type': 'string'}], 'name': 'addMember', 'outputs': [], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'roundPeriodInSecs', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [], 'name': 'contribute', 'outputs': [], 'payable': true, 'type': 'function'}, {'constant': true, 'inputs': [{'name': 'user', 'type': 'address'}], 'name': 'getParticipantBalance', 'outputs': [{'name': '', 'type': 'int256'}], 'payable': false, 'type': 'function'}, {'inputs': [{'name': 'contributionSize_', 'type': 'uint128'}, {'name': 'userName', 'type': 'string'}], 'payable': false, 'type': 'constructor'}]
var CIRCLE_BYTECODE = '0x60606040526000600360006101000a81548160ff0219169083151502179055506000600360016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034156200006a57fe5b6040516200195038038062001950833981016040528080519060200190919080518201919050505b6201518060008190555081600160026101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555042600281905550620000fc3382620001056401000000000262000987176401000000009004565b5b5050620003d8565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160029054906101000a900460ff1615620001615760006000fd5b6080604051908101604052806000815260200160001515815260200160001515815260200160011515815250600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff02191690831515021790555060408201518160010160016101000a81548160ff02191690831515021790555060608201518160010160026101000a81548160ff021916908315150217905550905050600680548060010182816200024f9190620002fa565b916000526020600020900160005b84909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209080519060200190620002f492919062000329565b505b5050565b8154818355818115116200032457818360005260206000209182019101620003239190620003b0565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200036c57805160ff19168380011785556200039d565b828001600101855582156200039d579182015b828111156200039c5782518255916020019190600101906200037f565b5b509050620003ac9190620003b0565b5090565b620003d591905b80821115620003d1576000816000905550600101620003b7565b5090565b90565b61156880620003e86000396000f300606060405236156100b8576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633979c5ab146100ba5780633ccfd60b1461010457806355e3f0861461012e5780635ee5a3c61461014057806385860a70146101a05780638a19c8bc146101ca578063988da80f146101f8578063997072f71461029f578063c127c247146102c5578063c94177831461033e578063d7bb99ba14610364578063e9560b3b1461036e575bfe5b34156100c257fe5b6100ca6103b8565b60405180826fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561010c57fe5b6101146103da565b604051808215151515815260200191505060405180910390f35b341561013657fe5b61013e610702565b005b341561014857fe5b61015e60048080359060200190919050506107ef565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101a857fe5b6101b061082f565b604051808215151515815260200191505060405180910390f35b34156101d257fe5b6101da610842565b604051808261ffff1661ffff16815260200191505060405180910390f35b341561020057fe5b6102166004808035906020019091905050610856565b6040518080602001828103825283818151815260200191508051906020019080838360008314610265575b80518252602083111561026557602082019150602081019050602083039250610241565b505050905090810190601f1680156102915780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156102a757fe5b6102af610979565b6040518082815260200191505060405180910390f35b34156102cd57fe5b61033c600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610987565b005b341561034657fe5b61034e610b77565b6040518082815260200191505060405180910390f35b61036c610b7d565b005b341561037657fe5b6103a2600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610d1d565b6040518082815260200191505060405180910390f35b600160029054906101000a90046fffffffffffffffffffffffffffffffff1681565b60006000600060006000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160029054906101000a900460ff1615156104405760006000fd5b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff1680156104a95750600360009054906101000a900460ff16155b156104b45760006000fd5b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549350600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff1661059957600160029054906101000a90046fffffffffffffffffffffffffffffffff16600160009054906101000a900461ffff1661ffff16026fffffffffffffffffffffffffffffffff166105d2565b600160029054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16600680549050025b925083831015156105e35760006000fd5b82840391503073ffffffffffffffffffffffffffffffffffffffff163190508181101561060e578091505b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051809050600060405180830381858888f1935050505015156106f55781600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282540192505081905550600094506106fa565b600194505b5b5050505090565b6000600360009054906101000a900460ff161561071f5760006000fd5b600054600160009054906101000a900461ffff1661ffff16026002540190508042101561074c5760006000fd5b6000600160009054906101000a900461ffff1661ffff1614151561077357610772610e69565b5b600680549050600160009054906101000a900461ffff1661ffff1610156107ce576001600081819054906101000a900461ffff168092919060010191906101000a81548161ffff021916908361ffff160217905550506107ea565b6001600360006101000a81548160ff0219169083151502179055505b5b5b50565b6006818154811015156107fe57fe5b906000526020600020900160005b915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900460ff1681565b600160009054906101000a900461ffff1681565b61085e611457565b6007600060068481548110151561087157fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561096c5780601f106109415761010080835404028352916020019161096c565b820191906000526020600020905b81548152906001019060200180831161094f57829003601f168201915b505050505090505b919050565b600060068054905090505b90565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160029054906101000a900460ff16156109e25760006000fd5b6080604051908101604052806000815260200160001515815260200160001515815260200160011515815250600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff02191690831515021790555060408201518160010160016101000a81548160ff02191690831515021790555060608201518160010160026101000a81548160ff02191690831515021790555090505060068054806001018281610ace919061146b565b916000526020600020900160005b84909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209080519060200190610b71929190611497565b505b5050565b60005481565b600060006000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160029054906101000a900460ff161515610bdf5760006000fd5b600360009054906101000a900460ff1615610bfa5760006000fd5b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002092503491508183600001600082825401925050819055508260010160009054906101000a900460ff1615610d1557600160029054906101000a90046fffffffffffffffffffffffffffffffff16600160009054906101000a900461ffff1661ffff16026fffffffffffffffffffffffffffffffff16905080600160029054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1660068054905002846000015403101515610d145760008360010160006101000a81548160ff0219169083151502179055505b5b5b5b5b505050565b600060006000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549150600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff168015610dd15750600360009054906101000a900460ff16155b15610e1357600160029054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1660068054905002820391505b600160029054906101000a90046fffffffffffffffffffffffffffffffff16600160009054906101000a900461ffff1661ffff16026fffffffffffffffffffffffffffffffff16905080820392505b5050919050565b600060006001600160009054906101000a900461ffff1603600680549050039050610e9381610eb3565b9150610ea6826001830361ffff1661124d565b610eae611363565b5b5050565b6000600060006000600060006000600095508761ffff1642811515610ed457fe5b069350600092505b8761ffff168361ffff161015611084578761ffff168361ffff168501811515610f0157fe5b069150600682815481101515610f1357fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900460ff16151561107657819450600160029054906101000a90046fffffffffffffffffffffffffffffffff16600160009054906101000a900461ffff1661ffff16026fffffffffffffffffffffffffffffffff16600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541015156110725780600360016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611084565b8095505b5b8280600101935050610edc565b6000600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156112005760008673ffffffffffffffffffffffffffffffffffffffff1614806111365750600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900460ff165b156111415760006000fd5b85600360016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160056000600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff0219169083151502179055505b600680549050600160029054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16026004819055508496505b505050505050919050565b60068181548110151561125c57fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660068381548110151561129857fe5b906000526020600020900160005b6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660068281548110151561131457fe5b906000526020600020900160005b6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5050565b60045460056000600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282540192505081905550600160056000600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160016101000a81548160ff0219169083151502179055505b565b602060405190810160405280600081525090565b815481835581811511611492578183600052602060002091820191016114919190611517565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106114d857805160ff1916838001178555611506565b82800160010185558215611506579182015b828111156115055782518255916020019190600101906114ea565b5b5090506115139190611517565b5090565b61153991905b8082111561153557600081600090555060010161151d565b5090565b905600a165627a7a72305820e57126663edea7f2cd7f76e55ff3328f1eb6f6f0d0a1abbe2c65ab746fce91700029'
var LendingCircle = web3.eth.contract(CIRCLE_ABI)

var COLORS = {
  DEFAULT_COMMAND: '#333FFF',
  BALANCE_POSITIVE: 'green',
  BALANCE_NEGATIVE: 'red',
  BALANCE_NEUTRAL: 'black',
  BORDER: '#0000001f'
}

var STYLES = {
  SUGGESTIONS_HEADING: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER,
    paddingTop: 10,
    paddingBottom: 10,
    // these two lines keep the border off the edge, looks a tiny bit nicer
    marginLeft: 10,
    marginRight: 10,
    // separates the heading from the rest of the text
    marginBottom: 10
  },
  COMMAND_PREVIEW: {
    borderTopWidth: 1,
    borderTopColor: COLORS.BORDER,
    paddingTop: 5,
    marginTop: 5
  }
}

function createCircleNameParam(optional) {
  if (!optional) optional = {}
  var circleNameParam = {
    name: 'circleName',
    placeholder: optional.placeholder || 'Lending Circle Name',
    type: status.types.TEXT,
    suggestions: optional.suggestions || selectCircleSuggestions
  }
  return circleNameParam
}

function commandTextComponent(command) {
  return status.components.text({style: {fontWeight: 'bold'}}, command)
}

function selectCircleSuggestions(params, context) {
  var circles = getAllCircles()
  var components
  components = circles.map(function(circle) {
    return status.components.touchable(
      {onPress: status.components.dispatch([status.events.SET_COMMAND_ARGUMENT, [0, circle.name]])},
      status.components.view(
        {style: {borderBottomWidth: 1, borderBottomColor: COLORS.BORDER}},
        [status.components.text(
          {style: {padding: 20}},
          circle.name
        )]
      )
    )
  })
  if (circles.length === 0) {
    var textLineStyle = {flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, flexWrap: 'wrap'}
    // pretty revolting but what are ya gonna do about it? it's a hackathon not a mr fancy-pantsathon
    components = [status.components.text({style: STYLES.SUGGESTIONS_HEADING}, 'It doesn\'t look like you have joined any Circles yet.'),
      status.components.view({style: textLineStyle}, [
        status.components.text({}, 'To create a circle, hit '),
        commandTextComponent('/create'),
        status.components.text({}, ' down below.')
      ]),
      status.components.view({style: textLineStyle}, [
        status.components.text({}, 'To join an existing one, hit '),
        commandTextComponent('/join')
      ]),
      status.components.view({style: textLineStyle}, [
        status.components.text({}, 'If you\'re already a member of a circle, hit '),
        commandTextComponent('/load'),
        status.components.text({}, ' to bring it into Status.im.')
      ])]
  }
  return {markup: status.components.scrollView({
    // this prop is necessary to make sure that the first tap doesn't just close the keyboard!
    keyboardShouldPersistTaps: 'always',
  }, components)}
}

// // TODO(tom) figure out why this does not work properly
// // function helpAsSuggestions(title, paragraphs) {
// //   var helpTitleStyle = {style: {fontWeight: 'bold'}}
// //   var helpParagraphStyle = {style: {marginTop: 10}}
// //   var components = [status.components.text(helpTitleStyle, title)]
// //   for (var i = 0; i < paragraphs.length; i++) {
// //     components.push(status.components.text(helpParagraphStyle, paragraphs[i]))
// //   }
// //   var markup = status.components.view({style: {margin: 10}}, components)
// //   return {markup: markup}
// // }

function circleNameSuggestions() {
  // return {markup: helpAsSuggestions(
  //   'Name your Lending Circle',
  //   ['This will help other folks find it easily once they know your Status address.',
  //     'You could call it "Super Status Savings" or something equally fun!'])
  // }
  var circleNameSuggestions = status.components.view({style: {margin: 10}}, [
    status.components.text({style: {fontWeight: 'bold'}}, 'Name your Lending Circle'),
    status.components.text({style: {marginTop: 10}}, 'This will help other folks find it easily once they know your Status address.'),
    status.components.text({style: {marginTop: 10}}, 'You could call it "Super Status Savings" or something equally fun!')
  ])
  return {markup: circleNameSuggestions}
}

// function paymentAmountSuggestions() {
//   // return {markup: helpAsSuggestions(
//   //   'How much ETH/day?',
//   //   ['This is the amount of ETH which everyone should contribute to the circle per week.',
//   //     'Try to choose an amount which isn\'t too expensive! There\'s a maximum of 10 ETH to prevent you going overboard, we know what you\'re like, big spender.']
//   // )}
//   var paymentAmountSuggestions = status.components.view({style: {margin: 10}}, [
//     status.components.text({style: {fontWeight: 'bold'}}, 'How much ETH/week?'),
//     status.components.text({style: {marginTop: 10}}, 'This is the amount of ETH which everyone should contribute to the circle per week.'),
//     status.components.text({style: {marginTop: 10}}, 'Try to choose an amount which isn\'t too expensive! There\'s a maximum of 10 ETH to prevent you going overboard, we know what you\'re like, big spender.')
//   ])
//   return {markup: paymentAmountSuggestions}
// }

function contractAddressSuggestions(params, context) {
  // return {markup: helpAsSuggestions(
  //   'Contract Address',
  //   ['This is the public contract address of the Lending Circle.',
  //     'It should have been given to you by the creator, best give them a prod if you don\'t have it :)']
  // )}
  var circleNameSuggestions = status.components.view({style: {margin: 10}}, [
    status.components.text({style: {fontWeight: 'bold'}}, 'Contract Address'),
    status.components.text({style: {marginTop: 10}}, 'This is the public contract address of the Lending Circle.'),
    status.components.text({style: {marginTop: 10}}, 'It should have been given to you by the creator, best give them a prod if you don\'t have it :)')
  ])
  return {markup: circleNameSuggestions}
}

function suggestionsFunction(number) {
  return {markup: status.components.view({}, [status.components.text({}, 'Suggestion ' + number)])}
}

// var testCommand = {
//   name: 'test',
//   title: 'Test',
//   sequentialParams: true,
//   params: [{
//     name: 'one',
//     type: status.types.TEXT,
//     suggestions: suggestionsFunction(1)
//   }, {
//     name: 'two',
//     type: status.types.NUMBER,
//     suggestions: suggestionsFunction(2)
//   }]
// }

// status.command(testCommand)
// status.response(testCommand)

status.addListener('confirm-delete', function(params, context) {
  var message = JSON.stringify(params)
  status.sendMessage(message)
})

var removeCommand = {
  name: 'remove',
  title: 'Remove',
  description: 'Remove a Lending Circle from your device',
  color: COLORS.DEFAULT_COMMAND,
  sequentialParams: true,
  params: [createCircleNameParam()],
  preview: function(params, context) {},
  handler: function(params, context) {
    var address = getCircleAddress(params.circleName)
    var circles = getAllCircles()
    circles = deleteCircle(circles, address)
    saveAllCircles(circles)
    status.sendMessage('Ok, we have removed "*' + params.circleName + '*".\nHit */load* if you want to add it back again.')
  }
}

status.command(removeCommand)
status.response(removeCommand)

var createCommand = {
  name: 'create',
  title: 'Create',
  description: 'Create a new Lending Circle',
  color: COLORS.DEFAULT_COMMAND,
  sequentialParams: true,
  params: [{
    name: 'name',
    placeholder: 'Give it a name',
    type: status.types.TEXT,
    suggestions: circleNameSuggestions
  }, {
    name: 'paymentAmount',
    placeholder: 'How much ETH/week',
    type: status.types.NUMBER,
    suggestions: circleNameSuggestions
  }],
  validator: function(params) {
    var error
    if (params.paymentAmount < 0.001) {
      error = status.components.validationMessage(
        'Not enough ETH',
        'What is this, a Lending Circle for ants?'
      )
      return {markup: error}
    }
  },
  preview: function(params, context) {
    var message = 'Name: ' + params.name + '. Weekly contribution: ' + params.paymentAmount + ' ETH.'
    return {markup: status.components.text({}, message)}
  },
  handler: function(params, context) {
    status.sendMessage('Ok, we just need you to confirm that, one sec...')
    var circle = LendingCircle.new(web3.toWei(params.paymentAmount, 'ether'), getMyName(), {
      from: web3.eth.accounts[0],
      data: CIRCLE_BYTECODE
    })
    status.sendMessage('This bit might take a little while...')
    var receipt = waitForMining(circle.transactionHash)
    status.sendMessage('Done! Send your friends the below address and they can join your circle.')
    status.sendMessage(receipt.contractAddress)
    saveNewCircle({name: params.name, address: receipt.contractAddress, participants: [{name: getMyName(), address: web3.eth.accounts[0]}]})
  }
}

function waitForMining(txHash) {
  var mined = false
  var receipt
  while (!mined) {
    receipt = web3.eth.getTransactionReceipt(txHash)
    if (!receipt) continue
    if (receipt.contractAddress || receipt.gasUsed) mined = true
  }
  return receipt
}

function saveNewCircle(newCircle) {
  var circles = getAllCircles()
  if (!Array.isArray(circles)) {
    circles = []
  } else if (circleAlreadySaved(circles, newCircle.address)) {
    circles = deleteCircle(circles, newCircle.address)
  }
  circles.push(newCircle)
  saveAllCircles(circles)
}

function circleAlreadySaved(circles, newCircleAddress) {
  return getCircleIndex(circles, newCircleAddress) !== -1
}

function getCircleIndex(circles, newCircleAddress) {
  for (var i = 0; i < circles.length; i++) {
    if (!circles[i].address) return -1
    if (circles[i].address.toLowerCase() === newCircleAddress.toLowerCase()) return i
  }
  return -1
}

function deleteCircle(circles, circleAddress) {
  if (getCircleIndex(circles, circleAddress) === -1) return
  circles.splice(getCircleIndex(circles, circleAddress), 1)
  return circles
}

function getMyName() {
  var name = getFromDb('username')
  return name || web3.eth.accounts[0]
}

var joinCommand = {
  name: 'join',
  title: 'Join',
  description: 'Join an existing Lending Circle',
  color: COLORS.DEFAULT_COMMAND,
  sequentialParams: true,
  params: [{
    name: 'contractAddress',
    placeholder: 'Contract Address',
    type: status.types.TEXT,
    suggestions: contractAddressSuggestions
  },
    createCircleNameParam({placeholder: 'Give the Circle a nickname'})
  ],
  validator: function(params, context) {
    if (!web3.isAddress(params.contractAddress)) {
      return {markup: status.components.validationMessage(
        'Not a real contract address',
        'Maybe you made a typo? We recommend copy & paste.'
      )}
    }
  },
  preview: function(params, context) {
    return {'text-message': 'Join "' + params.name + '"'}
  },
  handler: function(params, context) {
    status.sendMessage('Okay, hang on while we try to join "' + params.circleName + '" for you. Shouldn\'t be too long...')
    var circle = LendingCircle.at(params.contractAddress)
    var tx = circle.addMember(web3.eth.accounts[0], getMyName(), {from: web3.eth.accounts[0]})
    status.sendMessage('Crunch, whirr, creak...')
    var receipt = waitForMining(tx)
    var participants = getCircleParticipants(circle)
    participants.push(getMyName())
    saveNewCircle({address: circle.address, name: params.circleName, participants: participants})
    status.sendMessage('Alright! We joined the circle, now you should be able to contribute!\n\nTry it out using the */contribute* command down below.')
  }
}

var loadCommand = {
  name: 'load',
  title: 'Load',
  description: 'Load an existing Circle',
  color: COLORS.DEFAULT_COMMAND,
  sequentialParams: true,
  params: [{
    name: 'contractAddress',
    type: status.types.TEXT,
    placeholder: 'Contract address of the Circle'
  },
    createCircleNameParam({placeholder: 'Give the Circle a nickname'})
  ],
  preview: function(params, context) {
    return {markup: status.components.text({style: STYLES.COMMAND_PREVIEW}, 'Load "' + params.circleName + '"')}
  },
  handler: function(params, context) {
    var circle = LendingCircle.at(params.contractAddress)
    var dbSafeCircle = parseContractForDb(circle, params.circleName)
    saveNewCircle(dbSafeCircle)
    status.sendMessage('Okey dokey, I\'ll load that contract and save it as ' +
      '"' + params.circleName + '".\n\nHit */stats* if you need a reminder about the status of this Circle.')
  }
}

function parseContractForDb(circle, name) {
  var participants = getCircleParticipants(circle)
  var safeCircle = {address: circle.address, name: name, participants: participants}
  return safeCircle
}

function getCircleParticipants(circle) {
  var participantCount = circle.getMemberCount.call({from: web3.eth.accounts[0]})
  var participants = []
  for (var i = 0; i < participantCount; i++) {
    var participantAddress = circle.membersAddresses.call(i, {from: web3.eth.accounts[0]})
    if (isAlreadySavedAsParticipant(circle.address, participantAddress)) continue
    participants.push({address: participantAddress, name: circle.getUserName.call(i, {from: web3.eth.accounts[0]})})
  }
  return participants
}

function isAlreadySavedAsParticipant(circleAddress, participantAddress) {
  var circle = getCircleFromDb(circleAddress)
  if (!circle) return false
  for (var i = 0; i < circle.participants.length; i++) {
    if (circle.participants[i].address.toLowerCase() === participantAddress.toLowerCase()) return true
  }
  return false
}

function getCircleFromDb(contractAddress) {
  var circles = getAllCircles()
  if (!circles) return false
  for (var i = 0; i < circles.length; i++) {
    if (circles[i].address.toLowerCase() === contractAddress.toLowerCase()) return circles[i]
  }
  return false
}

var statsCommand = {
  name: 'stats',
  title: 'Stats',
  description: 'Check the stats of a Lending Circle',
  color: COLORS.DEFAULT_COMMAND,
  sequentialParams: true,
  params: [createCircleNameParam()],
  fullscreen: true,
  validator: function(params, context) {},
  preview: function(params, context) {
    status.sendMessage('Ok, I\'ll fetch the stats for "' + params.circleName + '", one tick...')
    var circle = getCircleFromSelection(params.circleName)
    status.sendMessage('The contract address for this Circle is printed in the next message, so you can share it easily:')
    status.sendMessage(circle.address)
    var participants = getCircleParticipants(circle)
    var components = [
      status.components.view({paddingBottom: 5}, [
        status.components.text({}, 'A green balance indicates that the person has contributed enough so far,' +
          ' whereas a red balance indicates that the person still needs to contribute to the circle to be up-to-date.')
      ])
    ]
    var longestName = 0
    for (var i = 0; i < participants.length; i++) {
      var participant = participants[i]
      var balance = circle.getParticipantBalance(participant.address)
      var currentRound = circle.currentRound.call()
      if (participant.name.length > longestName) longestName = participant.name.length
      var color = balance >= 0 ? COLORS.BALANCE_POSITIVE : COLORS.BALANCE_NEGATIVE
      color = balance === 0 ? COLORS.BALANCE_NEUTRAL : color
      var totalContributed = getTotalContributed(circle, participant.address) + getPlusOrMinus(balance) + ' ETH'
      components.push(
        status.components.view({style: {
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}, [
          status.components.text({style: {paddingRight: 20}}, participant.name),
          status.components.text({style: {fontWeight: 'bold', color: color}}, totalContributed)
        ])
      )
    }
    return {markup:
      status.components.view({style: STYLES.COMMAND_PREVIEW}, components)
    }
  },
  handler: function(params, context) {
  }
}

function getPlusOrMinus(balance) {
  var ethBalance = web3.fromWei(balance, 'ether')
  if (ethBalance == 0) return ''
  return ' (' + ethBalance + ')'
}

function getTotalContributed(circle, participantAddress) {
  var paymentAmount = circle.contributionSize.call({from: web3.eth.accounts[0]})
  var balance = circle.getParticipantBalance(participantAddress, {from: web3.eth.accounts[0]})
  var currentRound = circle.currentRound.call({from: web3.eth.accounts[0]})
  var totalContributed = web3.fromWei(balance, 'ether').toNumber() + (web3.fromWei(paymentAmount, 'ether') * currentRound)
  return totalContributed
}

var contributeCommand = {
  name: 'contribute',
  title: 'Contribute',
  description: 'Contribute to a Lending Circle',
  color: COLORS.DEFAULT_COMMAND,
  params: [createCircleNameParam()],
  fullscreen: true,
  validator: circleNameValidator,
  preview: function(params, context) {},
  handler: function(params, context) {
    status.sendMessage('Righto, give me a moment...')
    var circle = getCircleFromSelection(params.circleName)
    var contributionAmount = circle.contributionSize.call({from: web3.eth.accounts[0]})
    var tx = circle.contribute({value: contributionAmount, from: web3.eth.accounts[0]})
    status.sendMessage('Your contribution of ' + web3.fromWei(contributionAmount, 'ether') + ' ETH is on the way!')
    waitForMining(tx)
    var myBalance = web3.fromWei(circle.getParticipantBalance(web3.eth.accounts[0], {from: web3.eth.accounts[0]}), 'ether')
    status.sendMessage('Woohoo! Your new balance in this circle is: +' + myBalance + ' ETH.')
  }
}

var startCommand = {
  name: 'start',
  title: 'Start',
  color: COLORS.DEFAULT_COMMAND,
  description: 'Start a Lending Circle, nobody else can join after this',
  sequentialParams: true,
  params: [createCircleNameParam()],
  fullscreen: true,
  validator: circleNameValidator,
  preview: function(params, context) {},
  handler: function(params, context) {
    status.sendMessage('Ok, I\'ll get right to it...')
    var circle = getCircleFromSelection(params.circleName)
    var currentRound = circle.currentRound.call({from: web3.eth.accounts[0]})
    var nextRound = parseInt(currentRound) + 1
    status.sendMessage('Starting the next round (round ' + nextRound + '), hang on...')
    var tx = circle.startRound({from: web3.eth.accounts[0]})
    waitForMining(tx)
    status.sendMessage('Excellent, we\'re now in round ' + nextRound + '!\n\nHit */stats* to see how things stand right now.')
  }
}

var withdrawCommand = {
  name: 'withdraw',
  title: 'Withdraw',
  description: 'Withdraw from a Lending Circle',
  color: COLORS.DEFAULT_COMMAND,
  params: [createCircleNameParam()],
  fullscreen: true,
  validator: circleNameValidator,
  preview: function(params, context) {},
  handler: function(params, context) {
    status.sendMessage('Hang on, I\'ll just check whether you have anything to withdraw...')
    var circle = getCircleFromSelection(params.circleName)
    var balance = circle.getParticipantBalance.call(web3.eth.accounts[0], {from: web3.eth.accounts[0]})
    var ethBalance = web3.fromWei(balance, 'ether')
    if (ethBalance <= 0) {
      status.sendMessage('You don\'t have anything to withdraw at the moment')
      if (ethBalance < 0) {
        status.sendMessage('In fact, you\'re actually in debt by about ' + Math.abs(ethBalance) + ' ETH, you should think about contributing sometime :P')
      }
      return
    }
    status.sendMessage('Withdrawing ~' + ethBalance + ' ETH...')
    var tx = circle.withdraw({from: web3.eth.accounts[0]})
    status.sendMessage('Pretend that this message is a loading spinner...')
    waitForMining(tx)
    status.sendMessage('Awesome, you should now have your Ether, try not to spend it all at once!')
  }
}

var userNameCommand = {
  name: 'name',
  title: 'SetName',
  color: COLORS.DEFAULT_COMMAND,
  description: 'Set your first name',
  params: [{
    name: 'name',
    placeholder: 'Your first name',
    type: status.types.TEXT
  }],
  validator: function(params, context) {
    var error
    // also check that the name has no spaces/special chars in
    if (!/^[a-zA-Z0-9]+$/.test(params.name)) {
      error = status.components.validationMessage(
        'Uh oh',
        'I\'m only able to save English alphanumeric characters, blame my programmers...'
      )
      return {markup: error}
    }
    if (params.name.length > 20) {
      error = status.components.validationMessage(
        'Ooh, could you shorten that a little?',
        'There\'s a limit to how much I can remember, something something goldfish joke'
      )
      return {markup: error}
    }
  },
  preview: function(params, context) {},
  handler: function(params, context) {
    saveToDb('username', params.name)
    status.sendMessage('Nice to meet you ' + params.name + '!')
  }
}

status.addListener('init', function(params, context) {
  if (getFromDb('username') !== null) return
  status.sendMessage('Welcome (back) to Save With Status, we see you haven\'t set a name yet.')
  status.sendMessage('In order to make using Save With Status totally rad, we recommend setting a nickname, otherwise you will look like this: ' + web3.eth.accounts[0])
  status.sendMessage('Hit the */name* command below to get the ball rolling.')
})

status.addListener('on-message-send', function() {
  return {'text-message': 'Unfortunately I wasn\'t programmed to have normal conversations. You\'ll have to issue one of the commands below to get me to do anything.'}
})

function circleNameValidator(params, context) {
  if (!getCircleFromSelection(params.circleName)) {
    return {markup: status.components.validationMessage(
      'Whoops',
      'It doesn\'t look like you have joined that Circle'
    )}
  }
}

function saveToDb(item, value) {
  localStorage.setItem(addDbPrefix(item), value)
}

function getFromDb(item) {
  return localStorage.getItem(addDbPrefix(item))
}

function addDbPrefix(item) {
  return DB_PREFIX + item
}

function getCircleAddress(name) {
  var circles = getAllCircles()
  for (var i = 0; i < circles.length; i++) {
    if (circles[i].name === name) return circles[i].address
  }
  return null
}

function getCircleFromSelection(name) {
  if (!getCircleAddress(name)) return null
  return LendingCircle.at(getCircleAddress(name))
}

function getAllCircles() {
  return JSON.parse(getFromDb('circles'))
}

function saveAllCircles(circles) {
  saveToDb('circles', JSON.stringify(circles))
}

status.response(createCommand)
status.response(joinCommand)
status.response(statsCommand)
status.response(startCommand)
status.response(withdrawCommand)
status.response(contributeCommand)
status.response(userNameCommand)
status.response(loadCommand)

status.command(createCommand)
status.command(joinCommand)
status.command(statsCommand)
status.command(startCommand)
status.command(withdrawCommand)
status.command(contributeCommand)
status.command(userNameCommand)
status.command(loadCommand)

// var simpleCommand = {
//   name: 'simpleR',
//   title: 'simpleRoot',
//   executeImmediately: true,
//   description: 'A simple command'
// }
// status.command(simpleCommand)
// status.response(simpleCommand)
