var data = [10, 20, ["apple", "banana"], ["cat", ["dog", "elephant"], "fish"], "grape"];
 console.log(data.length)


// Task :1.take two strings with spaces at starting of one string and 
// at the ending of another string remove the spaces and 
// concat the both string and 
// convert the combined string into uppercase string

var a="             pavani"
var b="reddy        "
var a1=a.trimStart();
console.log (a1)
var b1=b.trimEnd();
console.log(b1);
var concatstr=a1.concat(b1);
console.log (concatstr);
var concatstr_uppercase=concatstr.toUpperCase();
console.log (concatstr_uppercase)

// 2.Extract Middle Portion of the string and
//  get the last index of char of extracted string and
//  Convert the portion to Lowercase

var str="MahesH"
var str1=str.slice(2,4);
console.log(str1)
console.log(str1.length -1)
var str_lowercase=str1.toLowerCase();
console.log(str_lowercase)

// 3.take a single char and concat string to that char and 
// convert the resulted string to uppercase and 
// then extract the last second char

var a="p"
var b="izza"
var concatstr=a.concat(b)
console.log(concatstr);
var concatstr_uppercase=concatstr.toUpperCase();
console.log(concatstr_uppercase);
var concatstr_uppercase_charAt=concatstr_uppercase.charAt(3);
console.log(concatstr_uppercase_charAt);

// 4.we have 2 string and extract first 3 chars of first string and
//  extra last 3 chars of another string and concat those 2 results together
//  and first char and last char of the resulted concatinated string should as uppercase

var a="chicken"
var b="biryani"
var a1=a.slice(0,3)
var b1=b.slice(4)
var concatab=a1.concat(b1)
console.log(concatab);
var concatab_uppercase=concatab.charAt(0).toUpperCase()+ concatab.charAt(concatab.length -1).toUpperCase();
console.log(concatab_uppercase);

// 5.You are given a string with extra spaces at the beginning and end.
//  You need to trim the string, make the first and last characters uppercase, 
//  extract a specific part of the string, 
//  concatenate it with another string

 var x= "          chinni        "
 var x1=x.trim();
 var x1_uppercase=x1.charAt(0).toUpperCase()+ x1.charAt(5).toUpperCase();
 var x1_slice=x1.slice(1,4)
 var x2="jay"
 var concat_word=x1_slice.concat(x2);
 console.log(concat_word);



// 6."hello there , how are you " find the index of are word in the sentence

var str="hello there , how are you "
var str1=str.indexOf("are")
console.log(str1);

