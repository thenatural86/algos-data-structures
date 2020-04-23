- Lets use Big O to analyze JS arrays and objects
- Explain why adding elements to the beginning of an array is costly
- Compare and contrast the runtime for arrays and objects as well as built in methods

- THE BIG O OF OBJECTS

- When To Use Objects

- When we don't need order
- When we need fast access for insertion and removal
- When we don't need ordering, objects are an excellent choice
- insertion O(1)
- Removal O(1)
- Access O(1)
- Searching O(n)

let human = {
name: "philip",
isHuman: true,
favoriteNumber: [1,2,3,4]
}

- With objects JS is able to add retrieve update remove
- There is no order for objects so there is no beginning or end for objects.

-Searching is linear time though. Not looking for a key, but checking to see if a given piece of information is in a value somewhere.
We would have no easy way of doing that so would have to potentially have to check every single property. So as n grows, so does the time to perform that operation.

-Big O of Object Methods

- Object.keys - O(n)
- Object.values - O(n)
- Object.entries - O(n) - return the key and the value
- These JS methods will return an array of keys/values for the object that was passed in. As the number of items in the object grows we will have to visit every single thing once and add it to the array, O(n)

- hasOwnProperties - O(1)
- Pass in a property: isHuman and it will tell us if it has that property (true/false). O(1), we are able to see if a key exist

- Quick for lots of things but no order

THE BIG O OF ARRAYS

let name = ["Micheal", "Jordan", "Lebron"]
let values = [true,{}, [], 2, Goat]

- Unlike objects, Arrays are ordered, which is useful but can come at a cost

- When to use arrays?
- When we need order
- When we need fast access/insertion and removal (sort of...)

Insertion - depends - Insertion at end of array (push) is O(1). At beginning of array we have to re-index every element in that array O(n)
Removal - depends - Removing at end of array (push) is O(1). At beginning of array we have to re-index every element in that array O(n)
Searching - O(n) - As the list of items grows, so does the time it takes to find that item
Access - O(1) - As long as there is a valid index, JS can jump immediately to the value stored at that location

-Big O of Arrays Methods

- push - O(1)
- pop - O(1)
- shift - O(n)- redindex
- unshift - O(n) - reindex

- concat - O(n) - merges multiple arrays - as the arrays that we are merging grow so will the time
- slice - O(n) - return copy of part of an array, time grow in proportion to amount of elements (n)
- splice - O(n) - remove elements add/or add new elements from

- sort - O(n \* logn), need to make comparisons, move things around, complex, get to it later
- map, filter, reduce ect - O(n)
