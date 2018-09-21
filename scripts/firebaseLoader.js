// Initialize Firebase
var config = {};

firebase.initializeApp(config);

const database = firebase.database().ref();
const dataRef = database.child("data");
const nodesRef = database.child("data/nodes");

function getApp(appId) {
  return database.child("data/nodes/" + appId);
}

function getData() {
  return dataRef;
}

function getNodes() {
  return nodesRef;
}
