// Objectives
// explain what a hash table is
// define what a hashing algorithm is
// discuss what makes a good hashing algorithm
// understand how collisions occur in a hash table
// handle collisions using separate chaining or linear probing

// what is a hash table?
// hash tables are used to store key-value pairs
// they are like arrays, but the keys are not ordered
// unlike arrays, hash tables are fast for all of the following operations:
// finding, adding and removing values

// because of their speed, hash tables are used often

// to implement a hash table we will use an array.
// in order to look up values by key, we need a way to convert keys into valid array indices

// a function that performs this task is known as a hash functions

// what makes a good hash function?
// fast (i.e. constant time)
// doesn't cluster outputs at specific indices, but distributes uniformly
// deterministic (same input yields same output)
