                         BARGAIN APP

My blog posts
[link](http://www.fourthfloor.me/blogs/isekajja/category/web14203/)

![image](http://www.fourthfloor.me/blogs/isekajja/files/2014/11/b1.png =400x290)



The purpose of my App is to help people make a quick decision on what to buy at the price they can afford.

Initially, I was tasked with researching what other Apps are on the market that do the same thing.

It was with great delight when I found out that there wasn’t a single App that did what my App can do. (the ground starts to shake as my tutor walks towards me waving a pen)

“But what about that website I forwarded to you on Facebook” he says. Oh wait, you mean trackif.com? “Yes, I mean trackif.com” he responds.

Well, I did have a read through their marketing ethos and although their target audience is the same i.e. people looking for a bargain, what their website does is completely different from what my App does in a sense that trackif.com let a customer know when what they want has droped in price or is currently on sale well as my App cuts through all the “malaki” and just lets you know “oh, you want a laptop with “x” specs for “x” price?” “yes its available at “x” retailer” or “no, its not available at your prefered price”, then the customer has the choice to either walk to his/her local pawn shop and see if they can trade in their sofa set for a laptop of their choice or up their budget and get a laptop via my App.

I got inspiration for my App from…….wait for it, the National Rail App. “How could you possibly get inspiration from the National Rail?” my class colleague said to me with shock and horror in her eyes. 

Well,I use this App everyday to travel from Kent where missing one train can mean arriving an hour late to class. So its helped me make quick decisions on what trains I should get to avoid lateness. My App works in a similar fashion. You get a display of what's available at your prefered price and you can decide whether to purchase or not purchase rather than sifting through hundreds of sites looking for a bargain. In other words it helps you make a quick decision.

Phewww!!!!

Now that thats over and done with, lets move on to the technical side of things.

The user selects the product of choice (see image below)

![image](http://www.fourthfloor.me/blogs/isekajja/files/2014/11/b2.png =400x290)

Depending on what product has been chosen, a product spec screen will appear (see below)

![image](http://www.fourthfloor.me/blogs/isekajja/files/2014/11/b3.png =400x290)


After the user has selected the specs of choice, they press the search button and the App will list the products available at the specified price and also display the retailers in the search results. (see below)

 ![image](http://www.fourthfloor.me/blogs/isekajja/files/2014/11/b4.png =400x290)


#####Development of the Prototype

I used HTML to come up with a basic interface (see below)

![image](http://www.fourthfloor.me/blogs/isekajja/files/2014/12/ScreenShot-2014-12-04-at1.33.50AM.png =400x290)
![image](http://www.fourthfloor.me/blogs/isekajja/files/2014/12/Screen-Shot-2014-12-04-at-1.34.36-AM.png =400x290)


I then used JQuery to get a JSON file from a URL which happened to be a Google Spreadsheet.

![image](http://www.fourthfloor.me/blogs/isekajja/files/2014/12/Screen-Shot-2014-12-04-at-2.02.46-AM.png =400x290)

I then set up an array which is a list of all the products in the spreadsheet. An array is used to store multiple values in a single variable. In this case the single variable being “products”.

I then specified a variable for an object. The object is all the data in the spreadsheet i.e. the product itself, the product specs, the price and the retailer. The variable “productDataObject” scans through all of these values to find the specified one.

In a layman's language, the array is the “menu” and the object is the “waiter”. 

I also included a message that alerts the user that the data is being loaded. This message fades out when the data has been loaded.

I then created a variable called “sentence” that looks through the selected object to find the values that have been selected. It then displays a message i.e “Laptop 13inch 4GB icore3 is available at PC World for 200.00”

I created a function that listens for a change in the selection dropdown, finds the selected option and then triggers a filter operation that forgets unselected values and only focuses on the selected value. For example, if in the dropdown for “processor” , “icore3” has been selected, the function will forget “icore5” and “icore7” and only focus on “icore3”.

The filters work in a sequence by screening the “product type”,”screen size”,”processor” and “memory” and if all the selected values match or are true to what is on the data form, then the values are added to the filtered products array and displayed in the HTML. 

If the values that have been filtered are different, then the matched products will equal to false and will be discarded from the HTML.

The image below demonstrates the filters in action.
![image](http://www.fourthfloor.me/blogs/isekajja/files/2014/12/Screen-Shot-2014-12-04-at-12.04.24-PM.png =400x290)

Finally, I tried to set alerts for the text box that would let the user know if their preferred product is available at their preferred price. Unfortunately, I wasn’t able to get the text box to filter through the “product type”, “screen size”, “memory” and “processor” so I made up an if statement that triggers an alert when the user clicks search but the text box is empty, an alert that lets the user know if their preferred price is not available, and an alert that lets you know what retailer to get your product from. The image below demonstrates this.

![image](http://www.fourthfloor.me/blogs/isekajja/files/2014/12/Screen-Shot-2014-12-04-at-12.17.31-PM.png =400x290)
 






