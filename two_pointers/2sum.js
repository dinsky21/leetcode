let nums = [3, 2, 4]

var twoSum = function(nums, target) {
	const ans = {};

	for(let i = 0; i < nums.length; i++) {
			const firstElement = target - nums[i];

			const secElement = ans[firstElement];

			if(secElement !== undefined) {
					return [secElement, i];
			}

			ans[nums[i]] = i;
	}
};

console.log(twoSum(nums, 6))


