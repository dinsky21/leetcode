var threeSum = function(nums) {
	nums.sort((a,b)=>a-b)
	let finalArray = []
	for (let i=0; i<nums.length-2; i++){
			if (nums[i] > 0) break
			if (i > 0 && nums[i] === nums[i - 1]) continue
			let start = i + 1
			let end = nums.length - 1
			while (start < end){
					let sum = nums[i] + nums[start] + nums[end]
					if (sum === 0){
							finalArray.push([nums[i], nums[start], nums[end]])
							while (start<end && nums[start]===nums[start+1]) start++
							while (start<end && nums[end]===nums[end-1]) end--
							start++
							end--
					}
					else if (sum < 0 ){
							start++
					}
					else{
							end--
					}
			}
			
	}
	return finalArray
};