var _ = require('underscore'),
	Twitter = require('twitter'),
	WordPOS = require('wordpos'),
	MarkovChain = require('markovchain'),
	config = require('./config'),
	twitterBot = new Twitter(config.keys),
	wordpos = new WordPOS(),
	chain = new MarkovChain(),
	bank = {
		nouns: [],
		verbs: [],
		adjectives: [],
		adverbs: [],
		rest: [],
		hashtags: [],
		user_mentions: [],
		media: [],
		urls: []
	}	

var users = 
[
	'ravewebmedia',
	'baddeo',
	'cyberwest',
	// 'h_dif',
	// 'jonnygwillim',
	// 'tomsharmanweb'
]

var twitterParameters = 
{
	exclude_replies: true,
	include_rts: false,
	count: 200 
}

// RUN!
var usersCount = 0
getNextUserTweets()

// FUNCTIONS

function getNextUserTweets()
{
	if (usersCount < users.length)
	{
		var user = users[usersCount]
		console.log('fetching ' + user)
		twitterParameters.screen_name = user
		getUserTweets(twitterParameters, gotTweets)
		usersCount ++
	}
	else
	{
		console.log('done, make the sentence(s)')
		makeSentences()
	}	
}

function getUserTweets(parameters, callback)
{
	twitterBot.get('statuses/user_timeline', parameters, function(error, tweets, response)
	{
		if (!error) callback(tweets)
		else 
		{
			console.error(error)
			console.error(response)
		}	
	})
}

function gotTweets(tweets)
{
	//console.log(tweets)
	// console.log(tweets[0])
	
	tweets.forEach(function(tweet, index)
	{
		// ENTITIES
		// console.log(tweet.entities)
		if (tweet.entities.hashtags)
		{
			tweet.entities.hashtags.forEach(function(hashtag, key)
			{
				bank.hashtags = _(bank.hashtags.concat(hashtag.text)).unique()
			})	
		}
		if (tweet.entities.user_mentions)
		{
			tweet.entities.user_mentions.forEach(function(user_mention, key)
			{
				bank.user_mentions = _(bank.user_mentions.concat(user_mention.screen_name)).unique()
			})	
		}
		if (tweet.entities.urls)
		{
			tweet.entities.urls.forEach(function(url, key)
			{
				bank.urls = _(bank.urls.concat(url.expanded_url)).unique()
			})	
		}
		if (tweet.entities.media)
		{
			tweet.entities.media.forEach(function(media, key)
			{
				bank.media = _(bank.media.concat(media.media_url)).unique()
			})	
		}

		// TEXT
		// console.log(tweet.text)
		var text = _(removeUrls(tweet.text)).unescape() // a bit of sanitation
		
		chain.parse(text)

		wordpos.getPOS(text, function(results)
		{
			_(results).each(function(array, key)
			{
				// console.log(key, array)
				bank[key] = _(bank[key].concat(array)).unique()
			})

			if (index == tweets.length -1) getNextUserTweets()
		})

		
	})
}	

function removeUrls(string)
{
	return string.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '')
}

function makeSentences()
{
	// we want unique
	var nouns = _(bank.nouns).difference(bank.adjectives, bank.verbs)
	var adjectives = _(bank.adjectives).difference(bank.nouns, bank.verbs)
	var verbs = _(bank.verbs).difference(bank.adjectives, bank.nouns)

	// console.log(bank)
	// console.log(nouns)
	// console.log(adjectives)

	for (var i = 0; i < 20; i++) 
	{
		var sentence = 'We ' 
		var dont = Math.round(Math.random()*2) == 0 // 1 in 3 should be "don't"
		if (dont) sentence += "don't "

		if (i % 2 == 0)
		{
			sentence += chain.start(getRandomElement(verbs).toLowerCase()).end().process() // + ' [Markov]'
		}
		else
		{
			sentence += getRandomElement(verbs).toLowerCase() + ' ' 
					  + getRandomElement(adjectives).toLowerCase() + ' ' 
					  + getRandomElement(nouns) 
					  + ' #' + getRandomElement(bank.hashtags)
		}
		
		console.log('- ' + sentence)
	}
}

function getRandomElement (array) 
{
	var randomIndex = Math.floor(array.length * Math.random())
	return array[randomIndex]
}