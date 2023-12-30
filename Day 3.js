/* Day 5 Activities 
Do the below programs in anonymous function & IIFE
a. Print odd numbers in an array using Anonymous Function*/

let printOddNumbers=function(array)
{
    let odd=[]
    for(let i=0;i<array.length;i++)
    {
        if(array[i]%2!=0)
        {
            odd.push(array[i])
        }
    }
    return odd
}
console.log("Odd Numbers are: "+printOddNumbers([2,3,5,7,11,6,18,19]).join(", "))
/*Output
3
5
7
11
19 */

//a. Print odd numbers in an array using IIFE Function*/
(function(array)
{
    for(let i=0;i<array.length;i++)
    {
        if(array[i]%2!=0)
        {
            console.log(array[i]);
        }
    }   
})([2,3,5,7,11,6,18,19]);

/*Output
3
5
7
11
19 */


//b. Convert all the strings to title caps in a string array using Anonymous Function
let titleCaps=function(stringArray)
{
    let words=stringArray.split(" ")
    let titleCapsResult=[]
    for(let i=0;i<words.length;i++)
    {
       let letter= words[i].charAt(0).toUpperCase()
        titleCapsResult.push(letter+words[i].slice(1)+ " ")
    }
    return titleCapsResult.join('')
}
console.log(titleCaps("hello javascript. difficult to learn"))

/*OutPut
Hello Javascript. Difficult To Learn */

//b. Convert all the strings to title caps in a string array using IIFE Function
(function(stringArray)
{
    let words=stringArray.split(" ")
    let titleCapsResult=[]
    for(let i=0;i<words.length;i++)
    {
       let letter= words[i].charAt(0).toUpperCase()
        titleCapsResult.push(letter+words[i].slice(1)+ " ")
    }
    return titleCapsResult.join('')
})("hello javascript. difficult to learn");

/*OutPut
Hello Javascript. Difficult To Learn */

/* c. Sum of all numbers in an array using Anonymous Function */
let sumOfNumbers=function(array)
{
    let sum=0
    for(let i=0;i<array.length;i++)
    {
      
        sum+=array[i]
    }
    return sum
}
let tot=sumOfNumbers([2,4,1])
console.log("Sum of the array:"+tot)

/*Output
7 */

/* c. Sum of all numbers in an array using IIFE Function */

(function(array)
{
    let sum=0
    for(let i=0;i<array.length;i++)
    {
      
        sum+=array[i]
    }
    return sum
}

)([2,4,1]);

/*Output
7 */


// d. Return all the prime numbers in an array using Anonymous Function 
let primeNumbers=function(array)
{
   
    let prime=[]
    for(let i=0;i<array.length;i++)
    {
      let flag=0
      for(let n=2;n<array[i];n++)
      {
        
        if(array[i]%n==0)
        {
            
            flag=flag+1
            break
        }
      }
      if (flag==0)
      {
        prime.push(array[i])
      }
    }
  return prime
}
console.log("Prime nos are: "+primeNumbers([3,5,6,9,7,8,4]).join(", "))
/* Output
Prime nos are:3, 5, 7 */

// d. Return all the prime numbers in an array using IIFE Function 

(function()
{
    let prime=[]
    for(let i=0;i<array.length;i++)
    {
      let flag=0
      for(let n=2;n<array[i];n++)
      {
        
        if(array[i]%n==0)
        {
            
            flag=flag+1
            break
        }
      }
      if (flag==0)
      {
        prime.push(array[i])
      }
    }
  return prime
}

)([3,5,6,9,7,8,4]).join(",");

/* Output
Prime nos are:3, 5, 7 */


//e. Return all the palindromes in an array using Anonymous Function 
let palindrome=function(array)
{
    
    let palinWords=[]
    for(let i=0;i<array.length;i++)
    {
        let palin=""
        
        for(let j=array[i].length-1;j>=0;j--)
        {
          
            let word=array[i]
            palin=palin+word.charAt(j)
          
        }
        
        if(array[i].toUpperCase()===(palin.toUpperCase()))
        {
            palinWords.push(array[i])
        }

    }
    return palinWords
}
console.log("Palindromes are: "+palindrome(["Malayalam","121","Hello","Mom","321"]).join(","))
/*Output
Palindromes are: Malayalam,121,Mom */

//e. Return all the palindromes in an array using IIFE Function 

(function(array)
{
    let palinWords=[]
    for(let i=0;i<array.length;i++)
    {
        let palin=""
        
        for(let j=array[i].length-1;j>=0;j--)
        {
          
            let word=array[i]
            palin=palin+word.charAt(j)
          
        }
        
        if(array[i].toUpperCase()===(palin.toUpperCase()))
        {
            palinWords.push(array[i])
        }

    }
    return palinWords

}

)(["Malayalam","121","Hello","Mom","321"]).join(",");

/* Output
Palindromes are: Malayalam,121,Mom
*/

// f. Return median of two sorted arrays of the same size using Anonymous Function 

let median=function(array1,array2)
{
    let mergeArray=array1.concat(array2)
    let sortArray=mergeArray.sort()
    let medianArray=0
    let n=sortArray.length
    
    if(sortArray.length%2==0)
    {
        
        medianArray=(sortArray[(n/2)-1]+sortArray[(n/2)])/2
    }
    else
    {
        medianArray=sortArray[(sortArray.length+1)/2]
    }
    return medianArray

}
console.log("Median is: "+median([1,3],[2,4]))

