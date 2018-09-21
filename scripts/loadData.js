function prepareData(data) {
  let apps = data.nodes;
  apps.forEach(app => {
    app.color = getColorByName(app.color);
  });

  return {
    nodes: apps,
    edges: data.edges
  };
}

function fillVisNetwork(data) {
  let newData = prepareData(data);
  var container = document.getElementById("mynetwork");
  var network = new vis.Network(container, newData, options);
}

function getData(callbackIN) {
  dataRef.on("value", snap => {
    callbackIN(snap.val());
  });
}

window.addEventListener("load", getData(fillVisNetwork));

//loadAndPrepareData();

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

//let nodes = new vis.DataSet(aplicacoes, options);
//let edges = new vis.DataSet(relacionamentos, options);
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
/*var data = {
  nodes: nodes,
  edges: edges
};
*/
