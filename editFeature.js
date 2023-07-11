function displayFeature (featureIndex) {
		let properties = new Format().format("Sito");
    let PropertiesList=document.getElementById("PropertiesList");
//		console.log(properties.forms[0].formitems);				// Debug
    
		function editString(present,value,index,array) {
			let propertyValue = document.createElement("input");
      if ( present === "" ) propertyValue.style.backgroundColor = "yellow";
			propertyValue.type = "text";
			propertyValue.value = present;
			propertyValue.setAttribute("id",value.key);
			propertyValue.addEventListener("keyup", (propertyEvent) => {
        if (propertyEvent.key === "Enter") {
				  let fieldName = propertyEvent.target.id;
          geojson.features[featureIndex].properties[fieldName] = propertyEvent.target.value;
          document.activeElement.blur();
        }
      });
      return propertyValue;
		}
    
    function editStringcombo(present,value,index,array) {
			let propertyValue = document.createElement("SELECT");
      propertyValue.type = "text";
      if ( present === "" ) propertyValue.style.backgroundColor = "yellow";
			propertyValue.value = "hallo";
//      console.log(" +++ " + present);
			propertyValue.setAttribute("id",value.key);
			propertyValue.addEventListener("change", (propertyEvent) => {
				  let fieldName = propertyEvent.target.id;
//          console.log(propertyEvent.target.value);
//          console.log(fieldName);
          geojson.features[featureIndex].properties[fieldName] = propertyEvent.target.value;
          document.activeElement.blur();
      });
      value.values.items.forEach( f => { 
        o = document.createElement("option");
        o.text = f.item;
        propertyValue.add(o);
      });
      return propertyValue;
		}
// geojson.features[event.target.id].properties		
		console.log(featureIndex);
// Abilita il pannello di editing delle proprietà
    $("#FeatureEditor").show();
		properties.forms[0].formitems.forEach( (value,index,array) =>
    {
      let nome = document.createTextNode(value.key);
			let present = geojson.features[featureIndex].properties[value.key];
      PropertiesList.appendChild(nome);
			if ( present === undefined ) {
          present = ""
      }
     switch (value.type) {
        case "string": 
          PropertiesList.appendChild(editString(present,value,index,array));
          break;
        case "stringcombo": 
          console.log(present);
          PropertiesList.appendChild(editStringcombo(present,value,index,array));
          break;
        default:
          PropertiesList.appendChild(editString("nil",value,index,array));
          break;
      }
			PropertiesList.appendChild(document.createElement("br"));
    });
		$("#FeatureList").hide();
//		document.getElementById("upload").style.display="block";
}

