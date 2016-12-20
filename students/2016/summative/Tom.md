# WEB14203 ThomasMurphy
## FILTR FINDR APPLICATION
### Background information behind my app 

![](https://github.com/thomass96/WEB14203-Thomas-Murphy/blob/master/Word%20Logo.png?raw=true)


Working @ Benugo, full time, I felt there was a lot of potential for me to demonstrate my skills and what I could offer to the company, in order to advance my career within the company. Benugo aims to open 2 new shops every six months of business, however, since I’ve been working there for a year, the company has already added a further 6 new openings to the expanding list of venues.

With this increasing demand on opening the new shops, it meant the team in Head Office were always more focused and tied up with ensuring all the work for those ventures was completed in time, meaning work that all the current shops needed became less of a priority. As a result, my manager knew that I was capable of doing some of the small scale jobs that our site required, and some of the others as well. I was excited to do these jobs for them, thinking that it would be great experience for myself and my portfolio, which it was. Now, I want to really show what I’m capable of and how I can help their team in the Head Office, and not just be the ‘go-to’ person when they need something quickly making.

Here, you can find some of the work that I have produced for Benugo - [Portfolio — Thomas Murphy](http://thomasmurphy.work/work/#/benugo/)

### App Idea & Summative Presentation

[DYNAMIC WEB: Slides](http://slides.com/thomasmurphy/dynamic-web/fullscreen)

Benugo releases 4 new menus each season, and only promote them using their social media accounts (Twitter, Facebook & Instagram). I thought that I could make a new, engaging, way for customers to filter through the new menus to discover the new menu.

I decided to make an app where the customer could decide if they want to learn about the new **drinks** or **food** that they release. The user clicks on one of the options, and then they are presented with a list of ingredients. They must choose only **2** of the options and then press the discover button to find two choices of options, based on the ingredients that they selected. Once they’ve found out about the new products, they can use the **find a Benugo** button to locate their closest Benugo, offering the Christmas menus.

### App Demo

[Live here](https://thomass96.github.io/Benugo-Xmas/Xmas App) 

[Code here](https://github.com/thomass96/Benugo-Xmas)

### Firebase Pusher -
![](https://github.com/thomass96/WEB14203-Thomas-Murphy/blob/master/Screen%20Shot%202016-12-02%20at%2010.31.42.png?raw=true)
I created my firebase pusher so that it would filter my database by two product 'classes', 'drinks' or 'food' and then inputted the corresponding information for each item.

### Research
I found that preparing research for my project was a little difficult due to the type of research I needed to get, which was user interaction and feedback, and the timeframe for me to do it. As a result, I used my personal experience to create a 'wishful' user persona from all the customers that I have ever served whilst at work, and tried to work my app around that persona. Once my app is in the alpha stage and working, I think that I could then move forward and actively do some research by asking customers at work to demo my web app and then fill out and quick questionnaire, and even leaving a simple questionnare about my web app on the tables for customers to fill out as they please.

### Inspiration links
![](https://github.com/thomass96/Benugo-Xmas/blob/master/Presentation/Screen%20Shot%202016-11-02%20at%2014.45.35.png?raw=true)
I took a lot of my inspiraton for this project, as I stated in my presentation, from Costa Coffee. Every year they create/revamp their seasonal specials websites to promote their new menu, and for me personally i find them interesting and thought that it would be a good thing to implement into my own project and thus gave me my idea. 
[Costa Coffee | Serious Summer](http://www.costa.co.uk/seriously-summer/)

### Sketches
![](https://raw.githubusercontent.com/thomass96/WEB14203-Thomas-Murphy/9e1571aef08027f9e528c6c8f8ed8a122fff06d8/Unknown.jpeg?token=AONPwh9Y3W18ZUIx-zA9_86A1yNabsQUks5YQfEfwA%3D%3D)
![](https://raw.githubusercontent.com/thomass96/WEB14203-Thomas-Murphy/9e1571aef08027f9e528c6c8f8ed8a122fff06d8/Unknown-2.jpeg?token=AONPwlW6U69w6jr7X6-3sTzGMJYPbrunks5YQfEfwA%3D%3D)
![](https://raw.githubusercontent.com/thomass96/WEB14203-Thomas-Murphy/9e1571aef08027f9e528c6c8f8ed8a122fff06d8/Unknown-1.jpeg?token=AONPwi-ljeujuxIFTEkoZRr4PyReY738ks5YQfEfwA%3D%3D)

### Broken code

#### Broken Buttons

```js
var drinkBackButton = jay('#toselect');
var foodBackButton = jay('#toselect');
// DRINK BACK TO SELECT SECTION
drinkBackButton.click(function () {
    sectionDrinks.hide();
    selectSection.show();
});
// FOOD BACK TO SELECT SECTION
foodBackButton.click(function () {
    sectionFood.hide();
    selectSection.show();
});
```

### Working code

#### Working Buttons -
Because I was using the same principle for my back buttons but showing and hiding different sections, I actually had to create to instances of the button for each section, rather than using the same button and changing the code, as it didn't read the code correctly and the buttons wouldn't function at all. 

```js
var drinkBackButton = jay('#toselect');
var foodBackButton = jay('#toselect2');
```

### Screenshots
![](https://raw.githubusercontent.com/thomass96/WEB14203-Thomas-Murphy/9e1571aef08027f9e528c6c8f8ed8a122fff06d8/Unknown.png?token=AONPwoqsNhdc4sDeK_QKQOu4c4HRh5Ghks5YQfEfwA%3D%3D)
![](https://raw.githubusercontent.com/thomass96/WEB14203-Thomas-Murphy/9e1571aef08027f9e528c6c8f8ed8a122fff06d8/Unknown-1.png?token=AONPwlBFGh_eJZaWIlvxjOCZ8kn9aJNEks5YQfEfwA%3D%3D)

My main problem was using jQuery to actually display information from my database and convey it into the app on the results page. After trying multiple times tweaking the code, and even deleting it and trying it again, up to this moment I'm still unsure as to why it won't show on my app. However, I won't give up and I will keep trying, because I really do want to have this fully functional and be able to look back and say that I managed to code the whole app from the basic stages to its final products.


[Firebase Pusher](https://thimbleprojects.org/thomass96/139439/)

### Blog Posts -
![](https://github.com/thomass96/WEB14203-Thomas-Murphy/blob/master/logo.png?raw=true)

You can find all my blog posts corresponding to this unit at the link provided here on my website.
[Blog — Thomas Murphy](http://thomasmurphy.work/blog/?category=WEB14203)

### Codewars Profile -
![](https://www.codewars.com/assets/logos/logo-square-red-big-dc2f35502ee2b60882a41327c529521c.png)
[thomass96 | Codewars](https://www.codewars.com/users/thomass96)