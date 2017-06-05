var roscaProxyAbi // = roscaProxyAbi
var roscaProxyAddress // = roscaProxyAddress

var circleNameParam = {
  name: 'circleName',
  placeholder: 'Lending Circle Name',
  type: status.types.TEXT
}

function circleNameSuggestions() {
  var circleNameSuggestions = status.components.view({style: {margin: 10}}, [
    status.components.text({style: {fontWeight: 'bold'}}, 'Name your Lending Circle'),
    status.components.text({style: {marginTop: 10}}, 'This will help other folks find it easily once they know your Status address.'),
    status.components.text({style: {marginTop: 10}}, 'You could call it "Super Status Savings" or something equally fun!')
  ])
  return {markup: circleNameSuggestions}
}

function paymentAmountSuggestions() {
  var paymentAmountSuggestions = status.components.view({style: {margin: 10}}, [
    status.components.text({style: {fontWeight: 'bold'}}, 'How much ETH/week?'),
    status.components.text({style: {marginTop: 10}}, 'This is the amount of ETH which everyone should contribute to the circle per week.'),
    status.components.text({style: {marginTop: 10}}, 'Try to choose an amount which isn\'t too expensive! There\'s a maximum of 10 ETH to prevent you going overboard, we know what you\'re like, big spender.')
  ])
  return {markup: paymentAmountSuggestions}
}

var deployCommand = {
  name: 'create',
  title: 'Create',
  description: 'Create a new Lending Circle',
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
        'Error',
        'What is this, a Lending Circle for ants?'
      )
      return {markup: error}
    }
  },
  handler: function(params, context) {
    // var proxyContract = web3.eth.contract(roscaProxyAbi).at(roscaProxyAddress)
    // proxyContract.create(params.name, params.paymentAmount, function(error, result) {
    //   if (error) {} // bad things
    //   // result will be a transaction hash that we can use to poll until it has been mined
    // })
    // not sure how we will let the user know when their thing has been mined, is there a way to do
    // drip-drip messages, or does any return value all have to be in a single message?
  },
  preview: function(params, context) {
    var message = 'Alright, creating ' + params.name + ' with a weekly contribution of ' +
      params.paymentAmount + ' ETH. Hold on!'
    // Maybe we should deploy the contract here instead?
    return {markup: status.components.text({}, message)}
  }
}

var joinCommand = {
  name: 'join',
  title: 'Join',
  description: 'Join an existing Lending Circle',
  sequentialParams: true,
  params: [{
    name: 'organiserAddress',
    placeholder: 'Organiser\'s Status address',
    type: status.types.TEXT,
    // suggestions: joinSuggestions
  },
    circleNameParam
  ],
  validator: function(params, context) {},
  handler: function(params, context) {},
  preview: function(params, context) {
    var message = 'Okay, hang on while we try to join "' + params.circleName + '" for you. Shouldn\'t be too long.'
    return {markup: status.components.text({}, message)}
  }
}

var statsCommand = {
  name: 'stats',
  title: 'Stats',
  description: 'Check the stats of a Lending Circle',
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
  params: [circleNameParam],
  validator: function(params, context) {}, // not sure how useful these validators will be when we have name inputs
  handler: function(params, context) {},
  preview: function(params, context) {
    // get the proxy contract with web3
    // call the contribute method on the proxy with the circle name
    // return the txhash(?) to the user
  }
}

var advanceCommand = {
  name: 'advance',
  title: 'Advance',
  description: 'Advance a Circle to the next round',
  params: [circleNameParam],
  validator: function(params, context) {},
  handler: function(params, context) {},
  preview: function(params, context) {
    // get the proxy contract with web3,
    // call the advance method on the proxy with the circle name
    // return the txhash to the user
  }
}

var withdrawCommand = {
  name: 'withdraw',
  title: 'Withdraw',
  description: 'Withdraw from a Lending Circle',
  params: [circleNameParam],
  validator: function(params, context) {},
  handler: function(params, context) {},
  preview: function(params, context) {
    // get the proxy
    // call withdraw with the circle name
    // return the txhash
  }
}

function userNameSuggestions(params, context) {
  var paymentAmountSuggestions = status.components.view({style: {margin: 10}}, [
    status.components.text({style: {fontWeight: 'bold'}}, 'Set Your Name'),
    status.components.text({style: {marginTop: 10}}, 'Don\'t worry, this won\'t be used for anything nefarious.'),
    status.components.text({style: {marginTop: 10}}, 'However your name will be publicly visible, so don\'t be too specific! We suggest only using your first name.')
  ])
  return {markup: paymentAmountSuggestions}
}

var userNameCommand = {
  name: 'name',
  title: 'SetName',
  description: 'Set your first name',
  params: [{
    name: 'name',
    placeholder: 'Your first name',
    type: status.types.TEXT,
    suggestions: userNameSuggestions
  }],
  validator: function(params, context) {},
  handler: function(params, context) {
    return {'text-message': 'Nice one!'}
  },
  preview: function(params, context) {
    // set the name in the proxy
    return {markup: status.components.text({}, 'Alright, setting your name to: ' + params.name)}
  }
}

status.addListener('init', function(params, context) {
  // ask the proxy whether we have a name yet
  // if we don't have a name, return a little view that says we should add one
  // if we do have a name, don't return anything
  var view = status.components.view({style: {margin: 10}}, [
    status.components.text({style: {fontWeight: 'bold'}}, 'Hello!'),
    status.components.text({}, 'Welcome (back) to Save With Status, we see you haven\'t added your name yet.'),
    status.components.text({}, 'In order to make using Save With Status totally rad, we recommend setting a name, otherwise you will look like this: ' + web3.eth.accounts[0]),
    status.components.touchable({
      onPress: status.components.dispatch([status.events.SET_VALUE, '/name ']),
      style: {
        padding: 5,
        backgroundColor: '#123AB7'
      }
    }, status.components.view({}, [
      status.components.view({}, [
        status.components.text({style: {}}, 'Set your name!')
      ])
    ]))
  ])
  return {markup: view}
})

status.addListener('on-message-send', function() {
  return {'text-message': 'Unfortunately I wasn\'t prpgrammed to have normal conversations. You\'ll have to issue one of the commands below to get me to do anything.'}
})

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
