// Initialize Firebase
var config = {};

firebase.initializeApp(config);

const database = firebase.database().ref();
const dataRef = database.child("data");
const appsRef = database.child("data/nodes");
