// Initialize Firebase
var config = {};

firebase.initializeApp(config);

const database = firebase.database().ref();
const appsRef = database.child("aplicacoes");
const relsRef = database.child("relacionamentos");
