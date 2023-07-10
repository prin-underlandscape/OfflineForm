
	

function save(data) {
	const a = document.createElement("a");
	a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], {
	type: "text/plain"
	}));
	a.setAttribute("download", "data.txt");
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

let geojson = {}
// Disabilita il pannello di scelta della feature
document.getElementById("FeatureList").style.display="none";
// Disabilita il pannello di editing delle proprietà
document.getElementById("PropertiesList").style.display="none";
