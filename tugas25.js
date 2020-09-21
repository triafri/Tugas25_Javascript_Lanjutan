function sortReverseFilter(){
	var a = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

	var b = a.filter(function(num){
		return num > 10;
	});


	console.log("Sebelumnya : ", a)
	console.log("Ascending : ", a.sort())
    console.log("Descending : ", a.reverse())
    console.log("Filter > 10 : ", b)
}

sortReverseFilter();