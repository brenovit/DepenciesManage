

firebase.initializeApp(config);

const dbRef = firebase.database().ref();

let appRef = dbRef.child('aplicacoes');
let depRef = dbRef.child('dependencies');

let appLitsUI

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
