# Save With Status!

This is our entry to the Status.im hackathon!

Save With Status allows you to interact with WeTrust ROSCA-like Trusted Lending Circles with your friends. Start chatting to the bot to create a Circle, then share the address with your friends to let them get involved :)

## Getting it running

Do the usual, enable debugging mode in the app.

Do `npm install`.

Serve the bot file with `truffle serve`.

Add the dapp to your list of Status contacts with something like this:
```
adb reverse tcp:3000 tcp:3000
status-dev-cli add '{"whisper-identity": "save-with-status",  "name": "SaveWithStatus", "bot-url": "http://<MY_LOCAL_IP>:8080/bot/bot.js"}'
```

Be sure to swap out `MY_LOCAL_IP` for your own ;)