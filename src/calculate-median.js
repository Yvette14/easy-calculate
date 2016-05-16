function calculate_median(arr) {
	var midNum,even_len,even_arr = new Array(),len = arr.length;

	//先对arr进行从小到大排序
	arr.sort(compare);

	//计算新数组长度，并遍历arr将arr中第偶数个元素添加进even_arr
	even_len = Math.floor(len/2);
	for(var i = 0;i<even_len;i++){
		even_arr[i] = arr[2*i+1];
	}
	
	//even_arr数组元素是偶数个时
	if (even_len%2 == 0) {
		midNum = (even_arr[even_len/2-1] + even_arr[even_len/2])/2;
	}else {	//奇数时
		midNum = even_arr[(even_len-1)/2];
	}

	return midNum;
}

function compare(value1, value2){
	return value1 - value2;
}
module.exports = calculate_median;