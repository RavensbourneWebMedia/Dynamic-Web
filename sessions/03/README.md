# Week 3

### Today, Tuesday 24th October 2017

1. Present your protoypes for feedback
2. Lecture: What are apps? Key concepts: interface, data and logic
3. Workshop: HTML + CSS + JS recap, while building the app template

### Your [homework](#homework) and [blog](#blog)!

# What is an app?

Let's sketch a **working definition** of *app*.

How do you explain what an app is to someone or something who's never seen/used one, like an *alien*?

![](assets/et.png)

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
