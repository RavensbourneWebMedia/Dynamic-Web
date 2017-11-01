# Week 5

### Today, Tuesday 7th November 2017

1. [JS quiz!](#quiz-time)  
* [Workshop](#workshop): `app template` finishing touches
* [Brainswarming!](#brainswarming)
* [Design your own database](#design-your-own-database)
* [CodeWars](#codewars)

### Your [homework](#homework) and [blog](#blog)!

# Quiz time!

1. *Java* and *JavaScript* are the same thing.

	- [ ] true
	- [ ] false

	<!--False. They are two different programming languages. Java is the language behind Android (and many other things), JS is the "native" language of the Web.
	Java and JavaScript are like "car" and "carpet".. similar words, different meanings.-->
* What is wrong with this JS code?

	```js
	var userName = 'Jo";
	```

	<!--Quotation marks must match. You either use double or single quotes. So,

	var userName = "Jo";

	or

	var userName = 'Jo';-->
* What is wrong with this JS code?

	```js
	var person = { };
	person name = 'Jo';
	```

	<!--Properties inside objects must be accessed via . (dot notation) so

	person.name = 'Jo';--> 		
* What will this JS code produce?

	```js
	person.drink = function ( beverage ) {
		alert ( "I am drinking " + beverage + "!" );
	}

	person.drink( "coconut water" );
	```

	<!--An annoying pop-up saying "I am drinking coconut water!"-->
* What will this JS code produce?

	```js
	person.whisper = function ( message ) 	{
		console.log ("Sshhh... " + message );
	}

	person.whisper( "Keep calm and code on" );
	```

	<!--A message in the browser's JS Console (one of the most useful developer tools) saying: "Sshhh... Keep calm and code on"-->
* What will this JS code produce?

	```js
	function areYouAnAdult ( age )
	{
  		var answer;
    	if (age < 18) answer = "no";
    	else answer = "yes";
    	return answer;
	}
	areYouAnAdult( 18 );
	```

	<!--It will return "yes"-->
* What will this JS code produce?

	```js
	var people = ['Ada', 'Grace', 'Tim'];
	for (var i=0; i<people.length; i++)
	{
		console.log(people[i])
	}
	```

	<!--3 messages in the browser's JS Console with the three names on a new line each -->
* Where is better to put JavaScript `<script src="example.js"></script>` in your HTML?

	- [ ] inside the `head`

		```html
		...
		<head>
			...
			<script src="example.js"></script>
		</head>
		<body>
			...
		```

	- [ ] at the end of the `body`

		```html
		...
		<body>
			...
			<script src="example.js"></script>
		</body>
		```

	<!--Both are fine, however end of body is recommended, because your JS may need the body (with all its content) to be loaded first, and then it can execute properly-->	
