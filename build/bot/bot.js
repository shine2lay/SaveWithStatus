var DB_PREFIX = 'savewithstatus_'
var DEFAULT_COMMAND_COLOR = '#333FFF'
var CIRCLE_ABI = [{'constant': true, 'inputs': [], 'name': 'contributionSize', 'outputs': [{'name': '', 'type': 'uint128'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [], 'name': 'withdraw', 'outputs': [{'name': 'success', 'type': 'bool'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [], 'name': 'startRound', 'outputs': [], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [{'name': '', 'type': 'uint256'}], 'name': 'membersAddresses', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'endOfROSCA', 'outputs': [{'name': '', 'type': 'bool'}], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'currentRound', 'outputs': [{'name': '', 'type': 'uint16'}], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'roundPeriodInSecs', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'newMember', 'type': 'address'}], 'name': 'addMember', 'outputs': [], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [], 'name': 'contribute', 'outputs': [], 'payable': true, 'type': 'function'}, {'constant': true, 'inputs': [{'name': 'user', 'type': 'address'}], 'name': 'getParticipantBalance', 'outputs': [{'name': '', 'type': 'int256'}], 'payable': false, 'type': 'function'}, {'inputs': [{'name': 'contributionSize_', 'type': 'uint128'}], 'payable': false, 'type': 'constructor'}]
var LendingCircle = web3.eth.contract(CIRCLE_ABI)

var circleNameParam = {
  name: 'circleName',
  placeholder: 'Lending Circle Name',
  type: status.types.TEXT,
  suggestions: selectCircleSuggestions
}

function selectCircleSuggestions(params, context) {
  var circles = getAllCircles()
  var touchables = circles.map(function(circle) {
    return status.components.touchable(
      {onPress: status.components.dispatch([status.events.SET_COMMAND_ARGUMENT, [0, circle.name]])},
      status.components.view(
        {style: {borderBottomWidth: 1, borderBottomColor: '#0000001f'}},
        [status.components.text(
          {style: {padding: 20}},
          circle.name
        )]
      )
    )
  })
  return {markup: status.components.scrollView({
    // this prop is necessary to make sure that the first tap doesn't just close the keyboard!
    keyboardShouldPersistTaps: 'always',
  }, touchables)}
}

// TODO(tom) figure out why this does not work properly
// function helpAsSuggestions(title, paragraphs) {
//   var helpTitleStyle = {style: {fontWeight: 'bold'}}
//   var helpParagraphStyle = {style: {marginTop: 10}}
//   var components = [status.components.text(helpTitleStyle, title)]
//   for (var i = 0; i < paragraphs.length; i++) {
//     components.push(status.components.text(helpParagraphStyle, paragraphs[i]))
//   }
//   var markup = status.components.view({style: {margin: 10}}, components)
//   return {markup: markup}
// }

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

function paymentAmountSuggestions() {
  // return {markup: helpAsSuggestions(
  //   'How much ETH/day?',
  //   ['This is the amount of ETH which everyone should contribute to the circle per week.',
  //     'Try to choose an amount which isn\'t too expensive! There\'s a maximum of 10 ETH to prevent you going overboard, we know what you\'re like, big spender.']
  // )}
  var paymentAmountSuggestions = status.components.view({style: {margin: 10}}, [
    status.components.text({style: {fontWeight: 'bold'}}, 'How much ETH/week?'),
    status.components.text({style: {marginTop: 10}}, 'This is the amount of ETH which everyone should contribute to the circle per week.'),
    status.components.text({style: {marginTop: 10}}, 'Try to choose an amount which isn\'t too expensive! There\'s a maximum of 10 ETH to prevent you going overboard, we know what you\'re like, big spender.')
  ])
  return {markup: paymentAmountSuggestions}
}

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

var deployCommand = {
  name: 'create',
  title: 'Create',
  description: 'Create a new Lending Circle',
  color: DEFAULT_COMMAND_COLOR,
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
    var message = 'Alright, creating ' + params.name + ' with a weekly contribution of ' + params.paymentAmount + ' ETH. Hold on!'
    // Maybe we should deploy the contract here instead?
    return {markup: status.components.text({}, message)}
  },
  handler: function(params, context) {
    getCircleAddress(params.name)
    var circle = LendingCircle.at()
    // var proxyContract = web3.eth.contract(roscaProxyAbi).at(roscaProxyAddress)
    // proxyContract.create(params.name, params.paymentAmount, function(error, result) {
    //   if (error) {} // bad things
    //   // result will be a transaction hash that we can use to poll until it has been mined
    // })
    // not sure how we will let the user know when their thing has been mined, is there a way to do
    // drip-drip messages, or does any return value all have to be in a single message?
  }
}

var joinCommand = {
  name: 'join',
  title: 'Join',
  description: 'Join an existing Lending Circle',
  color: DEFAULT_COMMAND_COLOR,
  sequentialParams: true,
  params: [{
    name: 'contractAddress',
    placeholder: 'Contract Address',
    type: status.types.TEXT,
    suggestions: contractAddressSuggestions
  },
    circleNameParam
  ],
  validator: function(params, context) {
    if (!web3.isAddress(params.contractAddress)) {
      return {markup: status.components.validationMessage(
        'Not a real contract address',
        'Maybe you made a typo? We recommend copy & paste.'
      )}
    }
    // check that the contract address actually exists
    // check that the name can be added to our list as an object param
  },
  preview: function(params, context) {},
  handler: function(params, context) {
    status.sendMessage('Okay, hang on while we try to join "' + params.circleName + '" for you. Shouldn\'t be too long.')
  },
}

var statsCommand = {
  name: 'stats',
  title: 'Stats',
  description: 'Check the stats of a Lending Circle',
  color: DEFAULT_COMMAND_COLOR,
  params: [circleNameParam],
  validator: function(params, context) {},
  handler: function(params, context) {}, // i don't think we can use this method here, since we can't return text from it :/
  preview: function(params, context) {
    // get the proxy contract with web3
    // call the stats method on the proxy with the circle name
    // return the variables to the chat
    // current round
    // total contributed
    // left to contribute
    // have i won yet
    var message = 'Here are the stats for the circle ' + params.name + ':'
    return {markup: message}
  }
}

var contributeCommand = {
  name: 'contribute',
  title: 'Contribute',
  description: 'Contribute to a Lending Circle',
  color: DEFAULT_COMMAND_COLOR,
  params: [circleNameParam],
  validator: function(params, context) {}, // not sure how useful these validators will be when we have name inputs
  preview: function(params, context) {},
  handler: function(params, context) {
    var circle = getCircleFromSelection(params.circleName)
    // contribute here is the name of the function in the smart contract
    // the callback happens when the transaction has been sent
    circle.contribute(function(e, txHash) {
      status.sendMessage('Your contribution is on its way!')
    })
  }
}

var advanceCommand = {
  name: 'advance',
  title: 'Advance',
  color: DEFAULT_COMMAND_COLOR,
  description: 'Advance a Circle to the next round',
  params: [circleNameParam],
  validator: function(params, context) {},
  preview: function(params, context) {},
  handler: function(params, context) {}
}

var withdrawCommand = {
  name: 'withdraw',
  title: 'Withdraw',
  description: 'Withdraw from a Lending Circle',
  color: DEFAULT_COMMAND_COLOR,
  params: [circleNameParam],
  validator: function(params, context) {
    // validate whether they actually have anything to withdraw from this contract?
  },
  preview: function(params, context) {},
  handler: function(params, context) {
    var circle = getCircleFromSelection(params.name)
    circle.withdraw(function(e, res) {
      status.sendMessage('Withdrawal logged, your funds should show up in a couple of minutes.')
    })
  }
}

var userNameCommand = {
  name: 'name',
  title: 'SetName',
  color: DEFAULT_COMMAND_COLOR,
  description: 'Set your first name',
  params: [{
    name: 'name',
    placeholder: 'Your first name',
    type: status.types.TEXT
  }],
  validator: function(params, context) {
    var error
    // also check that the name has no spaces/special chars in
    if (!/^[a-zA-Z0-9]{4,20}$/.test(params.name)) {
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
  handler: function(params, context) {
    saveToDb('username', params.name)
    status.sendMessage('Nice to meet you ' + params.name + '!')

    // -- DEV --
    saveToDb('circles', JSON.stringify([{
      name: 'Tom\'s Super Circle',
      address: '0xdeadbeef'
    }, {
      name: 'Hypotenuse',
      address: '0x1234abcd'
    }]))
    // -- /DEV --
  },
  preview: function(params, context) {}
}

status.addListener('init', function(params, context) {
  if (getFromDb('username') !== null) return
  // ask the proxy whether we have a name yet
  // if we don't have a name, return a little view that says we should add one
  // if we do have a name, don't return anything
  status.sendMessage('Welcome (back) to Save With Status, we see you haven\'t set a name yet.')
  status.sendMessage('In order to make using Save With Status totally rad, we recommend setting a nickname, otherwise you will look like this: ' + web3.eth.accounts[0])
  status.sendMessage('Hit the /name command below to get the ball rolling.')
})

status.addListener('on-message-send', function() {
  return {'text-message': 'Unfortunately I wasn\'t programmed to have normal conversations. You\'ll have to issue one of the commands below to get me to do anything.'}
})

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
  var circles = JSON.parse(getFromDb('circles'))
  for (var i = 0; i < circles.length; i++) {
    if (circles[i].name === name) return circles[i].address
  }
  return null
}

function getCircleFromSelection(name) {
  return LendingCircle.at(getCircleAddress(name))
}

function getAllCircles() {
  return JSON.parse(getFromDb('circles'))
}

status.response(deployCommand)
status.response(joinCommand)
status.response(statsCommand)
status.response(advanceCommand)
status.response(withdrawCommand)
status.response(contributeCommand)
status.response(userNameCommand)

status.command(deployCommand)
status.command(joinCommand)
status.command(statsCommand)
status.command(advanceCommand)
status.command(withdrawCommand)
status.command(contributeCommand)
status.command(userNameCommand)
