# Week 2

### Today, Friday 14th October 2016

1. [Peer learning](#peer-learning)
* Workshop: [data and APIs](#workshop)
* Sign up to [CodeWars](#codewars)!
 
### Your [homework](#homework) and [blog](#blog)!


# Peer learning

### What is peer learning?

It's a form of **cooperative** learning, that is: learning from *each other, together*.

In peer learning, everybody plays both the **teacher** and the **learner**.

<!-- > Docendo discimus [By teaching, we learn] -->

By teaching to your peers, you reinforce your own learning. [It works](http://visible-learning.org/hattie-ranking-influences-effect-sizes-learning-achievement/hattie-ranking-teaching-effects)!

Also, you get to practice and build confidence in your **communication skills**.

At the end of your mini-lessons we'll give each other **feedback**. *Honest* feedback can hurt but it's through that (and practice) that we improve.

### Let the peer learning begin

Who | What
--- | -----------
Will<br>Akvile | What are **algorithms**?
Tom<br>Darren | What are **variables** and how do you use them?
Josh<br>Dean | What are **functions** and how do you use them?
Afsara<br>Malore | What are `if` statements (aka **conditionals**) and how do you use them?
Francisco<br>Ajay | What are **loops** and how do you use them?
Ben<br>Rosie | What is the **JavaScript Console** and how do you use it? Check out [JS for Cats](http://jsforcats.com/) for some fun ideas
Joe<br>Rajeev | What is the **GeoLocation** API and how do you use it?  

### Let's give each other *honest* **feedback**

#### Mini-lesson **content**   
	
1. How did you **plan** your mini-lesson?
* What were the **key points** you wanted to get across?
* How did you decide to communicate them?
* What **assumptions** have you made about what we already know?
* How **interactive** was your mini-lesson? How was the audience meant to *participate*? 
	
#### **Delivery**
	
1. What role did each **team member** play in delivering the mini-lesson? 
* How did you **practice** your mini-lesson?
* How did your mini-lesson start? How did you *hook* your audience?
* What was your **body language** like? Consider facial expressions, movements of the arms, eye contact with the audience, and posture.
* What was your **voice** like? Consider speed of delivery, pausing, volume and pitch
* Did you keep within the time?   

#### What can be **improved**?


# Workshop

[Last week](../01#workshop) we recapped how to use **HTML and CSS** to build the interface for the `app template`. We also introduced **JavaScript** and **jQuery**, and used them to make the interface interactive. 

After learning from your peers about the building blocks of programming (*variables*, *functions* etc.) we'll start putting these into practice by connecting the `app template` to an online **database**.

Back to the brief...

### Make an **app** that helps people sort through **data** to **find who/what they are looking for** 

1. First we'll [break down the brief](#first-break-down-the-brief) into smaller chunks, *specifying* how each one could work. This process is what **designing algorithms** is about. 
* Once we have a good understanding of how our app will behave, we can [**code** those algorithms](#then-code-the-algorithms).

## First: break down the brief

We need four volunteers (and post-its). 

1. The **user** (talks only to HTML)
2. The **HTML** character (talks only to the user, on request)
3. The **JS** character (can talk to both HTML and database)
4. The **database** character (talks only to JS, on request)

HTML and JS are siblings or colleagues (they are part of the same app) so they should stand closer, maybe hold hands :)

Let's play out the app behaviour. 

1. [**Load data** and store it in the app *memory*](#1-load-data-and-store-it-in-the-app-memory)
* [Capture **user input**](#2-capture-user-input)
* [**Filter and sort data** according to user choices](#3-filter-and-sort-data)
* [**Output** filtered+sorted data](#4-output-data)

### But hang on... where is our *actual* database?

We're going to use a cloud-based real-time **database** service called [Firebase](https://firebase.google.com). There are several other solutions, including building your own database, however we chose Firebase because of its performance, features and good documentation. 

Many companies use Firebase to **rapidly prototype** app ideas, without investing time and money on database infrastructure and software.

> 1. Go to [firebase.google.com](https://firebase.google.com/)
> * Sign in with your `@students.rave.ac.uk` account  
> * Click on `Go to console` 
> * You should see a box called `Dynamic Web template`: click on it.
> * When `Dynamic Web template` is opened, click on `Database`.

![](assets/firebase-demo.png)

So we have a database, but as you can see it's currently **empty**.

Let's put some data into it!

I prepared a little tool for the *data entry* job. I made it with Thimble, so that you can see its source code (and *remix* it if you like).

> Go to [bit.ly/firebase-pusher](http://bit.ly/firebase-pusher)

> Fill the form with data about yourself, or a made-up person.

> Click `Push it!` to send that data to our Firebase.  

Firebase updates in real-time, so shortly after you hit `Push it!` a new *object* with all the data you entered, will pop up on our `app template` database at [dynamic-web-template-e91d4.firebaseio.com](https://dynamic-web-template-e91d4.firebaseio.com/
) :zap:

## Then: code the algorithms

Now that we have data in our Firebase database, we can load it into our app and do stuff with it!

> Open your project from last week. 

> Create a new file in the `js` folder and call it `firebase.js`.

Like with CSS, we need to tell `index.html` to load our JS file.

> At the end of `body` in `index.html`, add a `script` and point it to `js/firebase.js` like so:

> ```html
	...
	<script src="js/firebase.js"></script>
	...
</body>
</html>
```	

Your JS file is connected to `index.html`! Now you can write your JS code in `firebase.js`. 

The browser will read and execute `firebase.js` every time you load/refresh your app.

<!-- Do a console.log first -->

### 1. Load data and store it in the app memory

*Where* is our data?
	
We need to know where to load data from, that is we need a **URL**. You can think of it as the *address* or *phone number* of your data.

[dynamic-web-template-e91d4.firebaseio.com](https://dynamic-web-template-e91d4.firebaseio.com/
)

> In `firebase.js`, configure and *initialise* Firebase with the values you can copy-paste from the Firebase Console by clicking on `Add Firebase to your web app`

> ![](assets/firebase-init.png)

> ```js
// initialize Firebase
var config = 
{
    apiKey: "AIzaSyDqCowWm_tfPP6BlQZIWiRCWzSwsD1dnFM",
    databaseURL: "https://dynamic-web-template-e91d4.firebaseio.com"
};
firebase.initializeApp(config);
```

Your browser can do [many things out-of-the-box](https://developer.mozilla.org/en/docs/Web/API), for instance: giving you scarily accurate geolocation coordinates, playing audios and vides, doing maths, convert text into voices etc. 

Yet your browser doesn't know how Firebase works, because Firebase doesn't come pre-installed. 

> Before you can use Firebase in your app, you must **install the Firebase JS library**. Do that by adding the following `script` at the end of `body` in `index.html`, just before the other `script` which points to `firebase.js`

> ```html
	...
	<script src="https://www.gstatic.com/firebasejs/3.4.1/firebase.js"></script>
	<script src="firebase.js"></script>
	...
</body>
</html>
```

Now that your browser knows what Firebase is and how it works, you can create a `database` *variable*. 

> In `firebase.js`:

> ```js
var database = firebase.database();
```

We don't need to load the entire database in our app, but only data about *people*. We can think of *people* as a **list** of `person` objects.

> Store a reference to the people section of our `database`

> ```js
var peopleDatabase = database.ref('people');
```

> Create a `peopleList` *variable* and set it as an empty list `[]`. 

> ```js
var peopleList = [];
```

The next step will be to load data from `peopleDatabase` and store a bunch of `person` objects in `peopleList`.

`peopleDatabase` is a Firebase *thing*, we haven't made it so we don't know how to use it. What to do? **Read the manual!**

The Firebase manual (aka the *docs*) are online at [firebase.google.com/docs](https://firebase.google.com/docs). We're looking for the `Web` manual, and a good place to start is the `Get Started Guide` ([firebase.google.com/docs/web/setup](https://firebase.google.com/docs/web/setup)). 

We're going to learn how use the `Realtime Database`. In particular, since we're working with a *list* of people, we will dig into the `Work with Lists of Data` chapter ([firebase.google.com/docs/database/web/lists-of-data](https://firebase.google.com/docs/database/web/lists-of-data))

The functionality we're looking for looks like this 

```js
on('child_added', doSomething);`
```

...which is typically used to retrieve a *list* of items (in our case, a list of `person` objects).

Let's try it out.

> Call `on('child_added', ...)` function from `peopleDatabase` to load a list of items and store each one in `peopleList`:

> ```js
peopleDatabase.on('child_added', function( firebaseObject ) 
{
	var person = firebaseObject.val(); 
  	peopleList.push(person);
  	// "push" is JavaScript's lingo for "add to a list"
})
```

The JS code above, in plain English:

* Hey `peopleDatabase`!

* For each *child* of `peopleDatabase`, do the following steps:

	* Create a variable `person` 
	
	* Call the `.val()` function to extract the value from  `firebaseObject` and store inside `person`  
	  
	* Add `person` to `peopleList` (`push` is JavaScript's lingo for *add to a list*)
	
	* Repeat until you've **looped** through all the *children*

* Thanks!
 
At this point, we can use the Console to check if `peopleList` has been loaded with data.

If this *looping thing* confuses you, check out this JS slow-motion demonstration!

[![](assets/for-loop.png) **FOR** loop interactive demo](http://codepen.io/baddeo/full/YyVdVN/)

### 2. Capture user input

When someone clicks on the `GO` button, what should happen?

> In `js/main.js`:

> ```js
// use jQuery to select the HTML elements we're going to manipulate
var homeGoButton = $('#home button');
var homeDropdown = $('#home select');
// tell the GO button to do something when we click it
homeGoButton.click( function() 
{
  // get user input
  var selectedOption = homeDropdown.val(); 
  // using jQuery val(), see http://api.jquery.com/val
  console.log('You picked ' + selectedOption);
})
```

Let's break that code down.

First the outer shell:

```javascript
homeGoButton.click( function() {
	...
	...
})
``` 

1. `homeGoButton` is a reference to the `GO` button
2. `.click( function() { ... })` says **when** the user **clicks** the selected element, *run* all the instructions inside this function.

Now *inside* the function...

What option did the user pick?

```javascript
// get user input
var selectedOption = homeDropdown.val(); 
```

1. Create a `var` named `selectedOption`
* Get the currently selected value (for example the `likesPets`) by running the jQuery function `.val()` on `homeDropdown`
* Save that value in `selectedOption`

#### One more thing: **values**!

How does **JS** know which data to ask from the **database**, after a **user** has picked an option from the dropdown?

To let JS know which data to look for, we can add a little bit of information to each `option` in our HTML dropdown.

> In `index.html` find your `select` dropdown in the `#home` section. In each opening `option` tag add in `value=" "`

> ```html
<select>
     <option value=" ">Bake a cake</option>
     <option value=" ">Move my furniture</option>
     <option value=" ">Keep my pet</option>
</select>
```

The `value` attribute will contain the property which relates to the selected option - with the **same exact spelling** we use in our database. 

For example, if the user selects `Bake a cake`, the property which matches that is `bakingSkills`.

> Open our Firebase database at [dynamic-web-template-e91d4.firebaseio.com](https://dynamic-web-template-e91d4.firebaseio.com/) and take a look at the data you've stored in there. 

> Copy property names from the database and paste them in the relevant `value` slot in your HTML. Make sure to double-check for the exact property names, otherwise your JS code will not work!

> ```html
<select>
     <option value="bakingSkills">Bake a cake</option>
     <option value="bodyStrength">Move my furniture</option>
     <option value="likesPets">Keep my pet</option>
</select>
```

### 3. Filter and sort data

> Create a new file in your `js` folder, call it `filter.js` (or whatever you like) and then in `index.html` use a `script` to load `filter.js` just before the one which loads `main.js`.

> ```html
	...
	<script src="js/filter.js"></script>
	<script src="js/main.js"></script> 
	...
</body>
```

> In `filter.js` paste the whole JS code from [github.com/RavensbourneWebMedia/Dynamic-Web/blob/2016/projects/filtr-findr/app-template/js/filter.js](https://github.com/RavensbourneWebMedia/Dynamic-Web/blob/2016/projects/filtr-findr/app-template/js/filter.js)

> In `main.js` inside the `homeGoButton.click( function() { ... })` add these new lines 

> ```js
homeGoButton.click( function() 
{
	...
	// filter+sort people by user selection
  	var resultsList = filterAndSortList(peopleList, selectedOption);
  	console.log(resultsList);
})
```  

1. Use the function `filterAndSortList` to filter and sort `peopleList` (the list with all the people) so that it matches the user's selection (`selectedOption`)
* Store the filtered people in `resultsList`
* Use the `console` to log what's in `resultsList` 

### 4. Output data

At this point we should have a list of people (`resultsList`) whose skills match the chosen option (`selectedOption`).

For example if you chose `Bake a cake`, then `resultsList` you will contain people whose `bakingSkills` are 4+.
 
Let's display these people!

> Create a new file in your `js` folder, call it `show.js` (or whatever you like) and then in `index.html` use a `script` to load `show.js` just before the one which loads `app.js`.

> ```html
	...
	<script src="js/filter.js"></script>
	<script src="js/show.js"></script>
	<script src="js/app.js"></script> 
	...
</body>
```

> In `show.js` paste the whole JS code from [github.com/RavensbourneWebMedia/Dynamic-Web/blob/2016/projects/filtr-findr/app-template/js/show.js](https://github.com/RavensbourneWebMedia/Dynamic-Web/blob/2016/projects/filtr-findr/app-template/js/show.js)

> In `main.js` inside the `homeGoButton.click( function() { ... })` add these new lines 

> ```js
homeGoButton.click( function() 
{
	...
	// show the results in the #results section
  	showList(resultsList, resultsOL);
})
``` 

In the line above we are using the function `showList` to spit out `resultsList` in the `ol` inside the `#results` section.

Test your code in the browser! You'll get an error in the Console saying 

```
Uncaught ReferenceError: resultsOL is not defined
```

This means we need to define a variable `resultsOL`, which selects the `ol` inside the `#results` section.

```js
var resultsOL = $('#results ol');
```

Test again!


# Codewars

> Improve your skills by training with others on real code challenges

<!--

http://thoughts.baddeo.com/codewars

It gamifies the experience of learning to code in a rather addictive way: 

* a playful environment when solving coding puzzles/challenges (it feels like a game, although it could do with a bit of sound says Aimee)
* get points and level up as you progress
* compare and discuss your solution with those of other members of the community: it’s fascinating to see how other people approach and solve the same challenge and an invaluable learning opportunity

-->

[![](assets/codewars.png)](http://www.codewars.com/r/DQC6uA)

1. Before you can sign up you'll have to complete a couple of challenges.
* Click the `JavaScript` button. 
* First challenge
	```js
	function multiply(a, b){
  		a * b
	}
	```
	
	Hint: add a `return` somewhere..
* Second challenge
	```js
	function Person(name){
	  this.name = name;
	}
	
	Person.prototype.greet = function(otherName){
	  return "Hi " + otherName + ", my name is " + name;
	}
	```
	
	Hint: add a `this.` somewhere..
* You can now sign up!	

	* Link your GitHub account
	* In the `Clan` field enter **RaveWebMedia**. This way we'll be part of the same team and we'll be able to challenge each other.


# Homework

### Codewars katas

- [ ] Complete at least 2 challenges (aka *katas*) on the beginner level (aka *8 kyu*).

### Project 

Work on [Filtr Findr](../../projects/filtr-findr):

- [ ] Brainstorm ideas for *your own app*, and upload your sketches / notes to your GitHub repository

### Blog 

Pair up with another person (not your team mate) and **give each other feedback** on your peer learning mini-lessons. 

Use the questions above to give / get feedback on your [mini-lessons' content](#mini-lesson-content) and [delivery](#delivery).

Then write down a *summary* of the feedback you received and a *list of action points* in response to the question: 

> What can be **improved**?