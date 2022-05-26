/** INSTRUCTIONS
 *
 * implement a method, function, non-function solution
 *
 * PROBLEM
 *
 * select one implementation af a graph from books (pdfs):
 * mcm14
 * gro14
 *
 * write it and make sure it runs
 */
class Graph {
  constructor(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
      this.adj[i] = [];
      this.adj[i].push("");
    }
  }
  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }
  showGraph() {
    let str = "";
    for (var i = 0; i < this.vertices; ++i) {
      str += i + " -> ";
      for (var j = 0; j < this.vertices; ++j) {
        if (this.adj[i][j] != undefined) str += this.adj[i][j] + " ";
      }
      console.log(str);
      str = "";
    }
  }
}

g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
