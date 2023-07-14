function editFeature (featureIndex) {
  typeName = geojson.features[featureIndex].properties.ulsp_type;
  console.log(`${featureIndex} + ${typeName}`);
  console.log(geojson);
	let properties = formats.format(geojson.features[featureIndex].properties.ulsp_type);
  let propertiesList=document.getElementById("PropertiesList");
  let wrongAttributes=document.getElementById("WrongAttributes");

  function editDouble(present,value,index,array) {
    let propertyValue = document.createElement("TEXTAREA");
    propertyValue.rows = 1;
    propertyValue.cols = 10;
    propertyValue.style = "resize:none; vertical-align:middle"
    propertyValue.value = present;
    propertyValue.id = value.key;
    propertyValue.addEventListener("change", (propertyEvent) => {
      let fieldName = propertyEvent.target.id;
      geojson.features[featureIndex].properties[fieldName] = propertyEvent.target.value;
      document.activeElement.blur();
    });
    if ( present === "" ) propertyValue.style.backgroundColor = "yellow";
    propertiesList.appendChild(propertyValue);
  }

  function editString(present,value,index,array) {
    let propertyValue = document.createElement("TEXTAREA");
    propertyValue.rows = 1 + Math.floor(present.length/40);
    propertyValue.cols = 40;
    propertyValue.overflow = "scroll";
    propertyValue.style = "vertical-align:middle"
    propertyValue.value = present;
    propertyValue.id = value.key;
    propertyValue.addEventListener("change", (propertyEvent) => {
      let fieldName = propertyEvent.target.id;
      geojson.features[featureIndex].properties[fieldName] = propertyEvent.target.value;
      document.activeElement.blur();
    });
    if ( present === "" ) propertyValue.style.backgroundColor = "yellow";
    propertiesList.appendChild(propertyValue);
  }
  
  function editStringcombo(present,value,index,array) {
    let legal=false;
  let propertyValue = document.createElement("SELECT");
    value.values.items.forEach( (f,i) => { 
      o = document.createElement("option");
      o.text = f.item;
      propertyValue.add(o);
      if ( f.item === present ) {
        propertyValue.selectedIndex = i;
        legal = true;
      }
    });
    propertyValue.id = value.key;
    propertyValue.addEventListener("change", (propertyEvent) => {
      let fieldName = propertyEvent.target.id;
      geojson.features[featureIndex].properties[fieldName] = propertyEvent.target.value;
      document.activeElement.blur();
    });
    if ( present === "" ) propertyValue.style.backgroundColor = "yellow";
    propertiesList.appendChild(propertyValue);
    if ( legal === false ) {
      let wrongValue = document.createElement("LABEL");
      wrongValue.style.color = "red";
      wrongValue.innerHTML = `\t(${present})`;
      propertiesList.appendChild(wrongValue);
//        console.log(present);
    }
  }
  
// geojson.features[event.target.id].properties		
		console.log(featureIndex);
// Abilita il pannello di editing delle proprietà
    $("#FeatureEditor").show();
    
// Genera l'elenco degli attributi da rimuovere, non contenuti nel database Underlandscape    
    let ulspAttributes = properties.forms[0].formitems.map(i => i.key);
    console.log(geojson.features[featureIndex].properties);
    Object.keys(geojson.features[featureIndex].properties).forEach( (inputAttr, index) =>
    {
      if ( ! ulspAttributes.find( ulspAttr => inputAttr === ulspAttr) )  {
        let keyvalue = document.createElement("LABEL");
        keyvalue.style.color = "red";
        keyvalue.style.fontSize = "x-small ";
        val = JSON.stringify(geojson.features[featureIndex].properties[inputAttr]);
        keyvalue.innerHTML = `\t${inputAttr}: ${val}`;
        let removeButton = document.createElement("BUTTON");
        removeButton.innerHTML = "Rimuovi";
        removeButton.id = inputAttr;
        removeButton.addEventListener("click", (event) => {
          console.log(geojson.features[featureIndex].properties[event.target.id]);
          delete geojson.features[featureIndex].properties[event.target.id];
          console.log(document.getElementById(inputAttr));
          document.getElementById(inputAttr).parentNode.style.visibility = "Hidden";
          document.getElementById(inputAttr).parentNode.style.display = "none";
        })
        let wrongAttribute = document.createElement("DIV");
        let parent = wrongAttributes.appendChild(wrongAttribute);
        parent.appendChild(removeButton);
        parent.appendChild(keyvalue);
        parent.appendChild(document.createElement("br"));
      }
    }
    );
// Genera l'elenco editabile dei campi editabili, evidenziando errori
		properties.forms[0].formitems.forEach( (value,index,array) =>
    {
      if ( value.key !== "ulsp_type" ) {
        let nome = document.createTextNode(`${value.key}: `);
        let present = geojson.features[featureIndex].properties[value.key];
        PropertiesList.appendChild(nome);
        if ( present === undefined ) {
            present = ""
        }
        switch (value.type) {
          case "string": 
          case "date": 
          case "time": 
          case "pictures":
            editString(present,value,index,array);
            break;
          case "stringcombo": 
            editStringcombo(present,value,index,array);
            break;
          case "double": 
          case "integer": 
            editDouble(present,value,index,array);
            break;
          default:
            editString("nil",value,index,array);
            break;
        }
			PropertiesList.appendChild(document.createElement("br"));
    }
    });
		$("#FeatureList").hide();
//		document.getElementById("upload").style.display="block";
}

