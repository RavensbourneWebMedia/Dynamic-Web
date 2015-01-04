# Week 6

## Today

* APIs again!
* Using a Google Spreadsheet as your database 


## Service APIs vs data APIs

Service APIs (aka *Interaction APIs*) allow you to use services from a device or operating system. For example: 

* accelerometer APIs ([iOS](https://developer.apple.com/LIBRARY/ios/documentation/UIKit/Reference/UIAccelerometer_Class/index.html), [Android](http://developer.android.com/guide/topics/sensors/sensors_overview.html) and [Pebble](http://developer.getpebble.com/guides/pebble-apps/sensors/accelerometer/) for example)
* [HTML5 camera API](https://developer.mozilla.org/en-US/docs/Web/Guide/API/Camera) (Web browsers)
* [HTML5 GeoLocation API](http://www.w3schools.com/html/html5_geolocation.asp) (Web browsers)

Data APIs allow you to use data from another organisation. For example:

* Twitter API
* Facebook API
* TFL API
* Google Maps API
* YouTube API
* Weather API

### How to choose the right API?

1. Is it free? If not, when will I have to pay?
2. Is it easy to integrate in my code? That is, will it work with JavaScript (assuming that's the programming language you're using)
3. Is it well documented?
4. Does it have a decent community of developers? If you get stuck, who can help you?

### Which API(s) are you planning to use?

## Google Spreadsheet as your database

Let's build a [tiny app](https://github.com/matteomenapace/rave-WEB14203/tree/master/spreadsheet-api-tutorial) that connects to a [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1XAwqayvOEHWkg3RQNehksVoGUriqOUHI-Qjs_g9X2SM/pubhtml?gid=0&single=true) where we're logging useful information about the Dynamic Web students, such as their **favourite animals**!

We're not starting from scratch. Instead, we use [HTML5 Boilerplate](http://html5boilerplate.com/) to build our app on a solid foundation. And save ourselves some typing.


# Assignment for next week!

Continue working on your **app prototype** (HTML and JS), and **break down your app behaviour** on your blog (either 4F or Medium).

### App prototype

Next week we'd like to see an app prototype that connects to some API or database (such as Google Spreadsheet) and displays data in an *interesting* way. Start putting together all the pieces of your app:

1. **Interface** (aka *front-end*). It doesn't have to look good, but the elements should be there. If appropriate, visualise the interface with paper or digital sketches, so that we can talk about your app together. 
2. **Data services** (aka *back-end*). Play around with the API(s) and/or database (such as Google Spreadsheet). Your app should be able to read from at least one of these services. The furthest you push it (eg: connecting more than one API), the better of course.
3. **Logic** It doesn't have to work properly. However it's important that you have it clear in your head (and are able to communicate verbally) the behaviour of your app, Once you can do that, it's *only* a matter of translating your ideas into JS :)
4. **Workflow**: all your project files on GitHub.

### App logic breakdown

**Break down the behaviour(s)** of your app, as if you were talking directly to the browser. Imagine the browser is your most pedantic friend and you have to explain how your app works, in *extreme* detail. In your blog post, you can give orders to the browser, like so
> Dear browser, when you open this app, I'd like you to hide the p#message immediately. It contains rudeness that we can only show to a mature audience.
 
> Then, I'd like you to open this URL. It's a from YouTube's API, and it searches for the most popular videos that contain the word *penguin*. Once you get a JSON object back, I want you to...