module.exports.run = function(csv){
/*
	A stringified CSV file will be passed into this function. Parse the string so it is an array of objects and return the array. The object properties are the header of the csv file, and the very first row of the csv file are the headers.

	Example

	function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
		[
			{FirstName: Dan, LastName: Tran, Age: 29},
			{FirstName: Don, LastName: Tran, Age: 25},
			{FirstName: Jasmine, LastName: Tran, Age: 13},
		]

	Write your code below the comment.
*/

const CSV_to_JSON = (data, delimiter = ',') => {
	//data = the array being passed into the function
	//.slice starts at the first [0] index of the array, and goes until the '/n' indicator and returns the selected elements as a new array object
	//.split then knows that the 
	const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
	return data
	  .slice(data.indexOf('\n') + 1)
	  .split('\n')
	  .map(v => {
		const values = v.split(delimiter);
		return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
	  });
  };

return CSV_to_JSON('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13');

};
