module.exports.run = function(str) {
/*
A lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy, otherwise return false.

	Example:
		function("xxggxx") => true
		function("xxgxx") => false

        Write your code below the comment.
*/
var newArray = str.split('');
gArray = [];

for(let i=0; i<newArray.length; i++) {
	if (newArray[i] === "g") {
		gArray.push(newArray.indexOf[i])
	}
	console.log(gArray)
}



};