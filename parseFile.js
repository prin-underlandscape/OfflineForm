function processFile (event) {
// Disabilita il pannello di upload
	document.getElementById("upload").style.display="none";
// Abilita il pannello di scelta della feature
	document.getElementById("FeatureList").style.display="block";

	geojson = JSON.parse(event.target.result);
	let FeatureList=document.getElementById("FeatureList");
	
	let s = document.createElement("SELECT");
  FeatureList.appendChild(s);
  geojson.features.forEach( f => { 
    o = document.createElement("option");
    o.text = f.properties.title;
		s.add(o);
	})
  s.size=s.length;
  s.onclick = (event) => {
    event.preventDefault();
    displayFeature(s.selectedIndex);
  }
}

function closeEdit() {
// Disabilita il pannello di feature edit
  $("#FeatureEditor").hide();
  document.getElementById("PropertiesList").replaceChildren();
// Abilita il pannello di scelta della feature
  $("#FeatureList").show();
}
