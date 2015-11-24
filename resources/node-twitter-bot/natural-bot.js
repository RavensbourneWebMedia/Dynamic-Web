var _ = require('underscore'),
	Twitter = require('twitter'),
	WordPOS = require('wordpos'),
	Sentencer = require('sentencer'),
	config = require('./config'),
	twitterBot = new Twitter(config.keys),
	wordpos = new WordPOS(),
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

var twitterParameters = 
{
	screen_name: 'baddeo',
	exclude_replies: true,
	include_rts: false,
	count: 200 
}

// RUN!
getUserStatuses(twitterParameters, handleTweets)

// FUNCTIONS

function getUserStatuses(parameters, callback)
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

function handleTweets(tweets)
{
	//console.log(tweets)
	// console.log(tweets[0])
	
	tweets.forEach(function(tweet, index)
	{
		// TEXT
		var text = _(removeUrls(tweet.text)).unescape() // a bit of sanitation
		// console.log(text)	
		wordpos.getPOS(text, function(results)
		{
			_(results).each(function(array, key)
			{
				// console.log(key, array)
				bank[key] = _(bank[key].concat(array)).unique()
			})

			if (index == tweets.length -1) makeSentences()
			// console.log(bank)
		})

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
	console.log(nouns)
	console.log(adjectives)

	Sentencer.configure(
	{
		nounList: nouns,
		adjectiveList: adjectives
	})	

	for (var i = 0; i < 20; i++) 
	{
		// var sentence = Sentencer.make("This is {{ an_adjective }} {{ noun }}")
		// var sentence = chain.start(getRandomStarter).end().process()
		var sentence = 'We ' + getRandomElement(verbs).toLowerCase() + ' ' + getRandomElement(adjectives).toLowerCase() + ' ' + getRandomElement(nouns) + '\n#' + getRandomElement(bank.hashtags) 
		console.log('- ' + sentence)
	}
}

function getRandomElement (array) 
{
	var randomIndex = Math.floor(array.length * Math.random())
	return array[randomIndex]
}