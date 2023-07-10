function editFeature (featureEvent) {
		let properties = new Format().format("Sito");
//		console.log(properties.forms[0].formitems);				// Debug
		function keyPress(propertyEvent) {
			
      console.log(propertyEvent);
		  if (propertyEvent.key == "Enter") {
				let fieldName = propertyEvent.target.id;
				console.log(fieldName);
		  }
    }
		function display(value,index,array) {
//			console.log(value);									// Debug
			let PropertiesList=document.getElementById("PropertiesList");
			PropertiesList.appendChild(document.createTextNode(value.key));
			present = geojson.features[event.target.id].properties[value.key];
			PropertiesList.appendChild(document.createTextNode(": "));
			let propertyValue = document.createElement("input");
			propertyValue.setAttribute("type","text");
			propertyValue.setAttribute("value",present);
			propertyValue.setAttribute("id",value.key);
			propertyValue.addEventListener("keyup", keyPress);
			PropertiesList.appendChild(propertyValue);
			PropertiesList.appendChild(document.createElement("br"));
//			const rb = document.createElement("input")
//			rb.setAttribute("type","radio");
//    			rb.id = index;
//    			rb.onclick = editFeature;
//			feature.appendChild(rb);
//			PropertiesList.appendChild(property);
		}
		function closeEdit() {
			
		}
// geojson.features[event.target.id].properties		
		
// Abilita il pannello di editing delle proprietà
    document.getElementById("PropertiesList").style.display="block";
		properties.forms[0].formitems.forEach(display);
//		save(geojson.features[event.target.id]);
		document.getElementById("FeatureList").style.display="none";
//		document.getElementById("upload").style.display="block";
}
