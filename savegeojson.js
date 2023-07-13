function saveGeoJSON() {
	const a = document.createElement("a");
	a.href = URL.createObjectURL(new Blob([JSON.stringify(geojson, null, 2)], {
	type: "text/plain"
	}));
	a.setAttribute("download", "data.geojson");
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}
