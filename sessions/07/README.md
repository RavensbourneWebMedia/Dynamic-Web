# Week 7

### Today, Friday 25th November 2016

1. [Workshop](#workshop): add click functionality to the map markers
* Multiple criteria for `filterAndSortList`
* [Tutorials](#tutorials)

### Your [homework](#homework) and [blog](#blog)


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
var skillsDropdown = $('#skills')
var petsDropdown = $('#pets')
```

Then further down

```js
// tell the GO button to do something when we click it
homeGoButton.click( function()
{   
    // 1. capture the user chosen options
    var chosenSkill = skillsDropdown.val()
    var chosenPet = petsDropdown.val()
    console.log("You picked " + chosenSkill + " and " + chosenPet)
    var filters =
    [
        {
            // favouritePet is a string, so we need a value
            key: 'favouritePet',
            value: chosenPet
        },
        {
            // chosenSkill is a number, so no need for a value
            key: chosenSkill
        }
    ]
    // 2. filter+sort people by user selections
    var resultsList = filterAndSortList(peopleList, filters)
	...
```


# Tutorials

Here's the [feedback document](https://docs.google.com/document/d/1EhDq-ly8zI0UmBy83ZzOyYXjSjiu77nBVCTj6yBtZaE/edit#heading=h.2ruq2spchq1t).


# Homework

### Project

Work on [*Filtr Findr*](../../projects/filtr-findr) as planned in [your tutorial](https://docs.google.com/document/d/1EhDq-ly8zI0UmBy83ZzOyYXjSjiu77nBVCTj6yBtZaE/edit#heading=h.2ruq2spchq1t).

The **final deadline** is next week (Friday the 2nd of December, 23:59)!

Check the :ballot_box_with_check: [**summative checklist**](../08/#checklist) :ballot_box_with_check: for everything you have to hand in!

### Codewars katas

Complete at least 2 challenges (aka *katas*) on the beginner levels (aka *8 kyu* or *7 kyu*).
