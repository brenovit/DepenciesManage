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
let aplicacoes = new vis.DataSet(options);
let dependencias = new vis.DataSet(options);

axios.get('https://dependencies-manager.firebaseio.com/aplicacoes.json').then(resp => {
    console.log(resp.data);
    var data = resp.data;
    aplicacoes.add(data);
});

axios.get('https://dependencies-manager.firebaseio.com/dependencies.json').then(resp => {
    console.log(resp.data);
    var data = resp.data;
    dependencias.add(data);
});

// provide the data in the vis format
var data = {
  nodes: aplicacoes,
  edges: dependencias
};
