/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

const buildAdjList = (n, edges) => {
	const adjList = Array.from({length:n}, () => [])

	for (let edge of edges){
			let [to, from] = edge
			adjList[to].push(from)
	}
	return adjList
}

const hasCycleDFS = (node, adjList, visited, arrive, depart) => {
	arrive[node]++
	// console.log("arrive",arrive)
	visited[node] = true
	// console.log(visited)

	for(let neighbor of adjList[node]){
			// console.log(neighbor)
			if(!visited[neighbor]){
					visited[neighbor] = true
					if(hasCycleDFS(neighbor, adjList, visited, arrive, depart)) return true
			} else {
					if (depart[neighbor] === 0) return true
			}
	}

	depart[node]++
	// console.log("depart", depart)
	return false
}
var canFinish = function(numCourses, prerequisites) {
	const adjList = buildAdjList(numCourses, prerequisites)
	const visited = {}
	const arrive = Array.from({length: numCourses}, () => 0)
	const depart = Array.from({length: numCourses}, () => 0)

	for (let vertex = 0; vertex < adjList.length; vertex++){
			// console.log(vertex)
			if(!visited[vertex]){
					if (hasCycleDFS(vertex, adjList, visited, arrive, depart)) return false
			}    
	}
	return true
};