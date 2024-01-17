function handleSubmit (event) {
	//event.preventDefault(); // Evita che venga ricaricato il form
	if (!file.value.length) return; // Annulla se file vuoto (prudente)
	let reader = new FileReader();
	reader.onload = processFile;
	reader.readAsText(document.getElementById("file").files[0]);
}

function closeFile() {
	document.getElementById("FeatureList").style.display="none";
	document.getElementById("FeaturesTable").replaceChildren();
	document.getElementById("upload").style.display="block";
	document.getElementById("file").value = "";
	geojson = {};
}

function savePath() {
	const a = document.createElement("a");
	a.href = URL.createObjectURL(new Blob([JSON.stringify(output, null, 2)], {
	type: "text/plain"
	}));
	a.setAttribute("download", "percorso.geojson");
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}
  
function processFile (event) {
// Disabilita il pannello di upload
	document.getElementById("upload").style.display="none";
//	$("#upload").hide();
// Abilita il pannello di scelta della feature
	document.getElementById("FeatureList").style.display="block";
//	$("#FeatureList").show();
    let featuresTable=document.getElementById("FeaturesTable");

	geojson = JSON.parse(event.target.result);
  console.log(geojson);
  
  geojson.features.forEach( feature => { 
    let name = document.createElement("LABEL"); 
    let link = document.createElement("A");
    let thumbnail = document.createElement("IMG");
    let downloadButton = document.createElement("BUTTON");
    
    let row = featuresTable.appendChild(document.createElement("thead"));
    switch ( feature.geometry.type ) {
    case "Point":
      if ( feature.properties.attr === "photo" ) {
        let foto =  {
          type: "Feature",
          geometry: feature.geometry,
          properties: { }
        }
        foto.properties.ulsp_type = "POI";
        foto.properties.Foto = feature.properties.photos[0].fullsize_url; // Problema CORS da uMap
        foto.properties.Titolo = feature.properties.photos[0].title;
        foto.properties.Descrizione = feature.properties.photos[0].notes;
        foto.properties["Altitudine"] = feature.properties.elevation;
        foto.properties.Data = feature.properties.photos[0].time_created.split("T")[0];
        foto.properties.Ora = feature.properties.photos[0].time_created.split("T")[1];
        foto.properties.Strumento = source;
        output.features.push(foto);
        
        row.appendChild(document.createElement("td")).appendChild(thumbnail);
        row.appendChild(document.createElement("td")).appendChild(link);
        row.appendChild(document.createElement("td")).appendChild(name);
        name.innerHTML = feature.properties.photos[0].title;
        thumbnail.src = feature.properties.photos[0].thumbnail_url;
        thumbnail.alt = "Foto non più disponibile. Ripeti il download da GaiaGPS";
        downloadButton.innerHTML = "Download";
        link.href = feature.properties.photos[0].fullsize_url;
        link.alt = "Foto non più disponibile. Ripeti il download da GaiaGPS";
        link.innerHTML = "link";
      }
      break;
      
    case "MultiLineString":
      let path = {
        type: "Feature",
        geometry: feature.geometry,
        properties: { }
      };
      console.log(feature.properties);
      path.properties.ulsp_type = "Percorso";
      path.properties.Titolo = feature.properties.title;
      path.properties.Data = feature.properties.time_created.split("T")[0];
      path.properties.Ora = feature.properties.time_created.split("T")[1];
      path.properties.Strumento = feature.properties.source;
      path.properties.Lunghezza = (feature.properties.distance/1000).toFixed(3);
      var date = new Date(feature.properties.moving_time * 1000);
      var hm = date.toTimeString().split(':').slice(0,2);
      path.properties.Durata = hm[0]+"h"+" "+hm[1]+"m";
      path.properties["Dislivello in salita"] = feature.properties.total_ascent.toFixed(0);
      path.properties["Dislivello in discesa"] = feature.properties.total_descent.toFixed(0);
      source = feature.properties.source;
      output.features.push(path);
      
      document.getElementById("titolo").innerHTML = feature.properties.title;

      break;
    }
  });
  console.log(output)

}

function closeEdit() {
// Disabilita il pannello di feature edit
  $("#FeatureEditor").hide();
  document.getElementById("PropertiesList").replaceChildren();
  document.getElementById("WrongAttributes").replaceChildren();
// Abilita il pannello di scelta della feature
  $("#FeatureList").show();
  geojson = {};
}


let geojson = {};
let source = "";
let output = {
	type: "FeatureCollection",
  features: []
}
