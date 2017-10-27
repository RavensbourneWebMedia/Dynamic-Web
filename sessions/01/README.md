# Week 1

### Today, Friday 7th October 2016

1. [Welcome back](#welcome) :)
2. What are [apps](#what-is-an-app)? Key concepts: interface, data and logic 
3. Project: [Filtr Findr](#your-brief)
4. [Workshop](#workshop): HTML + CSS + JS recap, while building the `app template`

### Your [homework](#homework) and [blog](#blog)!


# Welcome

1. [What is this course about?](../../README.md)
2. [What's the plan?](../../README.md#plan) 
3. [What can you learn?](../../README.md#learning-goals)
4. [Rules of the road](../../README.md#rules-of-the-road)
5. Keeping a **journal** to record your creative process is extremely important. Don't let your ideas and thoughts fade away! Think of your blog as your *digital sketchbook* (more on that [here](https://github.com/RavensbourneWebMedia/Blogging#why-blogging)). We ask you to blog regularly and we'll check that you do it every week.
6. **Peer learning**: [one of the most effective ways](http://visible-learning.org/hattie-ranking-influences-effect-sizes-learning-achievement/hattie-ranking-teaching-effects/) to learn something is to teach it to someone else. During this unit you'll be sharing your skills and knowledge in class, leading mini-tutorials and moderating debates. Starting with [your homework for next week](#peer-learning-research)! 


# What is an app?

Let's sketch a **working definition** of *app*.

How do you explain what an app is to someone or something who's never seen/used one, like an *alien*?

![](assets/et.png)

<!--
### Your turn

Pretending one of us is an *alien*, let's ask some obvious questions and jot down some answers and key words on post-its. 

If people answer with jargon, like *software* or *download*, then we ask them to explain those too to our *alien*.
-->

* What does an app **look like**?  
* How do you **interact** with an app? Do you speak to it, do you shake it etc?
* What are apps **made out of**?
* **Who uses** apps? Why?

### What is an app, then?

There is no clear-cut definition of *app*.

For the sake of this course, we like to think of apps as small **digital tools** that are **connected** to the Web.

To use an analogy, if a website is like a *book*, which you use to find and consume information, an app is closer to a *whisk*, which you use to make something with.

![](assets/whisk.png)

Apps generally have a specific function, or a small set of functions. They are not trying to do everything.

![](assets/swiss-army-knife.png)

This is *not* a good app. It is not **usable**, even though all the tools it features could be usable (and possibly useful) on their own.

Good apps do **one thing** and do it well.

## Key concepts

### Interface

The parts of the app you directly interact with (touch, read, click, speak to etc.)

A good interface must be *usable* and should align to a user's *mental models* (how does s/he expect the interface to work). 

### Data

The *fuel* of an app, the raw ingredients that the interface presents to you (more or less *cooked*). 

Data is also the information that you provide an app with: the username you type in, the pictures you upload, the geo-location coordinates apps stream...

### Logic

The **coded rules** that determine how the app interface reacts to your *inputs*, how it manipulates data and how it presents it to you (*output*).

At its core, the logic building blocks of an app are statement that sound like `if {this} then {that}`, eg: `if you click on this button, the app will show you this section`.

Many `if {this} then {that}` blocks can build quite complex behaviours.


# Your brief

### Make an **app** that helps **people** sort through **data** to **find** who/what they are looking for.

**The *who/what* is up to you**. People may be looking for other people in their community to do something together, or they may be looking for food recipes, places to go, books to read, films to watch...

No matter which data the app uses, its **logic** will be the same:

1. **Load data** from an online database 
2. Capture **user inputs**, when they click on buttons, type into text boxes or choose from a dropdown menu etc.
3. **Sort data** according to user choices, for instance filtering out data that doesn't match their choices
4. Present a human-readable **output** 

All the project material is [here](../../projects/filtr-findr). 

### Interface

Here's an initial sketch of how the app may look and work.

![](assets/monochrome_moqup.png)

This is what we're focusing on today.

### Logic

We'll learn how to use JavaScript to assign *behaviour* to your interface, coding logic like `if you click this button, then do XYZ`.

We'll also learn that you don't need to write all this code from scratch. There are plenty of ready-made code *libraries* (such as jQuery) that you can use in your own project. No need to reinvent the wheel!

### Data

We'll learn how to create structured data, aka a **database**. 

No scary formula or data crunching though! 

### Your own app

In class we will demo how to build an example app, which we call the `app template`. This will happen during the first three weeks. You will then use the `app template` to build *your own* app, based on your own idea, and iterate that through the rest of the unit. 


# Workshop

We're going to refresh our brains and hands on how to:

* Write HTML to **structure** your app interface 
	* Create several types of **text** (paragraphs, headings)
	* Create **inputs** (dropdowns, buttons, text boxes)
	* Create **links** to other Web pages
	* Add **images**
	 
* Write CSS to **style** your app interface
	* Design your app **typography**
	* Set your app **colours**
	* **Search** for code online and integrate what you find in your project (that's what coders do most of the time!)

* Write JavaScript (JS) to assign **behaviours** to your app interface
	* Select interface elements
	* Hide and show them, when certain other elements are clicked

## Let's code

But let's not *reinvent the wheel*. We could start from scratch, creating a new `index.html` file and laying out the bare bones of an HTML document (remember `<html>`, `<head>` and `<body>`?). Instead, we assume that you know all that already, so we'll use a **boilerplate**.

> Go to [html5boilerplate.com](https://html5boilerplate.com/) and download the latest version. Then open it in your favourite code editor.

### Content first, style later!

It's good practice to build the **HTML** first, and then make it _stylish_ with CSS.

> Open `index.html`.

As you can see, HTML5Boilerplate comes with a lot of handy features pre-packaged, which we won't get into for now. Let's concentrate on crafting the skeleton of our `app template`.

> Inside the `body`, remove the `<paragraph>` and put in two `<section>` elements

```html
<body>
	...
	<!-- Add your site or application content here -->
	<section></section>
	<section></section>
	...
</body>
```

### Fancy logo

It's important. I recommend [hipsterlogogenerator.com](https://www.hipsterlogogenerator.com) for quick and easy hipster logos :)

> Take a couple of minutes to quickly make your own fancy logo.

> To place your logo in your HTML document create an `img` element inside the first `section`. `img` element doesn't need a closing tag (it's one of the exceptions to the general rule of closing tags).

```html
<section>
	<img src=" ">
</section>
```

Every `img` requires a link - either a weblink to the image or the location of the image you're using in your files. 

```html
<section>
	<img src="img/hipsterlogo.jpg">
</section>
```

If you're taking an image from the web you need to use the link to the image alone. 

> Right-click on the image and `Copy Link Address`. Then paste it inside `src=" "` 

```html
<section>
	<img src="http://placekitten.com/200/300">
</section>
```

Don't worry just now if it's too big, we'll resize it later on.

### Headings

> Inside the first `section`, add a **heading** `h1` and a **sub-heading** `h2`. These will be the most important pieces of information of your app's main page.

```html
<section>
	...
	<h1>Your app name</h2>
	<h2>What it does</h2>
</section>
```

### Paragraphs

> Write a paragraph to explain how your app works, and what you want people to do first.  

```html
<section>
	...
	<p>Swap skills and time with people in your community!</p>
  	<p>Just choose an activity to get started.</p>
</section>
```

### Dropdown

This is the first interactive element of your app.

It's a set of `options` that people can choose from.

> Under your headings, add in a `<select>` element. Inside that, add in some `<option>` elements.

```html
<section>
	...
	<select>
		<option>Keep my pet</option>
		<option>Bake a cake</option>
		<option>Move my piano</option>
	</select>
	...
</section>
```

### Button

> Next you'll need a `Find` or `Search` button. 

```html
<section>
	...
	<button>Find</button>
	...
</section>
```

### Hyperlinks

You can add **hyperlinks** to our content using the `a` element.
	
```html
<a href="http://example.com"> the clickable text </a>
```

Did you know `a` is for *anchor*? :anchor:

> Add in a little credit at the bottom of your page, just above the closing `</body>` tag.

```html
	...
	<p>Made with love by <a href="http://example.com"> Your Name</a></p>
</body>	
```

## Styling

Now the stylish part: **CSS**!

There's a `link` in the `head` of your app which points to a CSS file called **main.css**. This is where you add your own styles.

```html
<link rel="stylesheet" href="css/main.css">
```

You can have more than just one CSS file, and it's good practice to work on several small files rather than one long document you may get lost into.

### CSS basics

You use CSS to style HTML.

CSS looks and works differently than HTML. 

```css
selector
{
	property: value;
	property: value;
}
```

The part before the curly brackets `{` and `}` is the **selector**. This ***selects* the element** from your HTML document.

In CSS you can select multiple HTML elements in one go.

For example, to select all paragraphs you can write

```css
p
{
	/* your styles for paragraph here */
}
```

CSS **properties** define how HTML elements are displayed.

The first bit is the property name, eg `color`, and the second bit is the value, eg `green`. They are separated by a `:` colon, and you MUST end each line of CSS with a `;` semicolon (for real, otherwise your browser will choke).

For example ...

```css
p
{
	color: green;
}
```

... will turn *every* paragraph in your HTML green.

### Play around a bit

> Let's spend the next 5-10 minutes getting familiar with CSS. It doesn't matter if your app looks a bit funny for now. Things you can do:

> * change the `color` of your `h1` or `h2` elements
> * align some elements to the `center` (*google* how to do it)
> * hide some elements
> * change the `background-color` of the whole page 

> What else would you like to do? Try and *google* it first, then we can do it together (if it's not too whacky).

### Search for solutions! 

Part of learning to code and being a coder is searching for answers, every day. You don't need to remember everything and you don't need to learn everything immediately. 

**All the answers can be found on the Web! As coders, we must get used to searching online for solutions.**

### Inspect websites you like

Do you remember how to see the code behind every site on the Web? You can use the **Web Inspector** to do this. It's like x-ray specs for websites.

> Go to a website (any website) and right-click anywhere on that page, then select `Inspect` (or `Inspect Element` in some browsers).

On the **left panel** of the `Elements` tab you can see all the HTML code for the page you're inspecting. By clicking on an HTML element you'll reveal all the CSS applied to it, on the **right panel**.

You can also play with this code and change the way your favourite websites look (don't worry, your changes won't affect how other people are experiencing that site). :scream:

> Go to a site you like, right-click > `Inspect` and then see if you can find which colours it uses.

### Fonts

Text is the major carrier of information on an app, so it's good practice to start with **typography**, or *type setting*. That means defining how texts are going to look, which fonts your app is going to use, and the proportions between them in your app layout. 

> You can grab a free **font** from [Google Fonts](https://fonts.google.com): 

> 1. Pick a typeface you like
> * Click on the red `+` button
> * Follow the instructions in the dark popup at the bottom of the page (where it says `1 Family Selected`)
> * Copy the `link` code for it and paste it in your app `head` in Thimble. 

>	Where? Before `main.css`

>	```html
	<head>
		...
		<link href='https://fonts.googleapis.com/css?family=Lato:400,300,700,900' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="css/main.css">
	</head>	
	```
> * In `style.css`, define the font for the `body` element (all other elements will inherit it). 

>	```css
body
{
	font-family: 'Lato', sans-serif;
}
```

We're using the font *Lato* as an example, but you can pick **whichever font** you like and change your CSS code accordingly. There are 700+ fonts available on Google Fonts!
	
Then you can set **more specific rules** for headings, paragraphs and bold elements. For instance, you could use a different font just for headings, as well as changing many other aspects of your typography:
	
* `font-family` 
* `font-size`
* `font-weight`
* `font-style`
* `line-height`
* `letter-spacing`
* `word-spacing`
* `text-align`
* `text-decoration`
* `text-transform`
* `text-indent`	

> `font-family`, `font-size` and `color` are a great place to start!
	
### Background images

You can add images to your app via CSS. This is useful if you want to set different images for different screen sizes (eg: one for mobile, a different one for tablets) as well as fine-tuning how your images should display.

> In your `main.css` create a new `background-image` rule for `html`

```css
html
{
	background-image: url(  );
}
```

You can use your own image files (put them inside the `img` folder) or use images from the Web (provided they're licensed for re-use).

For now, we'll use [unsplash.com](https://unsplash.com), where you can find beautiful, high-res pictures that are free to use for *whatever* purpose you want. Amazing! Read their [licence](https://unsplash.com/license) if you don't believe me :)

> 1. Find an image you like on [unsplash.com](https://unsplash.com)
> * Click on the `↓` (Download) button on the bottom-right corner of the picture. This will open a new browser tab showing your chosen picture only.
> * **Copy** the address (URL) of that image. It starts with `https://images.unsplash.com` and it's quite long.
> * **Paste** it in your `main.css` inside the `body` `background-image` rule like so

```css
html
{
	background-image: url(https://images.unsplash.com/BLABLABLABLABLA);
}
```

By default background-images *tile*, but we want them to take up the whole available screen space, without losing their aspect ratio (no squashing). 

We can achieve that with `background-size`. This property can take various values: pixel sizes, percentages, and then a couple of interesting keywords. 

* `contain` will scale the image so as to be as large as possible providing that it is **contained** within the background positioning area. 
* `cover` instead, will scale the image, this time to be as large as possible so that the background positioning area is completely **covered** by the background image.

> Add `background-size: cover;` to the `html` rule.

```css
html
{
	background-image: url(https://images.unsplash.com/BLABLABLABLABLA);
 	background-size: cover;
}
```	

Now the image *covers* the content of your app, ie the `body` and you may have noticed that it doesn't cover the *whole browser window*. The last touch we can add to the background image, to make it cover the whole browser window is adding `background-attachment: fixed;`

```css
html
{
	background-image: url(https://images.unsplash.com/BLABLABLABLABLA);
 	background-size: cover;
 	background-attachment: fixed;
}
```  

### Dropdown

To style your dropdown, you first need to know how it's called in HTML: `select`

> In `main.css` add a new CSS block

```css
select
{
	background-color: red; 
}
```

This will turn your dropdown's **background** red. Go ahead and change that to your favourite colour. 

```css
select
{
	background-color: red; 
	color: white;
}
```

Currently the dropdown looks too small and its text is not **comfortable to read**. How do you fix that?

```css
select
{
	...
	font-size: 200%;
}
```

> Adjust the `font-size` to suit your app content.

### Button

> Add a new CSS block that targets the `button` 

```css
button
{
	border: none;
	background-color: red; 
	cursor: pointer;
}
```

> Change the `color` to match your design. 

It's good practice to style all *interactive* interface elements the same **colour and prominent**.

Now you can apply some of the styles from the dropdown to the `button`. 

> How do you make **rounded corners**? With `border-radius`.

```css
button
{
	...
	border-radius: 10px;
}
```

Nice. It looks a bit squished though. We can use `padding` to add some space between the button text and its border.

```css
button
{
	...
  	padding: 10px;
}
```

### Button states

As an interactive element, a `button` should respond to user interactions, through its look & feel. 

For example, when you roll over a button, it's good practice for it to change its appearance, acknowledging that *something is happening*.

> Add a new CSS block that targets the `hover` state of your `button` 

```css
button:hover
{
	color: black;
}
```

Now when you roll over the button, its text will turn black.

### Smooth transitions

Currently the text colour flashes from the normal state to the `hover` state.

> You can make that transition smooth using the `transition` CSS property

```css
button
{
	transition: 0.6s;
}
```

`s` stands for seconds.

### Responsive design

So far we've styled individual elements like `a`, `img`, `select` and `button`. It's time to look at the bigger picture. Our design has a couple of issues:

1. Texts over the background image are not *legible*.
* On large screens, your app looks *odd*. 

To address these, we can add a semi-transparent background that will focus people's attention to where they should read and click.

> Create a new CSS rule for `section` and give it a `background-color`.

```css
section 
{
	background: rgba(255,255,255,0.6);
	padding: 20px;
}
```

The CSS above will add a white semi-transparent background to the `section` and a `20px` padding around its content, making it all more *legible*.

It still looks *odd* on large screens though.

```css
section 
{
	...
	max-width: 500px;
 	margin: auto;
}
```

`max-width` will limit the `section` width to maximum 500px (roughly the width of a smartphone) and `margin: auto;` will put it in the centre. 

There's much more to responsive design than this, but these quick tweaks will do for now.

## Making a list

At the moment your interface features **input** elements and some text. 

What about the **output** elements? 

<!-- In other words, how your interface would display a **list of results** from the database. -->

It's common practice to **mock up** interfaces with *fake data*, and then hook them up with *real data*.

So, we will mock up a **list** of results (people in our *community skill-swap* app example) using HTML and CSS. In the next weeks we'll learn how to populate that list with real data using JS.

> In `index.html` create an **u**nordered **l**ist `ul` under the `button`

```html
<ul>
</ul>
```

> Inside the `ul` create a **l**ist **i**tem `li`

```html
<ul>
	<li></li>
</ul>
```

Think about what you want your search results to display. For example we could have an image `img`, a heading `h2` and a short paragraph `p`.

> Inside the `li` put some *placeholder* content. 

>	```html
<ul>
	<li>
		<img src="http://api.randomuser.me/portraits/women/27.jpg">
		<h2>Jo</h2>
		<p>I like coding and pizza</p>
	</li>
	<li>
		<img src="http://api.randomuser.me/portraits/men/33.jpg">
		<h2>Mo</h2>
		<p>I like cats and plants</p>
	</li>
</ul>
```

A couple of list items will give us an idea of how your interface will display search results.

We can now **style** these. 

For example, how can we remove the *bullet points* from the list?

> In `main.css` select the list `ul` and define its style. 

```css
ul
{
	list-style: none;
}
``` 

In CSS you can select elements **nested** inside other elements like this

>	```css
li img
{
	width: 50px;
}
```
	
The rule above will select all images `img` inside list items `li`.

Confused? Play [CSS Diner flukeout.github.io](http://flukeout.github.io), an online game that teaches you **CSS selectors**! 

> Go ahead and style the list and its components. 
	
> Remember, if you don't know how to style something, Google may have the answers! 

When you search for a solution online, it's good to start your *search query* with the coding language you're using, like `css`, followed by the problem you are trying to solve or the effect you are trying to achieve. 

For example `css how to round the corners of a button`.

### Sections

Our `app template` will have two sections:

1. **Home** section with dropdown menu, `Find` button and search results
* **Details** section for each item in the search results 

#### The `#home` section

Let's finish off the home section interface.

You've already created two separate `section`s inside your HTML. One of those sections contains the `dropdown`, the find `button` and the results list with placeholder content inside.

> Give the first `section` (which contains the `dropdown` menu) an `id="home"`

>```html
<section id="home">
	...
</section>
``` 

#### The `#details` section

Underneath the `<section id="home"> ... </section>` you should already have an empty `<section></section>`.

> Give this `section` an `id="details"` and make some space in between the opening and closing tag.

>```html
<section id="details">
</section>
``` 

> Inside `<section id="details"> ... </section>` create a new `<div id="person"></div>`. This will be the *details* screen, where a selected person's profile will be displayed.

In the `#home` section you created an unordered list `ul` with list items inside `li`. Within those you put an image `img`, a heading 2 `h2` and a paragraph `p`.

We're going to use that `img`, `h2` and `p` in `#details`. 

> Copy the `img`, `h2` and `p` from the `li` in `#home` and paste them inside `<div id="person"> </div>` like so

```html
<section id="details">
	<div id="person">
		<img src="https://avatars1.githubusercontent.com/u/116104">
		<h2>
			Matteo
		</h2>
		<p>
			I like code and cake
		</p>
	</div>
</section>
```
   
Your users may want to move back and forth between `#home` and `#details`. For that you'll need a `Back` button!
 
> Add in `<a id="back">Back</a>` above `<div id="person">`

```html
<section id="details">
	<a id="back">Back</a>
	<div id="person"> 
 	...
``` 
	
Your users will also need a way to contact the person. Add in a contact button inside your `#person`: `<a class="contactButton">Contact Matteo</a>`

Your `<section id="details"></section>` will look something like this:

```html
<section id="details">
	<a id="back">Back</a>
	<div id="person">
		<img src="https://avatars3.githubusercontent.com/u/9767977">
		<h2>Aimee</h2>
		<p>I like code and cake</p>
		<a class="contactButton">Contact Aimee</a>
	</div>
</section>
```

<!--

### Final touches

* Media queries

	```css
	/* if the screen is larger than 600px..  */
	@media (min-width: 600px) {
	  body {
	    max-width: 600px;
	    margin: auto;
	    font-size: 1em;
	  }
	}
	```
* Icons using [FontAwesome](https://fortawesome.github.io/Font-Awesome/)

	```css
	.dropdown
	{
	  position: relative;
	}
	.dropdown:after
	{
	  content: "\f063";
	  font-family: FontAwesome;
	  position: absolute;
	  top: .75em;
	  right: .75em;
	  font-size: 2em;
	  pointer-events: none;
	}
	```

* Make the app look proper on a phone. Google `how to stop phone zooming out pages`

* Make the app **full screen**. Google `how to hide address bar in mobile browser` and you should find [this tutorial](http://www.html5rocks.com/en/mobile/fullscreen/) 

-->


## Meet JavaScript

So far we learned (or rather recapped) how to build interfaces using **HTML** + **CSS**.

Your app interface, despite being very stylish, doesn't do much (yet).

To set things in motion, to have a truly interactive experience, we need another language: **JavaScript**.

##### **HTML** → content and structure  

##### **CSS** → style and design 

##### **JS** → behaviour and logic

We'll have a proper dive into JS next week. For today we'll ease into it using one of the most popular JavaScript tools: **jQuery**.   

### Meet jQuery

![](assets/john-resig.jpg)

<!-- John Resig, jQuery and the Open Source Process by Andreas Dantz on Flickr https://www.flickr.com/photos/szene/6227426946 -->

The [first version of jQuery](http://ejohn.org/files/jquery-original.html) was written in 2006 by a guy called John Resig. He noticed how he was using the same JS functions over and over, across different projects. So he put together a JS toolkit, aka a *library*, and since it was working well for him, he decided to share it with the NYC Web dev community, and then with the rest of the WWW.

> Code libraries are **collections of pre-written functions** which you use to avoid re-writing the same code over and over again.   

Over the years, jQuery has been peer-reviewed and enhanced by thousands of developers. It is currently the [the most popular JavaScript library](http://trends.builtwith.com/javascript) on the Web, with ~78% of the top 1 million websites using it! 

And it's FREE!

[![](assets/jQuery.png)](https://jquery.com)

#### What is jQuery for?

jQuery makes it easy to **select** HTML elements and *manipulate* them, for example hiding, showing, moving around and changing the content of a bunch of HTML elements.

<!-- You may hear high-brow geeks say that `jQuery is a DOM manipulation library`. -->

#### How does jQuery work?

jQuery uses CSS-like **selectors**.

For example, if you want to select all `h1` elements in your HTML, you can do it like this

```js
jQuery('h1');
// notice the lowercase j and capital Q in jQuery
``` 

...which is the equivalent of telling your browser to `select all h1 elements in the HTML`.

You can then apply functions that **manipulate** those selected elements. 

For example, if you want to hide all `h1` elements in your HTML, you can do it like this

```js
jQuery('h1').hide();
``` 

So to recap:

1. Select
* Manipulate 

It's common practice to store a jQuery selection in a *variable*, and then use that variable throughout your code. That way you don't have to select the same HTML elements over and over again.

```js
var h1 = jQuery('h1');
h1.hide();
h1.fadeIn();
```

Variable names are up to you, so in the example above you could call it `var heading1 = ...`, or `var my_h1 = ...` or even `var whatever = ...` 

#### Dollar$

There's a saying that goes like this: 

> A good programmer is a *lazy* programmer.

In practical terms, it means that programmers really like their **shortcuts**. 

There's a shortcut for jQuery too, and it's `$`

`$('h1')` achieves the same as `jQuery('h1')` and it saves you 5 key strokes! :squirrel:

#### Making stuff happen on demand

Unlike HTML and CSS, JS is a *programming* language (more on that difference next week). 

Programming has something to do with the *future*: you define instructions and *behaviour* that will happen in the future, *if* and *when* something specific happens.

For example, you may want to `hide` an element when you `click` on a button. Using jQuery, you can do it like this

```js
// select the button element(s)
var button = $('button');

// select the h1 element(s)
var h1 = $('h1');

// when someone clicks the button, hide the h1
button.click( function () 
{
	h1.hide();
});
```

### Your turn

> Open `index.html`. Notice that just before the **end** of the `body` there's a `script` that loads jQuery like this

```html
		...
		<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
		...
	</body>
</html>	
``` 

### Hide the `#details` section by default

When people open the app, we don't need them to see details about a person. Later we will write some JS code to display that `section` **when** people click on a result. For now, we just want to **hide** that part of the HTML.

> In `main.js` write

```js
$('#details').hide();
```

![](assets/jQuery-diagram.png)

The line above does two things:

1. `$('#details')`: **select** the element with `id="details"`
* Perform the `hide()` function on that selection

### When someone clicks on the `Find` button, what happens?

A lot of stuff will happen. For today, we'll start by hiding the `#home` section and showing the `#details` section. 

```javascript
$('button').click( function() {
  $('#home').hide();
  $('#details').show();
})
```

Let's break that code down.

First the outer shell:

```javascript
$('button').click( function() {
	...
	...
})
``` 

1. `$('button')` selects the `Find` button.
2. `.click( function() { ... })` says **when** the user **clicks** the selected element, *run* all the instructions inside this function.

Now *inside* the function...

```javascript
$('#home').hide();
$('#details').show();
```

1. `$('#home')`: ask jQuery (`$` is a shortcut for `jQuery`) to select the element with an id `home` with 
* Apply the jQuery `hide()` function to the selection
* `$('#details')`: select the element with an id `details` 
* Apply the `show()` function to the selection

### When someone clicks on the `Back` button, what happens?

> See if you can integrate the code below in your `main.js`.

```js
$('#back').click( function(){   
  $('#home').show();
  $('#details').hide();
});
```


# Homework

### Peer-learning research

Next week we'll dive deeper into **JavaScript** and learn about the fundamental building blocks of **programming**.

In small teams, you will research one programming concept or technique and prepare a **mini-lesson** (~15 minutes) to teach everyone else about it. 

Your mini-lesson will be **interactive**: no PowerPoint-style presentations, but instead **JavaScript demos** that everyone can follow on their computers and/or **unplugged activities**.

Who | What
--- | -----------
Will<br>Akvile | What are **algorithms**?
Tom<br>Darren | What are **variables** and how do you use them?
Josh<br>Dean | What are **functions** and how do you use them?
Afsara<br>Malore | What are `if` statements (aka **conditionals**) and how do you use them?
Francisco<br>Ajay | What are **loops** and how do you use them?
Ben<br>Rosie | What is the **JavaScript Console** and how do you use it? Check out [JS for Cats](http://jsforcats.com/) for some fun ideas
Joe<br>Rajeev | What is the **GeoLocation** API and how do you use it?  

Ideas and resources for *unplugged activities*:

* [CS Unplugged](http://csunplugged.org/activities)
* [CODE Fundamentals Unplugged](https://code.org/curriculum/unplugged)
* [CAS London Programming Unplugged](https://teachinglondoncomputing.org/free-workshops/programming-unplugged-programming-without-computers) 

Ideas and resources for *JS demos*:

* [Jon Duckett's *JavaScript & jQuery* book](http://javascriptbook.com) (link to PDF download in Slack `#dynamic-web`)
* [try.jquery.com](http://try.jquery.com)
* [JS for Cats](http://jsforcats.com)
* You're welcome to scour the Web and find some more inspiration :)

### Project 

Work on [*Filtr Findr*](../../projects/filtr-findr):

 - [ ] Create a GitHub repository for your project
 - [ ] Start jotting down ideas for your own app: how could you turn the `app template` into something related to your own interests, or the needs of a specific group of people?

### Blog 

- [ ] Analyse your favourite app in terms of [interface](#interface), [data](#data) and [logic](#logic). Some questions to help your analysis:
	
	- What *input* does the app require from you?
	- Where does the app's *data* come from? Who creates it?
	- What does the app do with that data (ie what's the app *logic*)?
	- What *output* does the app produce? 
