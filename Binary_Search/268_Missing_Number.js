var missingNumber = function(nums) {
	nums.sort((a,b)=>a-b)
	let res = 0
	if (nums[nums.length-1] < nums.length){
			res = nums[nums.length-1] + 1
	}
	if (nums[0] !== 0) {
			return res = 0
	} else {
			for (let i = 0; i < nums.length; i++) {
					if (nums[i] !== i) {
					res = i
					break
					} else {
							continue;
					}
			}
			return res
	}
};