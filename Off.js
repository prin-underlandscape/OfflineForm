var geojson = {};
var umap = {};
var inputType = ""; // geojson or umap

// La funzione risponde alla scelta del file in apertura della App
// e, a caricamento avvenuto, chiama la funzione processFile
function handleSubmit (event) {
	//event.preventDefault(); // Evita che venga ricaricato il form
	if (!file.value.length) return; // Annulla se file vuoto (prudente)
  inputType = file.value.split('.').pop()
	var reader = new FileReader();
	reader.onload = (event) => {
    switch (inputType) {
      case "geojson":
        geojson = JSON.parse(event.target.result);
        processFile();
        break;
      case "umap":
        geojson = JSON.parse(event.target.result).layers[0];
        // Remove _umap_options attribute (will be restored)
//        if ("_umap_options" in geojson ) {
//          delete geojson["_umap_options"];
//        }
        processFile(); 
        break;
      case "qrcode":
        point = JSON.parse(event.target.result);
        geojson = {
	      "type": "FeatureCollection",
	      "features": []
	    };
	    geojson.features.push(point);
        geojson.features[0].properties.ulsp_type = "Sito";
        map=[
    	  ["01-name","Titolo"],
          ["02-description","Descrizione"],
          ["03-date","Data"],
          ["04-time","Ora"],
          ["07-Sito","Sito"],
          ["08-Provincia","Provincia"],
          ["09-Comune","Comune"],
          ["10-Toponimo","Toponimo"],
	      ["11-Microtoponimo","Microtoponimo"],
	      ["12-Altitudine","Altitudine"],
          ["13-Strada accesso","Strade d'accesso"],
          ["14-Altra localizzazione","Altri elementi di localizzazione"],
          ["15-Tipologia","Tipologia sito"],
          ["16-Definizione","Definizione"],
          ["17-Cronologia iniziale","Cronologia iniziale"],
          ["18-Cronologia finale","Cronologia finale"],
          ["19-Reperti ceramici","Reperti ceramici"],
          ["20-Reperti geologici","Reperti geologici"],
          ["21-Reperti biologici","Reperti organici"],
          ["22-Altri manufatti","Altri manufatti"],
          ["23-Sicurezza","Sicurezza"],
          ["24-Accessibilità","Accessibilità"],
          ["25-Copertura rete mobile","Copertura rete mobile"],
          ["26-Copertura GPS","Copertura GPS"],
          ["_umap_options",""]
        ]
        function mapField(orig,target) {
          if ( orig in geojson.features[0].properties ) {
  	        if (target !== "" ) {
             geojson.features[0].properties[target] = geojson.features[0].properties[orig];
	        }
  	        delete(geojson.features[0].properties[orig]);
          }
          if ( geojson.features[0].properties[target] === false ) geojson.features[0].properties[target] = "NO";
          if ( geojson.features[0].properties[target] === true ) geojson.features[0].properties[target] = "SI";
        }
        map.forEach( m => mapField( m[0], m[1] ) );
        processFile();
        break;
      default: return;
    }
  }
  reader.readAsText(document.getElementById("file").files[0]);
  console.log(inputType);
}


function QRscan() {

// Disabilita il pannello di upload
  document.getElementById("upload").style.display="none";
// Abilita il pannello di scelta della feature
  document.getElementById("scanInterface").style.display="block";
  console.log("Ecco...");
  function onScanSuccess(decodeText, decodeResult) {
    console.log(decodeText)
    console.log(decodeResult);
    geojson = {
	  "type": "FeatureCollection",
	  "features": []
	};
//	oldQRdata = JSON.parse(decodeText);
    geojson.features.push(JSON.parse(decodeText));
    geojson.features[0].properties.ulsp_type = "Sito";
// Begin compatibility mode
    map=[
     ["name","Sito"],
     ["microtoponimo","Microtoponimo"],
     ["altitudine","Altitudine"],
     ["altra localizzazione","Altri elementi di localizzazione"],
     ["altri manufatti","Altri manufatti"],
     ["comune","Comune"],
     ["copertura GPS","Copertura GPS"],
     ["copertura rete mobile","Copertura rete mobile"],
     ["cronologia iniziale","Cronologia Iniziale"],
     ["cronologia finale","Cronologia Finale"],
     ["date","Data"],
     ["description","Descrizione"],
     ["provincia","Provincia"],
     ["reperti biologici","Reperti organici"],
     ["reperti geologici","Reperti geologici"],
     ["reperti ceramici","Reperti ceramici"],
     ["sicurezza","Sicurezza"],
     ["strada accesso","Strade d'accesso"],
     ["time","Ora"],
     ["tipologia","Tipologia sito"],
     ["toponimo","Toponimo"],
     ["sito",""],
     ["_umap_options",""]
   ]
    function mapField(orig,target) {
      if ( orig in geojson.features[0].properties ) {
  	    if (target !== "" ) {
			geojson.features[0].properties[target] = geojson.features[0].properties[orig];
	    }
  	    delete(geojson.features[0].properties[orig]);
      }
      if ( geojson.features[0].properties[target] === false ) geojson.features[0].properties[target] = "NO";
      if ( geojson.features[0].properties[target] === true ) geojson.features[0].properties[target] = "SI";
    }
    map.forEach( m => mapField( m[0], m[1] ) );
// End compatibility mode	
    processFile();
// Disabilita il pannello di upload
    document.getElementById("scanInterface").style.display="none";
// Abilita il pannello di scelta della feature
    document.getElementById("FeatureList").style.display="block";
  }
  let htmlscanner = new Html5QrcodeScanner(
    "my-qr-reader",
    { fps: 10, qrbos: 250 }
  );
  htmlscanner.render(onScanSuccess);
}

