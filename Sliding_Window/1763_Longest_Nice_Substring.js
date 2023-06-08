let s = 'pwwkew'

var lengthOfLongestSubstring = function(s) {
	let ans = 0;
	let map = new Map();

	for(let i = 0, j = 0; j < s.length; j++) {
		if(map.has(s[j])) {
			i = Math.max(map.get(s[j]), i);
		}

		ans = Math.max(ans, j - i + 1);
		map.set(s[j], j + 1);
	}

	return ans;
}