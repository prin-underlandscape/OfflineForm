var geojson = {};

// La funzione risponde alla scelta del file in apertura della App.
// Dell'evento viene utilizzato il nome del file (result)
// Viene visualizzata una tabella per ciascuna delle feature
// contenuta nel file, che può essere di vari tipi (ora Sito, Percorso,
// e Foto). Poi un menu a tendina per indicare/modificare il tipo, ed
// un bottone per la modifica della feature guidata dal formato
function processFile (event) {
  function featureName(fp) {
    if ( fp.ulsp_type ) {
      switch (fp.ulsp_type) {
        case "Sito":
          return `Sito ${fp.Sito}: ${fp.Microtoponimo}`;
          break;
        case "Percorso":
          return `${fp.Titolo}`;
          break;
        case "Foto":
          return `${fp.Titolo}`;
          break;
      }
    } else {
      return `${fp.Titolo}`;
    };
  } // end function
// Disabilita il pannello di upload
	document.getElementById("upload").style.display="none";
// Abilita il pannello di scelta della feature
	document.getElementById("FeatureList").style.display="block";

	geojson = JSON.parse(event.target.result);
	let featuresTable=document.getElementById("FeaturesTable");
  
  geojson.features.forEach( (feature, featureIndex) => {
    let featureTools = document.createElement("DIV"); 
    let name = document.createElement("LABEL");
    let selectType = document.createElement("SELECT");
    let editButton = document.createElement("BUTTON");
    
    let row = featuresTable.appendChild(document.createElement("thead"));
    row.appendChild(document.createElement("td")).appendChild(name);
    row.appendChild(document.createElement("td")).appendChild(selectType);
    row.appendChild(document.createElement("td")).appendChild(editButton);

    console.log(geojson.features[featureIndex]);
    let fs = formatDescriptions.map(f => f.formname);
    fs.unshift("Non definito");
    let typeIndex = 0;

    name.innerHTML = featureName(feature.properties);
    if ( feature.properties.ulsp_type ) {
      typeIndex = fs.indexOf(feature.properties.ulsp_type);
    } else {
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
 //       editButton.addEventListener( "click", (event) => {
 //         editFeature(featureIndex, geojson.features[featureIndex].properties.ulsp_type);
 //       })
      } else {
        editButton.disabled=true;
      }
      name.innerHTML = featureName(geojson.features[featureIndex].properties);
      document.activeElement.blur();
    });

// Bottone di modifica
    editButton.innerHTML = "Modifica";
    if (typeIndex === 0) {
      editButton.disabled=true;
    }
    editButton.addEventListener( "click", (event) => {
      console.log(geojson.features[featureIndex].properties.ulsp_type);
//     editFeature(featureIndex, geojson.features[featureIndex].properties.ulsp_type);
      editFeature(featureIndex);
    })
  })
}

// La funzione risponde al tasto "Chiudi il file".
// Si limita a gestire l'interfaccia chiudendo l'interfaccia di editing 
function closeEdit() {
// Disabilita il pannello di feature edit
  document.getElementById("FeatureEditor").style.display="none";
  document.getElementById("PropertiesList").replaceChildren();
  document.getElementById("WrongAttributes").replaceChildren();
// Abilita il pannello di scelta della feature
  document.getElementById("FeatureList").style.display="block";
}

