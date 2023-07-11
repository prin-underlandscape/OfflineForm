function displayFeature (featureIndex) {
//    let featureIndex = featureEvent.target.id;
		let properties = new Format().format("Sito");
//		console.log(properties.forms[0].formitems);				// Debug
		function keyPress(propertyEvent) {
		  if (propertyEvent.key == "Enter") {
				let fieldName = propertyEvent.target.id;
//				console.log(fieldName);                       //Debug
//        console.log(geojson.features[featureIndex].properties[fieldName]);      //Debug
        geojson.features[featureIndex].properties[fieldName] = propertyEvent.target.value;
//        console.log(geojson.features[featureIndex].properties[fieldName]);      //Debug
        document.activeElement.blur();
		  }
    }
		function display(value,index,array) {
//			console.log(value);									// Debug
			let PropertiesList=document.getElementById("PropertiesList");
			PropertiesList.appendChild(document.createTextNode(value.key));
			present = geojson.features[featureIndex].properties[value.key];
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
// geojson.features[event.target.id].properties		
		console.log(featureIndex);
// Abilita il pannello di editing delle proprietà
    $("#FeatureEditor").show();
//    document.getElementById("PropertiesList").style.display="block";
		properties.forms[0].formitems.forEach(display);
//		save(geojson.features[event.target.id]);
		document.getElementById("FeatureList").style.display="none";
//		document.getElementById("upload").style.display="block";
}

