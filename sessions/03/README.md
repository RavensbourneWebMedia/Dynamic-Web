# Week 3

### Today, Friday 21st October 2016

1. [JS quiz!](#quiz-time)  
* [Workshop](#workshop): `app template` finishing touches
* [Brainswarming!](#brainswarming)
* [Design your own database](#design-your-own-database)
* [CodeWars](#codewars)
* Tutorials on [*Filtr Findr*](#tutorials)

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
	function areYouAnAdult ( age ) {
  		var answer;
    	if (age < 18) {
     		answer = "no";
    	} else {
     		answer = "yes";
    	} 
    	return answer;
	}
	
	areYouAnAdult( 18 );
	```
	
	<!--It will return "yes"-->
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


# Workshop

[Last week](../02#workshop) we used the Firebase API to connect the `app template` interface to the database. We also *programmed the behaviour* of the app, so that it can filter and sort data to present only relevant results to its users.

Let's finish the `app template`.

## What happens when someone clicks on a result?

Users should be able to click through and see details about the person (or *thing*) they clicked on.

> In `main.js` find the function that responds to users clicking on the `GO` button. Inside that function, find the line 

> ```js
showList(resultsList, resultsOL)
```

> After that line, add a *click listener* to all the `li` elements inside `#results`

> ```js
$('#results li').click( function() {
	// grab the id from the clicked item
    var resultId = $(this).attr('id')
    // use the id to get the right data
    var resultData = resultsList[resultId]
    console.log(resultData)
	// call the function showDetails()
    showDetails(resultData, detailsInfo)
    // show the details!
    resultsSection.hide()
   	detailsSection.show()
})
```

### First bug

> Test your code. 

You should get an error:

```js
Uncaught ReferenceError: showDetails is not defined
```

What does that mean? 

We haven't defined the `showDetails` function. 

> Let's teach the browser how to `showDetails`

> ```js
function showDetails (data, interfaceElement) 
{
  var detailsHTML = makeDetailsHTML(data)
  interfaceElement.html(detailsHTML)
}
``` 

### Second bug

> Test your code. 

You should get a new error:

```js
Uncaught ReferenceError: detailsInfo is not defined
```

What does that mean? 

We haven't defined the `detailsInfo` variable. We want `detailsInfo` to be a jQuery selection of the part of the `#details` where we can show the info about the chosen person. Should that be the whole `#details` section? Well, no... because the `Back` button is not part of the specific info about a person. We need to separate the interface elements that won't change (aka *static*), like the `Back` button, from the interface elements that will change (aka *dynamic*) like the `img`, the `h2` etc. We can do that by wrapping all the *dynamic* elements in a `div` and give that div an id.

> In `index.html` find the `#details` section, then wrap `img`, `h2`, `p` and `a` in a `div#info`

> ```html
<section id="details">
	<a class="back button">Back</a>
    <div id="info">
    	<img src="https://randomuser.me/api/portraits/women/53.jpg">
        <h2>Susan</h2>
        <p>About Susan</p>
        <a class="contact button">Contact Susan</a>
	</div>
</section>
```

> Then in `main.js` create a new variable

> ```js
var detailsInfo = $('#details #info')
```   

### Third bug

> Test your code. 

You should get a new error:

```js
Uncaught ReferenceError: detailsSection is not defined
```

What does that mean? 

We haven't defined the `detailsSection` variable. 

> ```js
var detailsSection = $('#details')
```

> Test your code. :tada:

## What happens when someone clicks on the `Back` button?

This is a challenge for you to work out!

Tip: there's a very similar bit of code at the end of `main.js`... see if you can replicate the functionality for the other back button :)









# Codewars

### Are you part of the clan?

If you haven't signed up on [Codewars](http://www.codewars.com/r/DQC6uA) yet, check out [last week's notes](../02/#codewars) and get started!

Make sure you join the `RaveWebMedia` clan. This way we'll be part of the same team and we'll be able to challenge each other.

### Today

*Before* and *after* your tutorial:

1. Complete at least 2 challenges (aka *katas*) on the beginner level (aka *8 kyu*).
* Have a go at [this *beta kata*](http://www.codewars.com/kata/561bbd27fbbfb0bdad0000f4) which I made..
* [Start making your own kata](http://www.codewars.com/kata/new/) and share it with the `RaveWebMedia` clan!





# Tutorials


### Filter Bubbles tutorials

This **team project** is about pushing yourself out of your online comfort zone (aka *filter bubble*) to observe different communities and express your points of view through code.

All the project material is [here](../../projects/filter-bubbles).

### 6 teams

### 10 minutes per team

1. What do you think about [Eli Pariser's TED talk](http://www.ted.com/talks/eli_pariser_beware_online_filter_bubbles?language=en#t-53082)?
* What *communities* and/or *hashtags* have you been **researching**?
* Let's see your **ideas** (inspired by?) for visualisations and **code experiments**. 
* What's your team **GitHub repository**? You may want to [create an *organisation*](https://github.com/organizations/new) (a GitHub group) for that.. 


 


# Homework


### Project 

- Tweak the CSS
- Publish to GitHub `gh-pages`


### Blog 

**Individually**, write about *Filter Bubbles*. 

Reflect on how the idea is evolving and document **your** thought process. 

Also, write about your coding experiments.
