# The Web Audio API

> The Web Audio API is a high-level JavaScript API for processing and synthesising audio in web applications. 

> From [Getting Started with Web Audio API](http://www.html5rocks.com/en/tutorials/webaudio/intro/)


<!--The goal of this API is to include capabilities found in modern game audio engines and some of the mixing, processing, and filtering tasks that are found in modern desktop audio production applications.-->

The metaphor behind this API is that you manipulate audio **nodes**, connecting **sources** to **destinations** with however many or little nodes in between.

![](http://www.html5rocks.com/en/tutorials/webaudio/intro/diagrams/simple.png)

* Sources (inputs) can be generated audio, sound files, microphone streams. 

* The destination (output) is generally your headphones or speakers, but since the output is a stream of binary data we could convert it in all sorts of unconventional ways (starting from sound visualisation).

### Let's start making noise in the browser

Open up a Web browser (we'll use Chrome), on any page (better if you use a blank page `about:blank` so other scripts won't interfere with your noise-making fun).

Open the JavaScript Console: `View > Developer > JavaScript Console` or <kbd>alt</kbd> + <kbd>cmd</kbd> + <kbd>j</kbd>

#### [AudioContext](https://developer.mozilla.org/en/docs/Web/API/AudioContext)

<!--Everything in Web Audio happens in the context of the AudioContext. Every application needs one, so let's start off by creating one. http://codepen.io/Theodeus/blog/web-audio-synth-part-1-generating-sound -->

The first building block of the WebAudio API is `AudioContext`, which you can use to manage and play sound files.

In the Console, type:

```js
var a = new AudioContext()
```

#### [Oscillator](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode) 

The quickest way for you to generate a sound is using an *oscillator*, which is not a sex toy. It's a special *node* that generates a periodic, oscillating electronic signal, aka a wave.

![](wave.png)

```js
var o = a.createOscillator()
```

To hear the sound it produces, you have to connect it to a *destination*. 

<!--`AudioContext` has a [default destination](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/destination).-->

```js
o.connect( a.destination )
```

And then start it.

```js
o.start()
```

To change the sound **pitch**, modify the oscillator's `frequency` value.

```js
o.frequency.value = 100
```

##### Your turn

1. Try and set `o.frequency.value` to a different number. What happens?
* See if you can change the [type](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/type) of wave the oscillator produces.. (click the link to *read the manual* about that aspect of the Oscillator's API)
* How do you stop the oscillator? Well, [read the manual to find out](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode). And how do you start it again?
* How do you change the **volume**? This time, you may want to *google* your task and see what solutions you find.

<!-- var gainNode = audioCtx.createGain() -->

### Let's make a (basic) musical instrument

#### Repetition sucks

Repeating (almost) the same instructions over and over can quickly become inconvenient and boring.

For instance, every time you want to start an oscillator, you have to write at least 3 instructions:

1. create oscillator
* (possibly) change its frequency
* (possibly) change its wave type
* connect it
* start it 

```js
o = a.createOscillator()
o.connect( a.destination )
o.frequency.value = 150
o.start()
```

With people, you can agree on a *verb* or *phrase* to mean a set of actions. Like, you would ask another person to `make a tea` rather than `find a cup, fill it with water, transfer the water into a kettle, switch on the kettle, wait until the water boils` etc.

#### Functions

With computers, you can define a **function** which groups sets of instructions together.

```js
function playOscillator()
{
	o = a.createOscillator()
	o.connect( a.destination )
	o.frequency.value = 150
	o.start()
}
```

When you want those instructions to be executed, you *call the function* by name instead of typing out all those instructions.

```js
playOscillator()
```

You may have noticed that in JavaScript blocks of code are contained in curly brackets `{}`. 

What are the round brackets `()` for? And why are they sometimes empty (eg: `o.start()`) and sometimes containing values (eg: `o.connect( a.destination )`)? The answer is: *flexibility*.

In the example above, the oscillator's frequency is set to 150: `o.frequency.value = 150`.. but what if you want to play a different note? 

Writing another function just to change one number is not efficient (think about how many functions you'd have to write in order to cover a decent amount of frequencies). Instead, you can turn that `150` into a **variable**: a *placeholder* for a value that can change.

Let's edit `playOscillator` so that it's more flexible:

```js
function playOscillator( frequency )
{
	o = a.createOscillator()
	o.connect( a.destination )
	o.frequency.value = frequency
	o.start()
}
```

Notice the new `frequency` variable, which is in the round brackets right after the function's name, and then on the third instruction inside the function (where `150` was).

Now we can play any frequency:

```
playOscillator( 200 )
```

Try with any number, from roughly 100 to 6000.

What if you want to play one note at a time? You need to add some code to `playOscillator`, checking if there's already a note playing (in which case, you just want to change the frequency instead of spawning a new oscillator)

```js
function playOscillator( frequency )
{
	if (typeof o == 'undefined') // this means "if o doesn't exist"
	{
		o = a.createOscillator()
		o.connect( a.destination )
		o.start()
	}	
	o.frequency.value = frequency
}
```

> So, whenever you notice *repetition* in your code, it's a good idea to start thinking about **functions** that can wrap your repeated instructions into reusable and flexible blocks of code.

##### Your turn

1. You may have noticed that if you call `o.stop()` then subsequent calls to `playOscillator` won't work as expected. 
  
	Why? Because `o.stop()` effectively *disconnects* the oscillator from its destination, making it inaudible. The code in curly brackets after `if (typeof o == 'undefined')` only runs if `o` is `undefined`, which is not the case anymore (`o` is an OscillatorNode).. so what to do?

	Write a new function, call it something like `stopOscillator` and as part of its code make sure you "reset" `o` to `undefined`

<!--

function stopOscillator()
{
	if (typeof o != 'undefined') // this means "if o exists"
	{
		o.stop()
		o = undefined
	}	
}

-->


#### Classy

With `playOscillator` and `stopOscillator` you have a *monotone instrument*. What if you want an *orchestra*?

Well, we need to teach the browser what we mean by *monotone instrument*, ie we need to make a sort of blueprint for it, which we can use later to spawn many instances of that instrument into an orchestra.

In programming lingo, a blueprint is called **class**.

If another coder tells you *let's turn your functions into a monotone instrument class* she means something like this

```js
function MonotoneInstrument( audioContext )
{
	this.context = audioContext
	
	// a function to make the instrument play a certain frequency
	this.play = function( frequency )
	{
		// ...  
	}
	
	// a function to make it stop!
	this.stop = function()
	{
		// ...
	}
	
	// a function to change the instrument's frequency
	this.setFrequency = function( frequency )
	{
		// ...
	}	
}
```

#### Functions inside functions

Looking at the skeleton of `MonotoneInstrument` you can see that it's a big function that contains a few other functions.

We haven't yet written the code for all those inner functions, but you can already work out that `MonotoneInstrument` is a thing you'll be able to `play`, `stop` and `setFrequency`.

(By defining those functions we started to outline the **`MonotoneInstrument` API**: the ways in which you and other coders will be able to interact with it.. more on that later)

Let's flesh out those functions

```js
function MonotoneInstrument( audioContext )
{
	this.context = audioContext
	
	this.play = function( frequency )
	{
		if (typeof this.oscillator == 'undefined') // which means "if this.oscillator doesn't exist"
		{
			this.oscillator = a.createOscillator()
			this.oscillator.connect( this.context.destination )
			this.oscillator.start()
		}	
		this.setFrequency( frequency )
	}
	
	this.stop = function()
	{
		if (typeof this.oscillator != 'undefined') // which means "if this.oscillator exists"
		{
			this.oscillator.stop()
			this.oscillator = undefined
		}	
	}
	
	this.setFrequency = function( frequency )
	{
		if (typeof this.oscillator != 'undefined') // which means "if this.oscillator exists"
		{
			this.oscillator.frequency.value = frequency
		}	
	}	
}
```

Copy the block of code above (the whole `MonotoneInstrument` class) into your browser's console (to teach it what you mean by `MonotoneInstrument`).

Then, create a couple of instruments (you can call them whatever you want).

```js
var a = new AudioContext()
var bass = new MonotoneInstrument( a )
bass.play(150)
var clarinet = new MonotoneInstrument( a )
clarinet.play(300)
```

##### Your turn

Currently you can `play` and `stop` monotone instruments manually, but wouldn't it be great if you could give the browser a *score* (some sort of sequence of notes and their durations) and then it would play it for you?

Let's break that grand vision down into smaller steps:

1. Make `MonotoneInstrument` able to play a note for a variable *duration* of time. That means, make it start playing and then stop after X seconds have passed.   
  
	Hint: see the manual for the [WebAudio API `OscillatorNode.stop` function](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/stop), notice that you can tell it `when` to stop..
* Once `MonotoneInstrument` can play one note for a defined *duration*, you can stack *notes* one after the other: when one note has finished playing, play the next one until there are no more notes. 





<!--
Make a new class, based on `MonotoneInstrument`, for an instrument which can play a sequence of notes.

Your new class will have a `playSequence` function which you can use like this

```js
instrument.playSequence( [ 150, 160, 170 ], [ 1, 2, 1 ] )
// [ 150, 160, 170 ] represent frequency values
// [ 1, 2, 1 ] represent duration values (in seconds)

```



```js
function SequenceInstrument( audioContext )
{
	this.playSequence = function ( frequencies, durations)
	{
		for ( var i=0; i<frequencies.length; i++ ) 
		{
			// 
		}
	}
	
	// things inherited from MonotoneInstrument below
	
	this.context = audioContext
	
	this.play = function( frequency )
	{
		if (typeof this.oscillator == 'undefined') // which means "if this.oscillator doesn't exist"
		{
			this.oscillator = a.createOscillator()
			this.oscillator.connect( this.context.destination )
			this.oscillator.start()
		}	
		this.setFrequency( frequency )
	}
	
	this.stop = function()
	{
		if (typeof this.oscillator != 'undefined') // which means "if this.oscillator exists"
		{
			this.oscillator.stop()
			this.oscillator = undefined
		}	
	}
	
	this.setFrequency = function( frequency )
	{
		if (typeof this.oscillator != 'undefined') // which means "if this.oscillator exists"
		{
			this.oscillator.frequency.value = frequency
		}	
	}
}
```-->