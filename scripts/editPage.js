const appsList = document.getElementById("appsList");

let appRef = database.child("aplicacoes");

appRef.on("child_added", snap => {
    let app = snap.val();
    let $li = document.createElement("li");
    $li.innerHTML = app.id;
    $li.setAttribute("child-key", snap.key);
    if(appsList !== null){
        appsList.append($li);
    }
});