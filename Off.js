// Get the form and file field
let form = document.querySelector('#upload');
let file = document.querySelector('#file');

// Listen for submit events
form.addEventListener('submit', handleSubmit);
function handleSubmit (event) {
	// Stop the form from reloading the page
	event.preventDefault();
	// If there's no file, do nothing
	if (!file.value.length) return;
	// Create a new FileReader() object
	let reader = new FileReader();
	// Setup the callback event to run when the file is read
	reader.onload = processFile;
	// Read the file
	reader.readAsText(file.files[0]);
}

function processFile (event) {
	function list(value,index,array) {
		const feature = document.createElement("p");
		feature.appendChild(document.createTextNode(value.properties.title));
		const rb = document.createElement("input")
		rb.setAttribute("type","radio");
    		rb.id = index;
    		rb.onclick = editFeature;
		feature.appendChild(rb);
		FeatureList.appendChild(feature);
		
		console.log(value.properties);
	}
	function editFeature (event) {
		function display(value,index,array) {
			console.log(value);
		}
		Object.keys(geojson.features[event.target.id].properties).forEach(display);
		save(geojson.features[event.target.id]);
		document.getElementById("FeatureList").style.display="none";
		document.getElementById("upload").style.display="block";
	}
	document.getElementById("upload").style.display="none";
	let geojson = JSON.parse(event.target.result);
	let FeatureList=document.getElementById("FeatureList");
	geojson.features.forEach(list)
}

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
