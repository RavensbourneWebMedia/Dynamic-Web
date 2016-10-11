/**
 *
 * Usage:
 *
 * var completeList = 
 * [
 *      {
 *          name: "Hillary Clinton",
 *          bakingSkills: 5,
 *          likesPets: true
 *      },
 *      {
 *          name: "Donald Trump",
 *          bakingSkills: 0,
 *          likesPets: false,
 *      }
 * ];
 *
 * var selectedOption = "bakingSkills";
 *
 * filterAndSortList(completeList, selectedOption);
 *
 */

/**
 * @param  {Array}  - required
 * @param  {String} - required
 * @return {Array}
 */
function filterAndSortList(completeList, selectedOption) 
{
	// using Array.filter function to filter the array and store the result into the filteredList
	// if the function inside returns true, it will store into filteredList
	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    var filteredList = completeList.filter(function(person) 
    {
    	// get the value of the selectedOption.
    	// eg. person['bakingSkills']
    	// see: http://www.w3schools.com/js/js_objects.asp
        var value = person[selectedOption];

        // typeof will check the type of element
        // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
        // it checks if the value is either a number or a boolean (ie true or false)
        if (typeof value == 'number')
        {
            // if the value is a number, it will check if the number is in between 4 and 5
            var min = 4;
    		var max = 5;    			
            return value >= min && value <= max;
        }
        if (typeof value == 'boolean') 
        {
            return value;
        }
    });

    // using the Array.sort function to sort the array and store the result in sortedList
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    var sortedList = filteredList.sort(function(personA, personB) 
    {
        var valueA = personA[selectedOption];
        var valueB = personB[selectedOption];

        if (typeof valueA == 'number' && typeof valueB == 'number') 
        {
            // this will sort results in descending order if the valueB - valueA is more than 0
            // or it will sort results in ascending order if the valueB - valueA is less than 0
            return valueB - valueA;
        }
    });

    return sortedList;
}