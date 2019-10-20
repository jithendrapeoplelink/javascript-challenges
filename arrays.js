// var emp = ['jitendra','id:75885',8500063620,true]
// for(i=0; i<emp.length;i++)
// console.log(emp[i])

// //backwards
// for(i=emp.length-1;i>=0;i--)
// console.log(emp[i])

// emp.push('Hyderabad')
// emp.unshift('DM')
// emp.shift('DM')
// emp.pop()

// console.log(emp)


//challenge 1: Test whether an 'input' is an array or not

//method:1 - Array.isArray()
var is_array = function(input){

    if(Array.isArray(input))
    return true
    return false
}
console.log(is_array([3,6,8,9]))
console.log(is_array('6'))

//method:2 - instanseof

var is_array = function(input){

    if(input instanceof Array)
    return true
    return false
}
console.log(is_array([3,6,8,9]))
console.log(is_array('6'))

//method:3 - with constructor property


var is_array = function(input){

    if(input.constructor === Array)
    return true
    return false
}
console.log(is_array([3,6,8,9]))
console.log(is_array('6'))


//chanllenge 2: to clone an array

var person = ['jitendra',8500063620,'Hyd']
var person2 = person.slice(0)
console.log(person2)


//using function

var employee = ['jitendra',8500063620,'Hyd'],employee2;

var cloneArray = function(){

   employee2 = employee.slice(0)
   return employee2
}
cloneArray()
console.log(employee2)

//challenge 3: Passing a parameter 'n' will return the first 'n' elements of the array

var abc = ['jitendra',8500063620,'Hyd'],elements

var param = function(array,n){
elements = array.slice(0,n)
return elements
}

param(abc,2)
console.log(elements)


//challenge 4: Passing a parameter 'n' will return the last 'n' elements of the array

var abc = ['jitendra',8500063620,'Hyd'],elements

var param = function(array,n){
    var elements = array.slice((array.length-1,0))
    return elements
}
param(abc,3)
console.log(elements)


//challenge 5: JavaScript program to join all elements of the following array into a string

var joinarray = [4,5,7,8,'tony','jai',false]

console.log(joinarray.toString())
console.log(joinarray.join())
console.log(joinarray.join('+'))


//chanllenge 6: accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

var samplestring= "8850425745"
var res = [samplestring[0]]
console.log(samplestring.length)
console.log(res)

for(i=1;i<samplestring.length;i++){

    //console.log(samplestring[i])
    if(samplestring[i-1]%2 ===0 && samplestring[i] % 2 === 0){
        res.push('-',samplestring[i])
    }
    else
    res.push(samplestring[i])
}

console.log(res.join(''))



//challenge 7: To sort the items of an array

var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]

console.log(arr1.sort()) //ascending
console.log(arr1[0]) //lowest value
console.log(arr1.sort().reverse()) //desc
console.log(arr1[0]) //highest value


//challenge 8: to find the most frequent item of an array

var arr2=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

var m=0, mf=1

for(i=0;i<arr2.length;i++){

    for(j=0;j<arr2.length;j++){

        if(arr2[i] == arr2[j])
        m++

        if(mf < m){
            mf=m
            item = arr2[i]
        }

    }

    m=0
}

console.log(item +' '+'repeated'+' '+mf+' '+'times')


// Challenge 9: JavaScript program which accept a string as input and swap the case of each character

var text1 = "This is case Converting"
var swap = []

var swapcase = function(){

    for(i=0;i<text1.length;i++){
        if(text1[i] == text1[i].toUpperCase())
        swap.push(text1[i].toLowerCase())
        else
        swap.push(text1[i].toUpperCase())
  
    }
return swap.join('')
}

console.log(swapcase(text1))








































































































































