// create an array with nodes
/*
let aplicacoes = new vis.DataSet(options);
let dependencias = new vis.DataSet(options);

appRef.on("value", function(snap) {
  let app = snap.val();
  aplicacoes.add(app);
});

depRef.on("child_added", snap => {
    let dep = snap.val();
    dependencias.add(dep);
});
//*/

let nodes = new vis.DataSet(aplicacoes, options);
let edges = new vis.DataSet(relacionamentos, options);
/*
axios.get('https://dependencies-manager.firebaseio.com/aplicacoes.json').then(resp => {
    var data = resp.data;
    nodes.add(data);
});

axios.get('https://dependencies-manager.firebaseio.com/dependencies.json').then(resp => {
    var data = resp.data;
    edges.add(data);
});
*/
// provide the data in the vis format
var data = {
  nodes: nodes,
  edges: edges
};
