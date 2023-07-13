function handleSubmit (event) {
	//event.preventDefault(); // Evita che venga ricaricato il form
	if (!file.value.length) return; // Annulla se file vuoto (prudente)
	let reader = new FileReader();
	reader.onload = processFile;
	reader.readAsText(document.getElementById("file").files[0]);
}

function closeFile() {
	$("#FeatureList").hide();
	document.getElementById("FeaturesTable").replaceChildren();
	$("#upload").show();
	document.getElementById("file").value = "";
}
