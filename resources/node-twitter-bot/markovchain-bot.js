var Twitter = require('twitter'),
	MarkovChain = require('markovchain'),
	config = require('./config'),
	twitterBot = new Twitter(config.keys)

var parameters = 
{
	screen_name: 'ravewebmedia',
	exclude_replies: true,
	include_rts: false,
	count: 200 
}

// RUN!
getUserStatuses(parameters)

// FUNCTIONS

function getUserStatuses(parameters)
{
	twitterBot.get('statuses/user_timeline', parameters, function(error, tweets, response)
	{
		if (!error) 
		{
			//console.log(tweets)

			// console.log(tweets[0])
			
			var chain = new MarkovChain()
			tweets.forEach(function(tweet)
			{
				var text = tweet.text
				chain.parse(text)
			})

			for (var i = 0; i < 10; i++) 
			{
				var sentence = chain.start(useUpperCase).end().process()
				// var sentence = chain.start(getRandomStarter).end().process()
				console.log('- ' + sentence)
			}
		}
	})
}

function getRandomElement (array) 
{
	var randomIndex = Math.floor(array.length * Math.random())
	return array[randomIndex]
}

function getRandomStarter ()
{
	var starters = ['The', 'Our', 'We', 'Good', 'Happy']
	return getRandomElement(starters)
}

function useUpperCase (wordList) 
{
	var tmpList = Object.keys(wordList).filter(function(word) 
	{ 
		return word[0] >= 'A' && word[0] <= 'Z' 
	})
	return tmpList[~~(Math.random()*tmpList.length)]
}