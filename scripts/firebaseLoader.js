// Initialize Firebase
var config = {};

firebase.initializeApp(config);

const database = firebase.database().ref();
const appsRef = database.child("aplicacoes");
const relsRef = database.child("relacionamentos");

readAppsData();

// READ

function readAppsData() {
  const appsListUI = document.getElementById("apps-list");
  appsRef.on("value", apps => {
    appsListUI.innerHTML = "";
    apps.forEach(nodeApp => {
      let key = nodeApp.key,
        app = nodeApp.val();
      let $li = document.createElement("li");
      $li.innerHTML = app.id;
      $li.setAttribute("app-key", key);
      $li.addEventListener("click", userClicked);
      appsListUI.append($li);
    });
  });
}

function userClicked(e) {
  var appId = e.target.getAttribute("app-key");
  const appRef = database.child("aplicacoes/" + appId);
  const appDetaillUI = document.getElementById("app-detail");
  appRef.on("value", nodeApp => {
    appDetaillUI.innerHTML = "";
    nodeApp.forEach(app => {
      var $p = document.createElement("p");
      $p.innerHTML = app.key + " - " + app.val();
      appDetaillUI.append($p);
    });
  });
}

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
    .set(
      {
        from: from,
        to: to,
        label: label
      },
      function(error) {
        if (error) {
        } else {
        }
      }
    );
}
