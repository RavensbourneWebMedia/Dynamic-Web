# Week 8

### Today, Thursday 19th November 2015

1. [Workshop](#workshop): using cloud databases
* Tutorials on [*Filter Bubbles*](#team-project)

- [ ] Announcement: Rik in da house

### Your [homework](#homework)


# Workshop

### Why a database in the *cloud*?


### All together now

1. Go to [parse.com](https://parse.com) and sign up for a free account. 
* The signup process will guide you through the creation of an *app*.

	![](assets/parse-new-app.png)

* Go to [Parse's quick-start page](https://parse.com/apps/quickstart) and choose `Data` > `Web` > `New project`. This will download a folder.
* Open the downloaded folder in a code editor.
* Notice the two scripts in the `head` of `index.html`

	```html
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
  <script type="text/javascript" src="http://www.parsecdn.com/js/parse-latest.js"></script>
  ```
  
  jQuery and the Parse JavaScript SDK (**S**oftware **D**evelopment **K**it).
* Just before the end of the `body`, there's a `script` in which Parse is initialised.

	```js
	Parse.initialize("APPLICATION_ID", "JAVASCRIPT_KEY")
	```
	
	Change `APPLICATION_ID` to your app's id and `JAVASCRIPT_KEY` to your app's JS key. You can find those in your app > `Settings` > `Keys`
	
	![](assets/parse-keys.jpg)
* Test the app in your browser.	
* Go to your Parse app and click on `Core`.

	If you didn't get an error in the previous step, you should see there's a new row in the `TestObject` table, something like this
	
	![](assets/parse-table.png)
	
	What happened?
	
	Back to the code editor, notice how the `TestObject` *class* was created
	
	```js
	var TestObject = Parse.Object.extend("TestObject")
	```
	
	Then a new *instance* of that class was made
	
	```js
	var testObject = new TestObject()
	```
	
	And finally the *data object* `{foo: "bar"}` was saved
	
	```js
	testObject.save({foo: "bar"}, 
	{
		...
	})
	```	

	With two function to handle the `success` and `error` scenarios.
  
This is Parse in a nutshell. Now go to their [JavaScript Guide](https://parse.com/docs/js/guide#getting-started) and see what other things you can do with Parse.  

In particular, [Objects](https://parse.com/docs/js/guide#objects) are rather fundamental, as well as [Queries](https://parse.com/docs/js/guide#queries).

If your app is location-based, you should check out [GeoPoints](https://parse.com/docs/js/guide#geopoints).

If you want to build a user-base, then [Users](https://parse.com/docs/js/guide#users) may be very useful to you.

If you want to let your users upload files, then [Files](https://parse.com/docs/js/guide#files) are what you need.

### What could **you** build with Parse?

Let's brainstorm a few ideas. These can be based on your *Filter Bubbles* projects, completely unrelated to them, or anything in between.


# Team project

![](../../projects/filter-bubbles/assets/junk-food-analogy.png)

### Filter Bubbles tutorials

This **team project** is about pushing yourself out of your online comfort zone (aka *filter bubble*) to observe different communities and express your points of view through code.

All the project material is [here](../../projects/filter-bubbles).

### 6 teams

### 20 minutes per team

- [ ] Tomatoes for productivity

# Homework

- [ ] Work and blog on Filter bubbles
- [ ] Show and tell for next week