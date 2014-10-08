# Week 2

## Today

* Principles of **programming**. 
* Adding **behaviour** to your app. 
* **Brainstorming** app ideas.


## Blog review

*Blogging* on [Fourthfloor.me](http://fourthfloor.me)

* **Each week** you will be given a topic about which to write (at least **200 words**), based on the weekly lecture.

* Your **final mark** will be based on your blog, as well as your project.

* Include **work-in-progress screenshots**, **hyperlinks**, **research**, **tweets**..

* Tag your posts with **WEB14203**

How can we make this **work for you**?

[My blog](http://www.fourthfloor.me/blogs/mmenapace/)


## Remember your brief?

Make an app that helps people **make a decision**.

The app must take in some human **input**, use **code** to manipulate it, and then present a human-readable **output**.

You can use **data** from the Web to help people make a decision.


## Brainstorming

**Inspiring apps** that help people make decisions

Context | App | Data
------------ | ------------- | ------------
Going out (using public transport) | [Citymapper](https://citymapper.com/london/apps)  | [TFL](https://www.tfl.gov.uk/info-for/open-data-users/our-feeds)
Going out (using buses) | [Jump](http://www.jumpbusapp.com/) | [TFL](https://www.tfl.gov.uk/info-for/open-data-users/our-feeds)
Going out | [Authentic weather](http://authenticweather.com/)| [Wunderground](http://www.wunderground.com/weather/api)?
Staying in (cooking) | [What should I make for dinner?](https://itunes.apple.com/gb/app/what-should-i-make-for-dinner/id432085816?mt=8) | some [recipes data](https://www.google.co.uk/#q=recipes+api)

- [ ] comparison sites?
- [ ] brainswarming exercise


## Remember HTML + CSS + JavaScript?

Different **languages**, different **concerns** (or jobs/purposes)

HTML | CSS | JS
------------ | ------------- | ------------
structure and content | style and design   | behaviour and logic
what | how | if
ingredients | serving suggestions | method

Today we're focusing on **JavaScript**


## Robot time!

Let's pretend I'm a **robot** and you have to **code me**.

* **Mission**: find an object in the room, pick it up.
* I only understand these **commands**: `walk(steps)` and `turn(degrees)`
* I can answer **questions**, only with a `yes` or `no`

People usually start with very *specific instructions* (eg: walk 3 steps, turn 45 degrees, walk 2 steps..)

We can then make these instructions more *abstract* and *flexible* with **logic** and **functions**.

- [ ] Slide to show the game rules	
	

## Let's talk about POP

Principles of Programming

**Building blocks**

Variables | Functions | Logic
------------ | ------------- | ------------
Data | Actions   | Decisions
nouns | verbs | conjunctions


From [Codecademy's introduction to functions](http://www.codecademy.com/courses/javascript-beginner-en-6LzGd/0/2?curriculum_id=506324b3a7dffd00020bf661)

> Imagine you are trying to teach your friend how to bake many different types of cakes.

> Each cake takes in different ingredients (**inputs**). But the **`bake` instructions** are always the same. For example:

> * Pre-heat the oven at X degrees
> * Mix all the ingredients in a bowl
> * Put contents into oven for Y mins

>And the **output** will be a different cake each time.

>It is tedious to have to repeat to your freind the same `bake` instructions every time. What if we could just say `bake(180 degrees, 20 minutes)` and your friend would know to execute those three steps? That is exactly what a function is!


## Turn your app into a game

To better understand how variables, functions and logic work, let's build a **paper-scissors-stone** game.

    var userChoice = prompt("Do you choose rock, paper or scissors?");
	var computerChoice = Math.random();
	
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	} else if(computerChoice <= 0.67) {
		computerChoice = "paper";
	} else {
		computerChoice = "scissors";
	} 
	
	console.log("Computer: " + computerChoice);
	compare(userChoice, computerChoice)
	
	function compare(choice1, choice2)
	{
	    if (choice1 == choice2) return "The result is a tie!";
	    
	    if (choice1 == "rock")
	    {
	        if (choice2 == "scissors") return choice1
	        else return choice2
	    }    
	    else if (choice1 == "paper")
	    {
	        if (choice2 == "rock") return choice1
	        else return choice2
	    }
	    else if (choice1 == "scissors")
	    {
	        if (choice2 == "paper") return choice1
	        else return choice2
	    }
	}


## Homework

* **Draw the Web**!