// La funzione è invocata al termine del caricamento del file, nel caso
// in cui si stia elaborabdo un file geojson.
// Dell'evento viene utilizzato il contenuto del file (result),
// caricato nella variabile globale "geojson".
// Viene visualizzata una tabella per ciascuna delle feature
// contenuta nela variabile "geojson, che può essere di vari tipi
// (ora Sito, Percorso, e Foto). Poi un menu a tendina per
// indicare/modificare il tipo, ed un bottone per la modifica della
// feature guidata dal formato
function processFile () {
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
  console.log(JSON.stringify(geojson));
// Disabilita il pannello di upload
	document.getElementById("upload").style.display="none";
// Abilita il pannello di scelta della feature
	document.getElementById("FeatureList").style.display="block";
  
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

// La funzione risponde al tasto "Salva un file geoJSON"
// Funziona creando un elemento "anchor" con la modalità download
// di HTML5. Il link corrisponde ad un blob che contiene il geojson
// convertito in JSON
function saveGeoJSON() {
	const a = document.createElement("a");
	a.href = URL.createObjectURL(
      new Blob([JSON.stringify(geojson, null, 2)], {type: "text/plain"}
   ));
	a.setAttribute("download", "data.geojson");
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

// Prepara un file umap con le features contenute nella variabile
// geojson.
// Utilizza il template contenuto nella variabile "umap". Il file
// è prodotto a partire da un umap scaricato dalla mappa
// underlandscape-template_93188, eliminando tutte le features nei
// livelli, gli id dei livelli, e la uri
// La tecnica per il salvataggio del file è analoga a quella di
// savegeojson
function saveUmap() {
  var newUmap = umapTemplate;
  let allowedTypes = newUmap.layers.map( l => l._umap_options.name );
  console.log(allowedTypes);
//  percorsi.features.push(lxpercorso);
//  foto.features.push(lxfoto);
//  siti.features.push(lxsito);
  
  geojson.features.map( feature => {
    console.log(feature.properties.ulsp_type);
    if ( allowedTypes.includes(feature.properties.ulsp_type) ) {
	  let layer = newUmap.layers.find(l => l._umap_options.name === feature.properties.ulsp_type);
      feature.properties._umap_options = {};
      feature.properties._umap_options.popupTemplate = "Default";
	  layer.features.push(feature);
//      let layer = umap.layers.find(l => l._umap_options.name === feature.properties.ulsp_type);
//      layer.features.push(feature);
    }
  });
  newUmap.geometry.coordinates = geojson.features[0].geometry.coordinates;
  newUmap.properties.name = "Sito " + geojson.features[0].properties.Sito;

  console.log(newUmap);

  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(newUmap, null, 2)], {
    type: "text/plain"
  }));
  a.setAttribute("download", "map.umap");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);


	//$("#FeatureList").hide();
	//$("#upload").show();
}

// La funzione risponde al tasto "Chiudi il file".
// Gestisce l'interfaccia chiudendo l'interfaccia di editing e
// reinizializza la variabile "geojson" 
function closeFile() {
	document.getElementById("FeatureList").style.display="none";
	document.getElementById("FeaturesTable").replaceChildren();
	document.getElementById("upload").style.display="block";
	document.getElementById("file").value = "";
	geojson = {};
}

// La funzione risponde al tasto "Modifica" relativo ad una feature
// ed apre una schermata complessa in cui sono rappresentati i campi
// presenti e non necessari rispetto al form, e quelli che sono invece
// necessari rispetto al form. Per i primi propone un tasto per la
// rimozione, per gli altri una interfaccia per l'editing. Le intefacce
// di editing dipendono dal tipo di campo: numerico (double), stringa
// (string), o a valori guidati (stringcombo).
function editFeature (featureIndex) {
  typeName = geojson.features[featureIndex].properties.ulsp_type;
  console.log(`${featureIndex} + ${typeName}`);
  console.log(geojson);
  let properties = formatDescriptions.find(frm => frm.formname === typeName);
//  let properties = formats.format(geojson.features[featureIndex].properties.ulsp_type);
console.log(properties);
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
  document.getElementById("FeatureEditor").style.display = "block";
    
// Genera l'elenco degli attributi da rimuovere, non contenuti nel database Underlandscape    
  let ulspAttributes = properties.formitems.map(i => i.key);
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
  });
// Genera l'elenco editabile dei campi editabili, evidenziando errori
  properties.formitems.forEach( (value,index,array) =>
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
  document.getElementById("FeatureList").style.display = "none";
//		document.getElementById("upload").style.display="block";
}

function closeEdit() {
// Disabilita il pannello di feature edit
  document.getElementById("FeatureEditor").style.display="none";
  document.getElementById("PropertiesList").replaceChildren();
  document.getElementById("WrongAttributes").replaceChildren();
// Abilita il pannello di scelta della feature
  document.getElementById("FeatureList").style.display="block";
}

