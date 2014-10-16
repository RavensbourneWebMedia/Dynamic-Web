# Week 3

## Today

* Making your app **talk** to the Web: introducing **APIs**.
* Mash up a couple of APIs with [IFTTT](https://ifttt.com/).
* Use [YQL](https://developer.yahoo.com/yql)  to read data from Flickr and make our *Help me decide app* display the chosen option as a picture


## Blog review 

### Praise 

* [Matt](http://www.fourthfloor.me/blogs/mstarr/2014/10/08/we-did-some-coding/)
* [Liam](http://www.fourthfloor.me/blogs/lparker/2014/10/12/week-1-dynamic-web-web14203/)
* [Margot](http://www.fourthfloor.me/blogs/mmercier/2014/10/09/first-session/)
* [Burak](http://www.fourthfloor.me/blogs/bozdemir/2014/10/08/week-1-dynamic-web-coding/)

### MIA (missing in action)
 
* [Harry](http://www.fourthfloor.me/blogs/hfoster) 
* [Kim](http://www.fourthfloor.me/blogs/ksalazar)
* [Innocent](http://www.fourthfloor.me/blogs/iSekajja)
* [Callum](http://www.fourthfloor.me/blogs/cholland)
* [Simeron](http://www.fourthfloor.me/blogs/staak)


## Did you draw the Web?

* Let's look for emerging **patterns** (brands, connected things and people, technical drawings)
* What does the Web **mean to you**?

![Matt's masterpiece :)](http://www.fourthfloor.me/blogs/mstarr/files/2014/10/Web-Drawing-1024x547.jpg)


## Open what?

The Web is full of resources: **open-source** code and **open data** that you can use to make amazing apps!

* What is **open-source**? Libraries (eg: [jQuery](http://jquery.com/), [Reveal.JS](http://lab.hakim.se/reveal-js/#/)), reputation economy..
* What is **open data**? WikiPedia, **APIs**.. 


## What's an API then?

Application Programming Interface (doesn't mean much)

It's ~~like~~ an **instruction manual to someone else's data and/or services**.

* For coders: Set of instructions on how to use code to access code libraries (jQuery) operating systems (geolocation) or services (Facebook)
* For companies: It's a way of opening up your data in a way you control

Here's [TFL explaining why their data is open](http://www.tfl.gov.uk/info-for/open-data-users/our-open-data)


## APIs the easiest way

Introducing [IFTTT](https://ifttt.com/), which lets you mash up data from many Web services using a simple (code-free) interface


## URLs for humans and for data 

* For example Facebook
* [*Human* Ravensbourne on Facebook](https://www.facebook.com/RavensbourneUK)
* [*Data* Ravensbourne on Facebook](http://graph.facebook.com/ravensbourneuk), using the [Facebook's Graph API](https://developers.facebook.com/docs/graph-api)
* Same information, formatted and presented in **two different ways**
* Almost the same URL (**www**.facebook.com vs **graph**.facebook.com)


## Data of Babel

There are tons of data out there on the Web, but it's all very **fragmented** and every organisation has **their own way** of structuring it. It's like the [tower of Babel](http://encyclopedia2.thefreedictionary.com/Babel%2c+Tower+of)

What if there was just a **single, uniform way** of using any Web service or data source like Amazon, iTunes, or Twitter? [DataTables](http://www.datatables.org/) makes a dent towards it.


## Data formats

**JSON** (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate.

Since we're using JavaScript to program our apps, it makes sense to use data that comes in JavaScript objects (no need for a *translator*)
	 	
* Install [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)


## APIs the intermediate way

[YQL](https://developer.yahoo.com/yql) (Yahoo Query Language) is a tool that allows you to query, filter, and combine data across the Web.

Like a **playground for APIs**, you can use it to play around with many APIs (both from Yahoo and other companies) without having to read the instructions manual first. 


## Let's make something

Start from the [*Help me decide app*](http://codepen.io/baddeo/pen/KnxEF). We'll use the **Flickr API** to search for and display an image that reflects the app's (random) choice.

1. Register an API key on Flickr 
* Construct the YQL query and test it (*navigating objects*)
* Make an AJAX request using [`jQuery.ajax()`](http://api.jquery.com/jquery.ajax/)
* Construct the image URL (*concatenation*). Construct the [Flickr image URL](https://www.flickr.com/services/api/misc.urls.html) (searched for [flickr image urls](https://www.google.co.uk/webhp?#q=flickr+image+urls) and then read the *manual*) 
* Create an `<img>` *placeholder* in HTML
* jQuery `attr()` function to change the image


## Remember your brief?

Make an app that helps people **make a decision**.

The app must take in some human **input**, use **code** to manipulate it, and then present a human-readable **output**.

You can use **data** from the Web to help people make a decision.


## More inspirations

Beyond *yourselfie*, apps that use APIs with a purpose:

1. [How much should I charge?](http://thenuschool.com/how-much/)
*  [Haiti aid map](http://haiti.ngoaidmap.org/)
*  [UniStats API](https://unistats.direct.gov.uk/)
*  [FearSquare](http://data.gov.uk/apps/fearsquare)
*  [Big Oven API](http://api.bigoven.com/)

[APIs directory](http://www.programmableweb.com/category)


## Homework

**Write about your app idea** on the blog. 

* Post pictures of your initial *brainswarm*. 
* The idea may have changed since the first *brainswarm*: tell us **how it's evolving**.
* Describe how you intend to **move the idea forward**.
* [OPTIONAL] Write about data and/or *APIs* you are considering to use.
* Your app can be serious or humorous :)





