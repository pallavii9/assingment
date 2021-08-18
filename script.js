function ques1() {
	function sum(arr) {
		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return sum;
	};

	// Input
	let arr = [10, 22, 34, 45, 20];
	console.log("Sum of given array is " + sum(arr))
};

/*Reverse String*/
function myFunction() {
	var str = "My name is pallavi";
	var text = "";
	var len = str.length - 1;
	for (i = len; i > -1; i--) {
		var res = str.charAt(i);
		text += str[i];
	}
	document.getElementById("result").innerHTML = text;
}

let arr = "asjf";