// Initialize Firebase
var config = {

};

firebase.initializeApp(config);

const database = firebase.database().ref();

function writeAplicacoes(id, label) {
  firebase
    .database()
    .ref("aplicacoes/")
    .set(
      {
        id: id,
        label: label
      },
      function(error) {
        if (error) {
        } else {
        }
      }
    );
}

function writeAplicacoes(from, to, label) {
  firebase
    .database()
    .ref("dependencias/")
    .set({
      from: from,
      to: to,
      label: label
    },
    function(error) {
      if (error) {
      } else {
      }
    });
}
