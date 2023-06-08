var invertTree = function(root) {
	if (root == null){
			return root
	}
	let left = invertTree(root.left)
	let right = invertTree(root.right)

	let temp = []
	temp = root.right
	root.right = left
	root.left = right

	return root
};