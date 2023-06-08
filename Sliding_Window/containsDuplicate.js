let number = [1,2,3,4,22,22]
const containsDuplicate = function(nums) {
		nums = nums.sort((a,b)=>a-b)
		if ( nums.length === 1){
			return false
	}
	let res = false
	for (let i = 0; i < nums.length - 1 ; i++){
		console.log(i)
		if (nums[i] === nums[i+1]){
			res = true
		}
		else {
			res = false
		}
	}
	return res
}
console.log(containsDuplicate(number))
// console.log(number[3] ^ number[4])