function loadJSON(file, callback) { 
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
}

function init() {
    console.log('ola mundo');
 loadJSON('./data/aplicacoes.json', function(response) {
  // Parse JSON string into object
    apps = JSON.parse(response);
    for(i = 0; i < apps.length; i++ ){
        var app = apps[i];
        console.log(app);
    }
 });
}
let apps;
init();
 