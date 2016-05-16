function calculate_median(arr) {
	var midNum;
	var len = arr.length;
	arr.sort(compare);

	if (arr.length%2 == 0) {
		midNum = (arr[len/2-1] + arr[len/2])/2;
	}else {
		midNum = arr[(len-1)/2];
	}

	return midNum;
}

function compare(value1, value2){
	return value1 - value2;
}
module.exports = calculate_median;
