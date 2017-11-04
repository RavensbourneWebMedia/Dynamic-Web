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
	var userName = 'Jo';
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

	<!--3 messages in the browsers JS Console with the three names on a new line each -->
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

[Last week](../04#workshop) we used the Firebase API to connect the `app template` interface to the database. We also *programmed the behaviour* of the app, so that it can filter and sort data to present only relevant results to its users.

Lets finish the `app template`.

## What happens when someone clicks on a result? Nothing, right?

Users should be able to click through and see details about the person (or ***thing***) they clicked on.

> Therefore, to begin with in index.html we need to create a `#results` section to make our app work.

 ```
<section id="results">

<a class="back button">Back</a>
<a class="toggle button">Map</a>
<!-- <h1>I'd like someone to bake a cake</h1>
<p>2 people around you can bake a cake</p> -->
<ol>
		<li>
				<img src="https://randomuser.me/api/portraits/women/53.jpg">
				<h2>Susan</h2>
				<p>About Susan</p>
		</li>
		<li>
				<img src="https://randomuser.me/api/portraits/men/83.jpg">
				<h2>Name</h2>
				<p>About this person</p>
		</li>
		<li>
				<img src="https://randomuser.me/api/portraits/women/63.jpg">
				<h2>Name</h2>
				<p>About this person</p>
		</li>
		<li>
				<img src="https://randomuser.me/api/portraits/men/3.jpg">
				<h2>Remy</h2>
				<p>About this person</p>
		</li>
</ol>

</section>
 ```

 > In `main.js` find the function that responds to users clicking on the `GO` button. Inside that function, find the line

```js
 showList(resultsList, resultsOL)
 ```

 ```
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

### Try to add this code, what happens?

```
homeSection.hide()
resultsSection.show()
})
```
> This needs to be outside the results function

### What is the bug here?
<!-- homeSection comes up as undefined, which is why we must define it with a variable. -->

```
var homeSection = $('#home')
```

### Another error?
<!--  resultsSection comes up as undefined, which is why we must define it with a variable. -->

```
var resultsSection = $('#results')
```

### Now the back button does not work and we need to tell it what to do!

```
resultsBackButton.click( function(){
resultsSection.hide()
homeSection.show()
})
```

### Again, we have to define it!

```
var resultsBackButton = $('#results .back')
```

> Now, lets hide the results list from the front page.

```
resultsToggleButton.click( function() {

    // console.log('clicked resultsToggleButton')

    // find out which element is currently visible
    // is the list visible?
    var listDisplay = resultsOL.css('display')
    if (listDisplay == 'block') isListVisible = true
    else isListVisible = false

    // console.log(isListVisible)

    // if the list is visible
    if (isListVisible)
    {
        // we want to show the map and hide the list
        resultsMap.show()
        map.resize() // get the map to take all the available space
        resultsOL.hide()
        // change the button text to say "List"
    }
    else
    {
        // we want to show the list and hide the map
        resultsOL.show()
        resultsMap.hide()
        // change the button text to say "Map"
    }
})
```

> But? It is all still there on the frontpage. As you can see in the code above, we are linking this with the CSS And need to add that for it to be hidden.

> Moving on, in the CSS we need to style that section to make it look nice

 ```
#results, #details {
    display: none;
}


#results ol {
    margin: 0;
    padding: 0;
    list-style: none;
}

#results li {
    border: 1px solid #ccc;
    margin-bottom: -1px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: background 0.5s;
}

#results li:hover {
    background: #ccc;
}

#results img {
    max-width: 8rem;
    position: absolute;
}

#results h2 {
    margin-top: 10px;
    margin-bottom: 0;
    padding-left: calc(8rem + 10px);
    line-height: 1;
    font-size: 1.5rem;
    padding-bottom: calc(8rem - 1.5rem - 10px);
}
 ```

> Now it should all be hidden

  > In `main.js` find the function that responds to users clicking on the `GO` button. Inside that function, find the line

 ```js
  showList(resultsList, resultsOL)
  ```

  > After that line, add a *click listener* to all the `li` elements inside `#results`

```js
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

  ```js
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

  ```html
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

  ```js
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

  ```js
  var detailsSection = $('#details')
  ```

  > Test your code. :tada:

## What happens when someone clicks on the `Back` button?

This is a challenge for you to work out!

Tip: there's a very similar bit of code at the end of `main.js`... see if you can replicate the functionality for the other back button :)


# Brainswarming!

