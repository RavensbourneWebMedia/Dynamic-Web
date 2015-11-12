### Get started

1. Go to [apps.twitter.com](https://apps.twitter.com) and create a **new app**. 
* Make a new file in this folder and call it `config.js`
* In `config.js` copy-paste the code below 

	```js
	module.exports = 
	{
		keys:
		{
			consumer_key: 'YOUR_TWITTER_APP_CONSUMER_KEY',
			consumer_secret: 'YOUR_TWITTER_APP_CONSUMER_SECRET',
			access_token_key: 'YOUR_TWITTER_APP_TOKEN_KEY',
			access_token_secret: 'YOUR_TWITTER_APP_TOKEN_SECRET'
		}
	}	
	```
* Change `YOUR_TWITTER_APP_CONSUMER_KEY` and the other bits in capitals to your Twitter app's values
* Navigate to this folder in Terminal and then run `sudo npm install`
* In `bot.js` change `parameters.screen_name` to another Twitter username, unless you want to *markov-chain* my tweets ([@baddeo](https://twitter.com/baddeo))
* Test the bot by running `node bot.js` in Terminal	