var removeDuplicates = function(nums) {
	const uniqueSet = new Set(nums); 
  const uniqueArray = [...uniqueSet];
  nums.splice(0, nums.length, ...uniqueArray); 
	console.log(nums.splice(0, nums.length, ...uniqueArray))
  return {uniqueArray}; 
};

let arr = [0,0,1,1,1,2,2,3,3,4]
 
console.log(removeDuplicates(arr))