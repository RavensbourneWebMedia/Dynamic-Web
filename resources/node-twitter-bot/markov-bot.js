var Twitter = require('twitter'),
		config = require('./config'),
		twitterBot = new Twitter(config.keys),
		terminals = {},
		startWords = [],
		wordStats = {}

var parameters = 
{
	screen_name: 'baddeo',
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
			for (var i = 0; i < tweets.length; i++) 
			{
				var text = tweets[i].text

				// TODO some sanitation
				var words = text.split(' ')

				terminals[words[words.length-1]] = true
				startWords.push(words[0])

				for (var j = 0; j < words.length - 1; j++) 
				{
					if (wordStats.hasOwnProperty(words[j])) wordStats[words[j]].push(words[j+1])
					else wordStats[words[j]] = [words[j+1]]
				}
			}

 			var sentence = makeMarkovSentence(3 + Math.floor(3 * Math.random()))

			console.log(sentence)
		}
	})
}

function getRandomElement (array) 
{
	var randomIndex = Math.floor(array.length * Math.random())
	return array[randomIndex]
}

function makeMarkovSentence (minLength) 
{
	word = getRandomElement(startWords)
	var sentence = [word]
	while (wordStats.hasOwnProperty(word)) 
	{
		var nextWords = wordStats[word]
		word = getRandomElement(nextWords)
		sentence.push(word)
		if (sentence.length > minLength && terminals.hasOwnProperty(word)) break
	}
	if (sentence.length < minLength) return makeMarkovSentence(minLength)
	return sentence.join(' ')
}