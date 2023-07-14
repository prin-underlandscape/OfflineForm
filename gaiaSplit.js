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
  
  geojson.features.forEach( feature => {//let featureTools = document.createElement("DIV"); 
    let name = document.createElement("LABEL"); 
    let link = document.createElement("A");
    let thumbnail = document.createElement("IMG");
    let downloadButton = document.createElement("BUTTON");
    
    let row = featuresTable.appendChild(document.createElement("thead"));
    switch ( feature.geometry.type ) {
    case "Point":
      let foto =  {
        type: "Feature",
        geometry: feature.geometry,
        properties: { }
      }
      foto.properties.ulsp_type = "Foto";
      foto.properties.url = feature.properties.photos[0].fullsize_url;
      foto.properties.title = feature.properties.photos[0].title;
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
      break;
      
    case "MultiLineString":
      let path = {
        type: "Feature",
        geometry: feature.geometry,
        properties: { }
      };
      path.properties.ulsp_type = "Percorso";
      path.properties.title = feature.properties.title;
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
let output = {
	type: "FeatureCollection",
  features: []
}
