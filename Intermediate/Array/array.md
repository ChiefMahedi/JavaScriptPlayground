# `Array` in JavaScript

- An array is an ordered list of values that you refer to with a name and an index.

### Example 1: Creating an array
```javascript
const array1 = new Array(1,2,3,4,5,6);
const array2 = Array(1,2,3,4,5,6);
const array3 = [1,2,3,4,5,6]; //Array literal 
console.log("Array1:", array1);
console.log("Array2:", array2);
console.log("Array3:", array3);
```
Output:
```bash
Array1: [ 1, 2, 3, 4, 5, 6 ]
Array2: [ 1, 2, 3, 4, 5, 6 ]
Array3: [ 1, 2, 3, 4, 5, 6 ]
```
- If you wish to initialize an array with a single element, and the element happens to be a Number, you must use the bracket syntax. 
- When a single Number value is passed to the `Array()` constructor or function, it is interpreted as the length of the array, not as a single element.

### Example 2: Creating an array with non-zero length but without any elements
```javascript
const length = 10;
const array4 = Array(length);
const array5 = new Array(length);
const array6 = [];
console.log("Array 4:",array4); 
console.log("Array 5:",array5); 
console.log("Array 6:",array6); 
```
Output:
```bash
Array 4: [ <10 empty items> ]
Array 5: [ <10 empty items> ]
Array 6: []
```
- In the above code, `length` must be a `Number`.
- Otherwise, an array with a single element (the provided value) will be created.
- - Calling `Array(N) `results in a `RangeError`, if N is a non-whole number whose fractional portion is non-zero. 
### Example 3: Assigning array to an object as property
```javascript
const  employees = {
    names:['Mahedi', 'Hassan', 'Shawon']
};;
employees.id =[1, 2, 3];
console.log('Employee Information: ',employees);
```
Output:
```bash
Employee Information:  { names: [ 'Mahedi', 'Hassan', 'Shawon' ], id: [ 1, 2, 3 ] }
```
### Example 4: Using Array.of() method to create array with single element
```javascript
const array7 = Array.of(5.1);
console.log("Array 7:",array7); 
```
Output:
```bash
Array 7: [ 5.1 ]
```
### Example 5: Accessing array elements
```javascript
console.log(array1[0]);
console.log(array1[3]);
console.log(array1['length']);
```
Output:
```bash
1
4
6
```
### Example 6: Populating array
```javascript
const student = [];
student[0] = 'Mahedi';
student[1] = 'Hassan';
student[2] = 'Shawon';
student[3.1] = 'Chief'
console.log(student)
const teacher = new Array('teacher1', 'teacher2', 'teacher3');
console.log(teacher);
```
Output:
```bash
[ 'Mahedi', 'Hassan', 'Shawon', '3.1': 'Chief' ]
[ 'teacher1', 'teacher2', 'teacher3' ]
```

