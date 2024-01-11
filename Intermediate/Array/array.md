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
- Calling `Array(N) `results in a `RangeError`, if N is a non-whole number whose fractional portion is non-zero. 
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
console.log("Array length of student is:", student.length);
```
Output:
```bash
[ 'Mahedi', 'Hassan', 'Shawon', '3.1': 'Chief' ]
[ 'teacher1', 'teacher2', 'teacher3' ]
Array length of student is: 3
```
- Here length of the student array is 3. Because,when we use non-integer indices with arrays, they are treated as properties of the array object, not as actual array elements.

### Example 6: Truncating array by using the length property
```javascript
const staff = ['Mahedi', 'Hassan','Shawon'];
console.log('Staff array length:',staff.length);
console.log('Staffs :',staff);
staff.length = 2;
console.log('Staffs :',staff);
```
Output:
```bash
Staff array length: 3
Staffs : [ 'Mahedi', 'Hassan', 'Shawon' ]
Staffs : [ 'Mahedi', 'Hassan' ]
```

### Example 7: Iterating over array
```javascript
let nums = [1,2,3,4,5,6,7,8,9,10];
for(let i =0; i<nums.length; i++)
{
    console.log(nums[i]);
}
//Method 2
nums = [1,,3,,5];
nums.forEach(num=> {
    console.log(num);
});
```
Output:
```bash

2
3
4
5
6
7
8
9
10
1
3
5
```
- Please bear in mind that when an array is defined with omitted elements, those elements won't appear during iteration using `forEach`. However, if `undefined `is manually assigned to an element, it will be listed during iteration.

### Example 8: Array methods
```javascript
//concat()
let teacher = new Array("teacher1", "teacher2", "teacher3");
const staff = ["Mahedi", "Hassan"];
//concat()
const totalEmployees = teacher.concat(staff);
console.log("Total employees after concat(): ",totalEmployees);
//join()
const list = totalEmployees.join("*");
console.log("Total employees after join(): ",list);
//push()
totalEmployees.push("Potato");
console.log("Total employees after push(): ",totalEmployees);
//pop()
totalEmployees.pop();
console.log("Total employees after pop(): ",totalEmployees);
//shift()
totalEmployees.shift();
console.log("Total employees after shift(): ",totalEmployees);
//unshift()
totalEmployees.unshift('teacher1');
console.log("Total employees after unshift(): ",totalEmployees);
//slice()
const sliced = totalEmployees.slice(1, 4);
console.log("Sliced: ",sliced );
//at()
console.log(sliced.at(-2));
//reverse()
console.log('Sliced reversed',sliced.reverse());
//sort()
const numbers = [10,9,8,7,6,5,4,3,2,1];
console.log("Ascending order:",numbers.sort((a,b)=>a-b));
console.log("Descending order:",numbers.sort((a,b)=>b-a));
//map()
const mappedNumbers = numbers.map((number)=>{
  return number + 10;
})
console.log("Mapped Numbers Array:",mappedNumbers);
//filter()
const evenNumbers = numbers.filter((number)=>{
  return number%2 === 0;
})
console.log("Even Numbers Array:",evenNumbers);

```
Output:
```bash
Total employees after concat():  [ 'teacher1', 'teacher2', 'teacher3', 'Mahedi', 'Hassan' ]
Total employees after join():  teacher1*teacher2*teacher3*Mahedi*Hassan
Total employees after push():  [ 'teacher1', 'teacher2', 'teacher3', 'Mahedi', 'Hassan', 'Potato' ]
Total employees after pop():  [ 'teacher1', 'teacher2', 'teacher3', 'Mahedi', 'Hassan' ]
Total employees after shift():  [ 'teacher2', 'teacher3', 'Mahedi', 'Hassan' ]
Total employees after unshift():  [ 'teacher1', 'teacher2', 'teacher3', 'Mahedi', 'Hassan' ]
Sliced:  [ 'teacher2', 'teacher3', 'Mahedi' ]
teacher3
Sliced reversed [ 'Mahedi', 'teacher3', 'teacher2' ]
Ascending order: [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
Descending order: [
  10, 9, 8, 7, 6,
   5, 4, 3, 2, 1
]
Mapped Numbers Array: [
  20, 19, 18, 17, 16,
  15, 14, 13, 12, 11
]
Even Numbers Array: [ 10, 8, 6, 4, 2 ]
```
- `concat()`:
  - Takes arrays and combines them into a new array.
  - Original arrays remain unchanged.
  - Used here to concatenate the `teacher` and `staff` arrays into a new array named `totalEmployees`.

- `join()`:
  - Combines array elements into a single string.
  - Elements are separated by the specified delimiter.
  - Used here to join the elements of the `totalEmployees `array with '*' as the delimiter.

- `push()`:
  - Adds one or more elements to the end of an array.
  - Modifies the original array.
  - Used here to add the string "Potato" to the end of the `totalEmployees` array.

- `pop()`:
  - Removes the last element from an array.
  - Modifies the original array.
  - Used here to remove the last element from the `totalEmployees` array.

- `shift()`:
  - Removes the first element from an array.
  - Modifies the original array.
  - Used here to remove the first element from the `totalEmployees` array.

- `unshift()`:
  - Adds one or more elements to the beginning of an array.
  - Modifies the original array.
  - Used here to add the string 'teacher1' to the beginning of the `totalEmployees` array.

- `slice()`:
  - Extracts a portion of an array into a new array.
  - Original array remains unchanged.
  - Used here to create a new array sliced containing elements from index 1 to index 3 (exclusive) of `totalEmployees`.

- `at()`:
  - Returns the element at a specified index in an array.
  - Negative index values are counted from the end of the array.
  - Used here to log the element at the second-to-last position of the sliced array.

- `reverse()`:
  - Reverses the elements of an array.
  - Modifies the original array.
  - Used here to reverse the elements of the sliced array.

- `sort()`:
  - Arranges the elements of an array in ascending or descending order.
  - Modifies the original array.
  - Used here to sort the `numbers` array in both ascending and descending orders.

- `map()`:
  - Creates a new array by applying a function to each element in an existing array.
  - Used here to create a new array `mappedNumbers `by adding 10 to each element of the numbers array.

- `filter()`:
  - Creates a new array with elements that satisfy a given condition.
  - Used here to create a new array `evenNumbers` containing only the even numbers from the `numbers` array.
## References

- [MDN Web Docs - Indexed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections): Used as a reference for these notes.