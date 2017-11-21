# Week 6

### Today, Tuesday 21st November 2017

1. [Workshop](#worshop): plotting data on a map & adding further functionality
* [Tutorials](#tutorials) on *Filtr Findr*

### Your [homework](#homework) and [blog](#blog)

# Workshop

<!-- See https://www.mapbox.com/help/building-a-store-locator/ -->

Sign up for a [Mapbox account](https://www.mapbox.com/).

Create a style: https://www.mapbox.com/studio/styles

In `index.html` add the Mapbox CSS (in the `head`) and JS (at the end of the `body`):

```html
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.21.0/mapbox-gl.css' rel='stylesheet'>
```

```html
<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.21.0/mapbox-gl.js'></script>
```

Next, *markup* the page to create a map container inside the `#results` section:

```html
<section id="results">
	...
    </ol>
    <div id="map"></div>
</section>
```

In `main.css`:

```css
#map {
    width: 100%;
    height: 30rem; /* experiment with different heights */
    display: none; /* map is hidden by default */
}
```

### Initialize the map

Now that you have the structure of the page, initialize the map with Mapbox JS.

Create a new JS file `mapbox.js` and link it in your `index.html`.

In `mapbox.js` add your access token using `mapboxgl.accessToken`.
You can find your access token at [mapbox.com/studio/account/tokens](https://www.mapbox.com/studio/account/tokens/)

```js
mapboxgl.accessToken = 'YOUR_TOKEN_HERE'
```

Then, create a new `map` object using `new mapboxgl.Map()` and store it in a variable called `map`.

```js
var map = new mapboxgl.Map(
{
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/light-v9',
  // initial position in [long, lat] format
  center: [0.005353, 51.501597],
  // initial zoom
  zoom: 10
})
```

The Mapbox JS `map` requires several `options`:

* `container`: the `id` of the `<div>` element on the page where the map should live. In our case it's `map`
* `style`: the style URL for the map style. You can use the Mapbox Light map which has the style URL `mapbox://styles/mapbox/light-9` (or add your own custom style)
* `center`: the initial centre point of the map in `[longitude, latitude]` format
* `zoom`: the initial zoom level of the map

### Toggle between list and map

In `main.js`

```js
var resultsToggleButton = $('#results .toggle')
var resultsMap = $('#map')
...
resultsToggleButton.click( function()
{
    // list or map?
    // let's check the current state of the list
    // if it's 'block' then we want to show the map
    // otherwise we want to show the list
    var state = resultsOL.css('display') == 'block' ? 'map' : 'list'
    if (state == 'list')
    {
        resultsOL.show()
        resultsMap.hide()
        resultsToggleButton.html('Map')
    }
    else
    {
        resultsOL.hide()
        resultsMap.show()
        map.resize() // see https://www.mapbox.com/mapbox-gl-js/api/#Map#resize
        resultsToggleButton.html('List')
    }
})
```

### Plot results on the map

Let's design a custom *marker*. In `main.css`, something along the lines of:

```css
.marker {
  border: none;
  cursor: pointer;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: rgba(255, 255, 0, 0.6);
  transform: translate(10px, 20px, 0);
}
```

In `mapbox.js`:

```js
// empty list to store all the markers
var markers = []
```

We will need a function to wipe all markers:

```js
function wipeMarkers()
{
  for (var i = 0; i < markers.length; i++)
  {
    var marker = markers[i]
    marker.remove()
  }
}
```

And then a function to add new ones:

```js
function addMarkers(dataList)
{
  // first wipe previous markers
  wipeMarkers()
  // then add new ones
  for (var i = 0; i < dataList.length; i++)
  {
    // store the current data item in a variable
    var dataItem = dataList[i]
    // extract the data item coordinates
    var coordinates = new mapboxgl.LngLat( dataItem.longitude, dataItem.latitude)
    // create a div element for the marker
    var div = document.createElement('div')
    // add a class called 'marker' to the div
    div.className = 'marker'
    // create the custom marker
    var marker = new mapboxgl.Marker(div)
      .setLngLat(coordinates) // set the marker position
      .addTo(map) // add the marker to map
    // add the marker to the list
    markers.push(marker)  
  }
}
```

In `main.js`, find the line where we're updating the list of results `showList(resultsList, resultsOL)` and add the following line underneath:

```js
addMarkers(resultsList)
```

# Workshop

Let's add click functionality to the map markers.

Make sure we use `v0.28.0` of the JS API. In `index.html`, make sure the `script` loading Mapbox is like this:
```html
<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.28.0/mapbox-gl.js'></script>
```

Define the resultsList outside of any function, in `main.js`

```js
var resultsList = []
```

Then in `mapbox.js`, in the `addMarkers` function after `markers.push(marker)`:

```js
// 1. update the details section with data from the selected result
// 2. hide the results section
// 3. show the details section
var clickSteps = 'showDetails(resultsList['+i+'], detailsInfo); resultsSection.hide(); detailsSection.show(); '
var popupHTML = '<a onclick="' + clickSteps + '">' + dataItem.name + '</a>'
var popup = new mapboxgl.Popup({closeButton:false})
popup.setHTML(popupHTML)
marker.setPopup(popup)
```


# Multiple criteria for `filterAndSortList`

In `index.html` make a couple of dropdowns

```html
<select id="skills">
	<option value="bakingSkills">Bake a cake</option>
    <option value="diySkills">Move my piano</option>
    <option value="bakingSkills">Bake a pizza</option>
    <option value="codingSkills">Code an app</option>
</select>
<select id="pets">
	<option value="cat">cats</option>
    <option value="dog">dogs</option>
</select>
```

Update `filter.js` to the latest version, which you can find at [github.com/RavensbourneWebMedia/Dynamic-Web/blob/2016/projects/filtr-findr/app-template/js/filter.js](https://github.com/RavensbourneWebMedia/Dynamic-Web/blob/2016/projects/filtr-findr/app-template/js/filter.js)

In `main.js`

```js
var petsDropdown = $('#pets')
```

Then further down

```js
// tell the GO button to do something when we click it
homeGoButton.click( function()
{
  // get user input
  var selectedOption = homeDropdown.val();
  var chosenPet = petsDropdown.val()

	// using jQuery val(), see http://api.jquery.com/val
  console.log("You picked " + selectedOption + " and " + chosenPet)

  var filters = [
		{

			key:selectedOption

		},
		{

			key: 'favouritePet', value: chosenPet

		}

		]; // array of objects

		var resultsList = filterAndSortList(peopleList, filters);
```


# Tutorials

Here's the [feedback document](add link here).

- [ ] Where's your app at: *persevere*, *[pivot](https://youtu.be/dC_IG-EZQUY?t=29s)* or *panic*?
- [ ] Technical problems you want to discuss
- [ ] Plan the next week
- [ ] Review your blogs

# Homework

### Homework

Work on [*Filtr Findr*](../../projects/filtr-findr) as planned in [your tutorial](add link here).

### Blog

*WTF is an API?*

- [ ] Read [The universe is programmable](http://www.wired.com/2014/04/the-universe-is-programmable/) and blog about it: what do you think about the points the author is making?

- [ ] Check out [An API for everything](https://www.producthunt.com/e/an-api-for-everything) and pick at least **three APIs** which you could integrate in your app. Describe how these APIs would impact on the app experience (you won't have to actually use those APIs so feel free to go crazy with ideas...)