You are probably familiar with *brainstorming*, but have you heard of [**brainswarming**](http://blogs.hbr.org/2014/03/why-you-should-stop-brainstorming/) before?

<!-- BSt: coming up with lots of ideas whilst withholding judgement, typically in a group session -->

> No study has proven that brainstorming works well, even though it has been the go-to method for **idea generation** since 1953.

In *brainstorming* you **talk** (and interrupt), whilst in *brainswarming* you **write**.

[![](assets/brainswarming.png)](http://blogs.hbr.org/2014/03/why-you-should-stop-brainstorming)

### Your turn

1. Grab sharpies and post-its.
* Think about what your app's **goal** could be, then write it down.
* Jot down also some **resources** that could help you achieve that goal.

You get 2 mins to write down your ideas, then pass it on to someone else, until your idea sheet returns to you after it's made a full round.


# Build your own database

Good apps need good data.

This doesn't mean a lot of data, but rather **well structured** data.

A good database doesn't look like a *bucket* full of unstructured data. Instead, a good database is organised so that it's easy (and quick) to search through heaps of objects and pick just the ones you want.

Let's look at three general principles of database design, and then you'll apply those to your own database.


## Key database design principles

### 1. Break your data into *logical pieces*

<!--Also known as [1NF](http://en.wikipedia.org/wiki/First_normal_form) (first normal form).-->

#### Bad example

| Person |
| ------ |
| Danny Base 21 |

#### Better example

| Name | Surname | Age |
| ---- | ------- | --- |
| Danny | Base | 21 |

This way you can take specific bits of data and spit them out wherever and however you want in your app.

Also, you could do things like `calculate the average age of our people`.

### 2. Use numbers for *ranking*

Computers are extremely good at maths. For a computer,  computing numbers is a piece of cake. Yet computing natural languages (such as English) is something that even the most sophisticated machines still struggle with (think of Siri, for example).

What's the trick then, if you want your app to be able to tell you `who are the best bakers in my area` for example? You **rank** people according to their baking skills.

#### Bad example

| Name | Surname | Baking skills |
| ---- | ------- | ------------- |
| Danny | Base | Excellent |
| Jordan | Scripts | Amazing |

#### Better example

| Name | Surname | Baking skills (0-5) |
| ---- | ------- | ------------- |
| Danny | Base | 4 |
| Jordan | Scripts | 3 |

If you want to rank data objects by **relevance** to a certain concept / keyword, use numbers.

| Name | Surname | Comedy | Sci-fi | Western
| ---- | ------- | ------ | ------ | -------
| Quentin | Tarantino | 2 | 0 | 3
| Martin | Scorsese | 3 | 0 | 1
| Stanley | Kubrick | 0 | 3 | 0
| Sofia | Coppola | 3 | 0 | 0

### 3. Use true or false

For **yes or no** answers. This is useful for filtering out results.

| Name | Surname | filmMaker| likesPets
| ---- | ------- | ------ | ------
| Quentin | Tarantino | true | false
| Martin | Scorsese | true | true
| Boris | Johnson | false | false

For instance, it would be easy to filter only the film-makers using this data structure.


## Your turn!

Starting from you app idea, consider:

* What is the **data unit**?

	For example, in our demo app the *data unit* is a person and in the database we're storing people's profiles.

* What pieces of data will your *data unit* feature?

	For example, in our demo app for each person we're storing `name`, `blurb`, `profile picture`, `likesPets`, `bakingSkills` etc.

* Which data pieces will be used to **rank, filter & sort**?

	For example `likesPets` helps us filter data for the *I'd like someone to keep my pet* option, `bakingSkills` helps us filter data for the *I'd like someone to bake a cake* option, etc.

> **Make a list** of all the data pieces for your data unit on paper.

### Create a new Firebase

> Go to Firebase, log in and *create a new app* (which really means create a *new database*).

### Push data to your new Firebase

> Go to [bit.ly/firebase-pusher](http://bit.ly/firebase-pusher) and click `Remix`.

This is a Thimble project which uses an HTML `form` to *push* data to Firebase. In order to make it work with *your new* Firebase database, you need to make a couple of changes:

> In `app.js` change the `apiKey` and `databaseURL` to your own Firebase values. You can find these by clicking on the `Add Firebase to your web app` button in Firebase.

> ![](assets/firebase-config.png)

```js
var config =
{
  apiKey: "YOUR_OWN_KEY",
  databaseURL: "YOUR_OWN_DATABASE_URL"
};
```

> In `app.js` find this line...

```js
var databaseList = database.ref( 'people' );
```

> ... and change `people` to whatever your *data unit* is. For example, if you were building a database of music, you could us `albums`; if you built a restaurants app it could be `venues` etc.

> In `index.html` change the `input` elements so that they reflect your data structures. Make sure you change the `name` *attributes*, eg:

```html
<input name="CHANGE_THIS" ...>
```

> Add as many `input` elements as you need. You'll find some examples of common input types in the Thimble HTML code.


# Codewars

### Are you part of the clan?

If you haven't signed up on [Codewars](http://www.codewars.com/r/DQC6uA) yet, check out [last week's notes](../02/#codewars) and get started!

Make sure you join the `RaveWebMedia` clan. This way we'll be part of the same team and we'll be able to challenge each other.

### Today

1. Complete at least 2 challenges (aka *katas*) on the beginner level (aka *8 kyu*).
* [Start making your own kata](http://www.codewars.com/kata/new/) and share it with the `RaveWebMedia` clan!

# Homework

### Project

- [ ] Tweak the CSS of your app
- [ ] Start adapting your app JS to your own database
- [ ] Publish it to GitHub `gh-pages`
- [ ] Prepare the **formative** presentation. On the 4th of November (2 weeks from today) you'll hand in on Moodle:
	- your formative presentation
	- link to your app on `gh-pages`
	- links to all the blog posts so far

### Blog

- [ ] Watch [The best interface is no interface](http://www.theverge.com/2013/3/10/4086392/samsung-golden-krishna-the-best-interface-is-no-interface)

	[![](assets/nointerface.png)](http://www.theverge.com/2013/3/10/4086392/samsung-golden-krishna-the-best-interface-is-no-interface)

- [ ] Write your reflections on how you can apply the 3 principles from this talk to your project:

1. Embrace natural processes
* Leverage computers instead of catering to them
* Create a system that adapts to individuals

You can also borrow the book `The best interface is no interface` from Ravensbourne's library. It's a thought-provoking book, full of visuals and inspiring case studies, that can help your creative process in this unit and beyond (especially in the UX unit after Xmas).
