readAppsData();

// READ

function readAppsData() {
  const appsListUI = document.getElementById("apps-list");

  appsRef.on("value", apps => {
    appsListUI.innerHTML = "";
    apps.forEach(nodeApp => {
      let key = nodeApp.key;
      let app = nodeApp.val();

      let $li = document.createElement("li");

      let editIconUI = document.createElement("span");
      editIconUI.class = "edit-app";
      editIconUI.innerHTML = " @";
      editIconUI.setAttribute("appid", key);
      editIconUI.addEventListener("click", editButtonClicked);

      $li.innerHTML = app.id;
      $li.append(editIconUI);

      $li.setAttribute("app-key", key);
      $li.addEventListener("click", userClicked);
      appsListUI.append($li);
    });
  });
}

function editButtonClicked(e) {
  const appId = e.target.getAttribute("appid");

  document.getElementById("edit-app-module").style.display = "inline";
  document.querySelector(".edit-appid").value = appId;

  const appRef = database.child("aplicacoes/" + appId);

  const editAppInputsUI = document.querySelectorAll(".edit-app-input");

  appRef.on("value", app => {
    for (var i = 0, len = editAppInputsUI.length; i < len; i++) {
      var key = editAppInputsUI[i].getAttribute("data-key");
      editAppInputsUI[i].value = app.val()[key];
    }
  });

  const saveBtn = document.querySelector("#edit-app-btn-save");
  saveBtn.addEventListener("click", saveAppBtnClicked);

  const closeBtn = document.querySelector("#edit-app-btn-close");
  closeBtn.addEventListener("click", closeAppBtnEdit);
}

function saveAppBtnClicked(e) {
  const appId = document.querySelector(".edit-appid").value;
  const appRef = database.child("aplicacoes/" + appId);

  var editedAppObject = {};

  const editAppInputsUI = document.querySelectorAll(".edit-app-input");

  editAppInputsUI.forEach(function(textField) {
    let key = textField.getAttribute("data-key");
    let value = textField.value;
    editedAppObject[key] = value;
  });

  appRef.update(editedAppObject, function() {
    console.log("App har been updated");
    console.log(editedAppObject);
  });

  document.getElementById("edit-app-module").style.display = "none";
}

function closeAppBtnEdit() {
  document.getElementById("edit-app-module").style.display = "none";
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
