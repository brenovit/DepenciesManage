let nodes = new vis.DataSet(aplicacoes, options);
let edges = new vis.DataSet(relacionamentos, options);

// provide the data in the vis format
var data = {
  nodes: nodes,
  edges: edges
};
