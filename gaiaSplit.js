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
	$("#upload").hide();
// Abilita il pannello di scelta della feature
	$("#FeatureList").show();
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
        foto.properties.ulsp_type = "Foto";
        foto.properties.URL = feature.properties.photos[0].fullsize_url;
        foto.properties.Titolo = feature.properties.photos[0].title;
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
      path.properties.Lunghezza = feature.properties.distance;
      path.properties.Durata = feature.properties.moving_time;
      path.properties["Dislivello in salita"] = feature.properties.total_ascent;
      path.properties["Dislivello in discesa"] = feature.properties.total_descent;
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
