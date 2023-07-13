function processFile (event) {
// Disabilita il pannello di upload
	$("#upload").hide();
// Abilita il pannello di scelta della feature
	$("#FeatureList").show();

	geojson = JSON.parse(event.target.result);
	let FeatureList=document.getElementById("FeatureList");
  
  geojson.features.forEach( (feature, featureIndex) => {
    let featureTools = document.createElement("DIV"); 
    let name = document.createElement("LABEL");
    let selectType = document.createElement("SELECT");
    let editButton = document.createElement("BUTTON");
    
    FeatureList.appendChild(featureTools);
    featureTools.appendChild(name);
    featureTools.appendChild(selectType);
    featureTools.appendChild(editButton);
    
    console.log(geojson.features[featureIndex]);
    let fs = new Format().types();
    fs.unshift("Non definito");
    let typeIndex = 0;
    
//    name.style.color = "red";
    if ( feature.properties.ulsp_type ) {
      switch (feature.properties.ulsp_type) {
        case "Sito":
          name.innerHTML = `Sito ${feature.properties.Sito}: ${feature.properties.Microtoponimo}`;
          break;
        case "Percorso":
          name.innerHTML = `${feature.properties.title}`;
          break;
        case "Foto":
          name.innerHTML = `${feature.properties.title}`;
          break;
      }
      name.width = "100px";
      typeIndex = fs.indexOf(feature.properties.ulsp_type);
      console.log(typeIndex);
//      name.innerHTML = `${geojson.features[i].properties.title}: `;
//      document.getElementById("UntypedFeatures").appendChild(name);
      console.log(fs);				// Debug
    } else {
      name.innerHTML = `${feature.properties.title} (${feature.properties.ulsp_type})`;
      typeIndex.selectedType = 0;
    };
    
// Scelta del tipo del file 
    fs.forEach( (f,i) => { 
      o = document.createElement("option");
      o.text = f;
      selectType.add(o);
    })
    selectType.selectedIndex = typeIndex;
    selectType.addEventListener("change", (event) => {
      let typeName = event.target.value;
      geojson.features[featureIndex].properties.ulsp_type = typeName;
      if ( fs.indexOf(typeName) != 0) {
        editButton.disabled=false;
        editButton.addEventListener( "click", (event) => {
          editFeature(featureIndex, typeName);
        })
      }
      document.activeElement.blur();
    });

// Bottone di modifica
    editButton.innerHTML = "Modifica";
    if (typeIndex === 0) {
      editButton.disabled=true;
    }
    editButton.addEventListener( "click", (event) => {
      editFeature(featureIndex, geojson.features[featureIndex].properties.ulsp_type);
    })
  })
}

function closeEdit() {
// Disabilita il pannello di feature edit
  $("#FeatureEditor").hide();
  document.getElementById("PropertiesList").replaceChildren();
  document.getElementById("WrongAttributes").replaceChildren();
// Abilita il pannello di scelta della feature
  $("#FeatureList").show();
}
