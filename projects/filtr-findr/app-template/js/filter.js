/**
 *
 * Usage:
 *
 * var completeList = 
 * [
 *      {
 *          name: "Hillary Clinton",
 *          bakingSkills: 5,
 *          likesPets: true,
 *          party: "Hacked"
 *      },
 *      {
 *          name: "Donald Trump",
 *          bakingSkills: 0,
 *          likesPets: false,
 *          party: "Grope"
 *      }
 * ];
 * 
 * var filters = 
 * [
 *      {
 *          key: "party", 
 *          value: "Hacked"
 *      }, 
 *      {
 *          key: "likesPets"
 *          // if the value is a boolean or number
 *          // you don't need to express it
 *       }
 * ];
 *
 * filterAndSortList(completeList, filters);
 * // will return the object for Hillary
 */

/**
 * @param  {Array} - required
 * @param  {Array} - required
 * @return {Array}
 */
function filterAndSortList(completeList, filters) 
{
    // filters must be an array
    if (filters instanceof Array == false) throw 'The filters parameter must be an array'
    
    // 1. assign the whole completeList to filteredAndSortedList
    var filteredAndSortedList = completeList
    
    // 2. loop through all filters
    filters.forEach(function(filter)
    {
        // using the native JS function Array.filter to filter the array and store the result into the filteredAndSortedList
        // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        filteredAndSortedList = filteredAndSortedList.filter(function(item) 
        {
            // get the item's value for the current key
            // eg. person['bakingSkills']
            // see: http://www.w3schools.com/js/js_objects.asp
            var itemValue = item[filter.key];

            // typeof will check the type of element
            // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
            // it checks if the value is either a number or a boolean (ie true or false)
            if (typeof itemValue == 'number')
            {
                // if the value is a number, it will check if the number is in between 4 and 5
                var min = 4;
                var max = 5;    			
                return itemValue >= min && itemValue <= max;
            }
            if (typeof itemValue == 'boolean') 
            {
                return itemValue;
            }
            if (typeof itemValue == 'string')
            {
                return itemValue == filter.value;
            }
        });

        // using the native JS function Array.sort to sort the array and store the result in filteredAndSortedList
        // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        filteredAndSortedList = filteredAndSortedList.sort(function(itemA, itemB) 
        {
            var valueA = itemA[filter.key];
            var valueB = itemB[filter.key];

            if (typeof valueA == 'number' && typeof valueB == 'number') 
            {
                // this will sort results in descending order if the valueB - valueA is more than 0
                // or it will sort results in ascending order if the valueB - valueA is less than 0
                return valueB - valueA;
            }
        });
        
    })
    
    // 3. return the list, filtered and sorted
    return filteredAndSortedList;
}