/*Output
Median is: 2.5 */

// f. Return median of two sorted arrays of the same size using IIFE Function 
(function(array1,array2)
{
    let mergeArray=array1.concat(array2)
    let sortArray=mergeArray.sort()
    let medianArray=0
    let n=sortArray.length
    
    if(sortArray.length%2==0)
    {
        
        medianArray=(sortArray[(n/2)-1]+sortArray[(n/2)])/2
    }
    else
    {
        medianArray=sortArray[(sortArray.length+1)/2]
    }
    return medianArray
})([1,3],[2,4]);

/*Output
Median is: 2.5 */

//g.Remove duplicates from an array using Anonyous Function

let duplicates=function(array)
{
    let unique=[]
    //unique.push(array[0])
    for(let i=0;i<array.length;i++)
    {
         
                if(!unique.includes(array[i]))
                {
                    unique.push(array[i])
                }
            
            
    }
    return unique
}
console.log("Removed duplicates elements from array: "+duplicates(["Hello","apple","Bat","Hello","apple"]).join( "," ))

/* Output
Removed duplicates elements from array: Hello,apple,Bat
*/

//g.Remove duplicates from an array using IIFE Function
(function(array)
{
    let unique=[]

    for(let i=0;i<array.length;i++)
    {
         
                if(!unique.includes(array[i]))
                {
                    unique.push(array[i])
                }
            
            
    }
    return unique
})(["Hello","apple","Bat","Hello","apple"]).join(",");

/* Output
Removed duplicates elements from array: Hello,apple,Bat
*/

//h.Rotate an array by k times using Anonymous Function

let rotate=function(array,key)
{
    for(let i=0;i<key;i++)
    {
        array.unshift(array.pop())
    }
    return array
}
let key=2
console.log("Rotated array with key: "+rotate([2,4,6,7,8],key))
/* Output
Rotated array with with key: 7,8,2,4,6 */


//h.Rotate an array by k times using IIFE Function
(function(array,key)
{
    for(let i=0;i<key;i++)
    {
        array.unshift(array.pop())
    }
    return array
})([2,4,6,7,8],2);

/* Output
Rotated array with with key: 7,8,2,4,6 */

/* Question No: 3
Do the below programs in arrow functions.
Print odd numbers in an array
Convert all the strings to title caps in a string array
Sum of all numbers in an array
Return all the prime numbers in an array
Return all the palindromes in an array */

//Print odd numbers in an array using arrow function
let printOddNumbersArrow=(array)=>
{
    let odd=[]
    for(let i=0;i<array.length;i++)
    {
        if(array[i]%2!=0)
        {
            odd.push(array[i])
        }
    }
    return odd
}
console.log("Odd Numbers are: "+printOddNumbersArrow([2,3,5,7,11,6,18,19]).join(", "))
/*Output
3
5
7
11
19 */

//b. Convert all the strings to title caps in a string array using Arrow Function
let titleCapsArrow=(stringArray)=>
{
    let words=stringArray.split(" ")
    let titleCapsResult=[]
    for(let i=0;i<words.length;i++)
    {
       let letter= words[i].charAt(0).toUpperCase()
        titleCapsResult.push(letter+words[i].slice(1)+ " ")
    }
    return titleCapsResult.join('')
}
console.log(titleCaps("hello javascript. difficult to learn"))

/*OutPut
Hello Javascript. Difficult To Learn */

/* c. Sum of all numbers in an array using Arrow Function */
let sumOfNumbersArrow=(array)=>
{
    let sum=0
    for(let i=0;i<array.length;i++)
    {
      
        sum+=array[i]
    }
    return sum
}
let totArrow=sumOfNumbers([2,4,1])
console.log("Sum of the array:"+totArrow)

/*Output
7 */

// d. Return all the prime numbers in an array using Arrow Function 

let primeNumbersArrow=(array)=>
{
    let prime=[]
    for(let i=0;i<array.length;i++)
    {
      let flag=0
      for(let n=2;n<array[i];n++)
      {
        
        if(array[i]%n==0)
        {
            
            flag=flag+1
            break
        }
      }
      if (flag==0)
      {
        prime.push(array[i])
      }
    }
  return prime
}

console.log("Prime nos are: "+primeNumbersArrow([3,5,6,9,7,8,4]).join(", "))

/* Output
Prime nos are:3, 5, 7 */


//e. Return all the palindromes in an array using Anonymous Function 
let palindromeArrow=(array)=>
{
    
    let palinWords=[]
    for(let i=0;i<array.length;i++)
    {
        let palin=""
        
        for(let j=array[i].length-1;j>=0;j--)
        {
          
            let word=array[i]
            palin=palin+word.charAt(j)
          
        }
        
        if(array[i].toUpperCase()===(palin.toUpperCase()))
        {
            palinWords.push(array[i])
        }

    }
    return palinWords
}
console.log("Palindromes are: "+palindrome(["Malayalam","121","Hello","Mom","321"]).join(","))
/*Output
Palindromes are: Malayalam,121,Mom */