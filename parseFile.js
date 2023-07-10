function processFile (event) {
	function list(value,index,array) {
		const rb = document.createElement("input")
		rb.setAttribute("type","radio");
    		rb.id = index;
    		rb.onclick = editFeature;
		FeatureList.appendChild(rb);
		FeatureList.appendChild(document.createTextNode("\t" + value.properties.title));
		FeatureList.appendChild(document.createElement("br"));
		
		console.log(value.properties);
	}
// Disabilita il pannello di upload
	document.getElementById("upload").style.display="none";
// Abilita il pannello di scelta della feature
	document.getElementById("FeatureList").style.display="block";

	geojson = JSON.parse(event.target.result);
	let FeatureList=document.getElementById("FeatureList");
	geojson.features.forEach(list)
}
