//Creating an array
const array1 = new Array(1, 2, 3, 4, 5, 6);
const array2 = Array(1, 2, 3, 4, 5, 6);
const array3 = [1, 2, 3, 4, 5, 6];
console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Array 3:", array3);

//Creating an array with non-zero length but without any elements
const length = 10;
const array4 = Array(length);
const array5 = new Array(length);
const array6 = [];
//const arr = Array(5.1); RangeError: Invalid array length
console.log("Array 4:", array4);
console.log("Array 5:", array5);
console.log("Array 6:", array6);

//Assigning array to an object as property
const employees = {
  names: ["Mahedi", "Hassan", "Shawon"],
};
employees.id = [1, 2, 3];
console.log("Employee Information: ", employees);

//Using Array.of();
const array7 = Array.of(5.1);
console.log("Array 7:", array7);

//Accessing array elements
console.log(array1[0]);
console.log(array1[3]);
console.log(array1["length"]);

//Populating an array
const student = [];
student[0] = "Mahedi";
student[1] = "Hassan";
student[2] = "Shawon";
student[3.1] = "Chief";
console.log(student);
let teacher = new Array("teacher1", "teacher2", "teacher3");
console.log(teacher);

//Array length checking
console.log("Array length of student is:", student.length);

//Truncating array by using the length property
const staff = ["Mahedi", "Hassan", "Shawon"];
console.log("Staff array length:", staff.length);
console.log("Staffs :", staff);
staff.length = 2;
console.log("Staffs :", staff);

//Iterating over arrays
//Method 1
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

//Array methods

//concat()
const totalEmployees = teacher.concat(staff);
console.log("Total employees after concat(): ",totalEmployees);
//join()
const list = totalEmployees.join("*");
console.log("Total employees after join(): ",list);

