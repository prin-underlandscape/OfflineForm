var geojson = {
	      "type": "FeatureCollection",
        "properties": {
          "Nome": "",
          "Descrizione": "",
          "umapKey": ""},
	      "features": []
	    };
var umap = {};
var inputType = ""; // geojson, umap, qrcode
var filename; // (without extension)

// La funzione risponde alla scelta del file in apertura della App
// e, a caricamento avvenuto, chiama la funzione processFile
function fileUpload (event) {
	//event.preventDefault(); // Evita che venga ricaricato il form
	if (!file.value.length) return; // Annulla se file vuoto (prudente)
  [filename, inputType] = file.value.split('.');
  filename = filename.split("\\").pop();
	var reader = new FileReader();
	reader.onload = (event) => {
    document.getElementById("info").style.display="none";
    switch (inputType) {
      case "geojson":
        var data = JSON.parse(event.target.result);
// Backward compatibility with FeatureCollections without properties
// Does not override if already set (keeps first value)
        if ( 'properties' in data ) {
          if ( ( ! ( 'Nome' in geojson.properties ) ) || ( geojson.properties.Nome === '' ) ) {
            geojson.properties.Nome = ( 'Nome' in data.properties ) ? data.properties.Nome : filename;
          }
          if ( ( ! ( 'Descrizione' in geojson.properties ) ) || ( geojson.properties.Descrizione === '' ) ) {
            geojson.properties.Descrizione = ( 'Descrizione' in data.properties ) ? data.properties.Descrizione : '';
          }
          if ( ( ! ( 'umapKey' in geojson.properties ) ) || ( geojson.properties.umapKey === '' ) ) {
            geojson.properties.umapKey = ( 'umapKey' in data.properties ) ? data.properties.umapKey : '';
          }
        } 
        else
          geojson.properties = {'Nome': '','Descrizione': '','umapKey': ''}
// Join FeatureCollections
        data.features.map(f => geojson.features.push(f));
        processFile();
        break;
      case "umap":
        var data = JSON.parse(event.target.result);
		for ( l of data.layers ) {
          l.features.map(f => geojson.features.push(f));
		}
        processFile(); 
        break;
      case "qrcode":
        point = JSON.parse(event.target.result);
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
    document.getElementById("selectFile").innerHTML="Seleziona un altro file da incorporare";
  }
  reader.readAsText(document.getElementById("file").files[0]);
// Gestisce la visualizzazione dei file caricati  
  document.getElementById("FileList").style.display="block";
  var item = document.createElement("LI");
  item.innerHTML=document.getElementById('file').files[0].name;
  document.getElementById('Files').appendChild(item);
  document.getElementById('file').value = "";
}

// Funzione di utilità: data una lista di properties costruisce l'etichetta
// per la lista delle features 
function featureName(fp) {
  if ( fp.ulsp_type ) {
    switch (fp.ulsp_type) {
      case "Sito":
        return `Sito ${fp.Sito} (${fp.Titolo})`;
        break;
      case "Percorso":
      case "POI":
      case "QRtag":
        return `${fp.Titolo}`;
        break;
    }
  } else {
    return `${fp.Titolo}`;
  };
}

function redrawFeaturesTable() {
  processFile();
}

// La funzione è invocata al termine del caricamento del file, nel caso
// in cui si stia elaborabdo un file geojson.
// Dell'evento viene utilizzato il contenuto del file (result),
// caricato nella variabile globale "geojson".
// Viene visualizzata una tabella per ciascuna delle feature
// contenuta nella variabile "geojson, che può essere di vari tipi
// (ora Sito, Percorso, e Foto). Poi un menu a tendina per
// indicare/modificare il tipo, un bottone per la modifica della
// feature guidata dal formato, ed uno per la rimozione della feature
function processFile () {
// serve in caso di merge
  document.getElementById("FeaturesTable").replaceChildren();
// Disabilita il pannello di upload
//  document.getElementById("upload").style.display="none";
// Abilita il pannello di scelta della feature
  document.getElementById("FeatureList").style.display="block";
  
//  console.log(geojson)

// Verifica se il valore di input dei tre box è già definito (in caso di merge
// è possibile e si conserva quello del primo file caricato) altrimenti
// controlla se l'attributo è già definito nel geojson di partenza. Se lo è, lo
// carica come valore del textbox corrispondente. In caso contrario, e solo nel
// caso del "Nome", imposta il nome del file come nome della collezione.
//console.log(document.getElementById('FeatureCollectionName').value)
  if ( document.getElementById('FeatureCollectionName').value === "" ) {
    if ( 'Nome' in geojson.properties && geojson.properties.Nome !== "") {
      document.getElementById('FeatureCollectionName').value=geojson.properties.Nome;
    } else {
      document.getElementById('FeatureCollectionName').value=filename;
    }
  }
  if ( document.getElementById('FeatureCollectionDescription').value === "" ) {
    if ( geojson.properties.Descrizione ) {
      document.getElementById('FeatureCollectionDescription').value=geojson.properties.Descrizione;
    }
  }
  if ( document.getElementById('FeatureCollectionUmapKey').value === "" ) {
    if ( geojson.properties.umapKey ) {
      document.getElementById('FeatureCollectionUmapKey').value=geojson.properties.umapKey;
    }
  }
  
  let featuresTable=document.getElementById("FeaturesTable");
  
  geojson.features.forEach( (feature, featureIndex) => {
    let featureTools = document.createElement("DIV"); 
    let name = document.createElement("LABEL");
    let selectType = document.createElement("SELECT");
    let editButton = document.createElement("BUTTON");
    let extractButton = document.createElement("BUTTON");
    let deleteButton = document.createElement("BUTTON");
    
    let row = featuresTable.appendChild(document.createElement("thead"));
    row.appendChild(document.createElement("td")).appendChild(name);
    row.appendChild(document.createElement("td")).appendChild(selectType);
    row.appendChild(document.createElement("td")).appendChild(editButton);
    row.appendChild(document.createElement("td")).appendChild(extractButton);
    row.appendChild(document.createElement("td")).appendChild(deleteButton);

//    console.log(geojson.features[featureIndex]);
    let fs = formatDescriptions.map(f => f.formname);
    fs.unshift("Non definito");
    let typeIndex = 0;

    name.innerHTML = featureName(feature.properties);
    if ( feature.properties.ulsp_type ) {
      typeIndex = fs.indexOf(feature.properties.ulsp_type);
    } else {
      typeIndex.selectedType = 0;
    };
    
// Gestione della tendina di scelta del tipo del file 
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
      redrawFeaturesTable(); // Aggiorna la visualizzazione
      document.activeElement.blur();
    });

// Gestione del bottone di modifica
    editButton.innerHTML = "Modifica";
    if (typeIndex === 0) {
      editButton.disabled=true;
    }
    editButton.addEventListener( "click", (event) => {
//      console.log(geojson.features[featureIndex].properties.ulsp_type);
//     editFeature(featureIndex, geojson.features[featureIndex].properties.ulsp_type);
      editFeature(featureIndex);
    })
  
// Gestione del bottone di rimozione
    deleteButton.innerHTML = "Rimuovi";
    deleteButton.addEventListener( "click", (event) => {
      geojson.features.splice(featureIndex, 1);  // Rimuove la feature dal buffer (geojson)
      redrawFeaturesTable(); // Aggiorna la visualizzazione
      console.log(geojson.features);
    })
    
// Gestione del bottone di estrazione
    extractButton.innerHTML = "Estrai";
    extractButton.addEventListener( "click", (event) => {
      geojson.features = [ geojson.features[featureIndex] ];  // Rimuove tutte le altre feature dal buffer (geojson)
      redrawFeaturesTable(); // Aggiorna la visualizzazione
//      console.log(geojson.features);
    })
  })
  //console.log(geojson);
}

// La funzione risponde al tasto "Salva un file geoJSON"
// Funziona creando un elemento "anchor" con la modalità download
// di HTML5. Il link corrisponde ad un blob che contiene il geojson
// convertito in JSON
function saveGeoJSON() {
  geojson.properties.Nome = document.getElementById('FeatureCollectionName').value;
  geojson.properties.Descrizione = document.getElementById('FeatureCollectionDescription').value;
  geojson.properties.umapKey = document.getElementById('FeatureCollectionUmapKey').value;
	const a = document.createElement("a");
//	console.log(geojson);
	a.href = URL.createObjectURL(
      new Blob([JSON.stringify(geojson, null, 2)], {type: "text/plain"}
   ));
	a.setAttribute("download", geojson.properties.Nome+".geojson");
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}



// La funzione risponde al tasto "Chiudi il file".
// Gestisce l'interfaccia chiudendo l'interfaccia di editing e
// reinizializza la variabile "geojson" 
function closeFile() {
	document.getElementById("FeatureList").style.display="none";
	document.getElementById("FeaturesTable").replaceChildren();
	document.getElementById("FileList").style.display="none";
	document.getElementById("Files").replaceChildren();
	document.getElementById("upload").style.display="block";
	document.getElementById("file").value = "";
  document.getElementById('FeatureCollectionName').value="";
  document.getElementById('FeatureCollectionDescription').value="";
  document.getElementById('FeatureCollectionUmapKey').value="";
  geojson = {
    "type": "FeatureCollection",
    "properties": {
      "Nome": "",
      "Descrizione": "",
      "umapKey": ""},
      "features": []
  };
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
//  console.log(`${featureIndex} + ${typeName}`);
//  console.log(geojson);
  let properties = formatDescriptions.find(frm => frm.formname === typeName);
//  console.log(properties);
  let propertiesList=document.getElementById("PropertiesList");
  let wrongAttributes=document.getElementById("WrongAttributes");

  function editDouble(present,value) {
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

  function editString(present,value) {
    let propertyValue = document.createElement("TEXTAREA");
    propertyValue.rows = 1 + Math.floor(present.length/40);
    propertyValue.cols = 40;
    if ( value.value ) {
//      console.log(value.value);
      propertyValue.maxLength = value.value;
      propertyValue.placeholder = `Lunghezza massima: ${value.value} caratteri`
    }
    propertyValue.overflow = "scroll";
    propertyValue.style = "vertical-align:middle"
    propertyValue.value = present;
    propertyValue.id = value.key;
    propertyValue.addEventListener("change", (propertyEvent) => {
      let fieldName = propertyEvent.target.id;
      geojson.features[featureIndex].properties[fieldName] = propertyEvent.target.value;
// Ricostruisce l'intestazione della riga nell'elenco delle features (utile solo per le stringhe)
      document.getElementById("FeaturesTable").childNodes[featureIndex].getElementsByTagName('label')[0].innerHTML =
	    featureName(geojson.features[featureIndex].properties);    
      document.activeElement.blur();
    });
    if ( present === "" ) propertyValue.style.backgroundColor = "yellow";
    propertiesList.appendChild(propertyValue);
  }
  
  function editStringcombo(present,value) {
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
  
/* Crea un selettore multiplo
 * Parametri:
 * present: il valore del selettore nel file in input
 * value: la descrizione della proprietà in format.js
*/
  function editStringmulti(present,value) {
    let legal=true;
    let propertyValue = document.createElement("SELECT");
// Imposta la selezione multipla
    propertyValue.setAttribute("multiple",true)
    propertyValue.setAttribute("size",4) 
    propertyValue.setAttribute("style","vertical-align: top")
// Visualizza i valori delle opzioni e riporta la selezione precedente
    validLabels = value.values.items.map(i => i.item);
//    console.log(validLabels);
    validLabels.forEach( (vl,i) => { 
      o = document.createElement("option");
      o.label = vl;
      propertyValue.add(o);
      if ( present.includes(vl) ) {
        o.setAttribute("style","font-style: italic;")
        o.selected = true
      } else {
        o.setAttribute("style","font-style: normal;")
        o.selected = false
      }
    });
    console.log(Array.from(propertyValue.querySelectorAll("option:checked"), e => e.label))
// Importa il nome del campo (es. "Titolo")
    propertyValue.id = value.key;
// Acquisisce i valori selezionati ad ogni modifica
    propertyValue.addEventListener("change", (propertyEvent) => {
      let fieldName = propertyEvent.target.id;
      geojson.features[featureIndex].properties[fieldName] = []
      console.log(Array.from(propertyValue.querySelectorAll("option:checked"), e => e.label))
      for ( opt of propertyValue.options ) {
//        console.log(opt)
        if ( opt.selected ) {
          opt.setAttribute("style","font-style: italic;")
          geojson.features[featureIndex].properties[fieldName].push(opt.label)
        } else {
         opt.setAttribute("style","font-style: normal;")
       }
      }
//      console.log(Array.from(propertyValue.querySelectorAll("option:checked"),e=>e.value));
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
  
//  geojson.features[event.target.id].properties		
//  console.log(featureIndex);
// Abilita il pannello di editing delle proprietà
  document.getElementById("FeatureEditor").style.display = "block";
    
  let ulspAttributes = properties.formitems.map(i => i.key);
//  console.log(geojson.features[featureIndex].properties);
// Genera l'elenco degli attributi da rimuovere, non contenuti nel formato Underlandscape 
  wrongAttributes.style.display = "none";   
  let wrongAttributesTitle = document.createElement('H4');
  wrongAttributesTitle.innerHTML='Queste proprietà non sono definite nel formato Underlandscape: andrebbero rimossi';
  wrongAttributes.appendChild(wrongAttributesTitle);
  Object.keys(geojson.features[featureIndex].properties).forEach( (inputAttr, index) =>
    {
      if ( ! ulspAttributes.find( ulspAttr => inputAttr === ulspAttr) )  {
        wrongAttributes.style.display = "block"; // Visualizza il div solo se c'è almeno un attributo estraneo   
        let keyvalue = document.createElement("LABEL");
        keyvalue.style.color = "red";
        keyvalue.style.fontSize = "x-small ";
        val = JSON.stringify(geojson.features[featureIndex].properties[inputAttr]);
        keyvalue.innerHTML = `\t${inputAttr}: ${val}`;
        let removeButton = document.createElement("BUTTON");
        removeButton.setAttribute('style', 'width:auto')
        removeButton.innerHTML = "Rimuovi";
        removeButton.id = inputAttr;
        removeButton.addEventListener("click", (event) => {
  //        console.log(geojson.features[featureIndex].properties[event.target.id]);
          delete geojson.features[featureIndex].properties[event.target.id];
  //        console.log(document.getElementById(inputAttr));
          document.getElementById(inputAttr).parentNode.style.visibility = "Hidden";
          document.getElementById(inputAttr).parentNode.style.display = "none";
        })
        let wrongAttribute = document.createElement("DIV");
        let parent = wrongAttributes.appendChild(wrongAttribute);
        parent.appendChild(keyvalue);
        parent.appendChild(removeButton);
        parent.appendChild(document.createElement("br"));
      }
    });
// Genera l'elenco editabile dei campi editabili, evidenziando errori
  let editableAttributesTitle = document.createElement('H4');
  editableAttributesTitle.innerHTML='Queste proprietà sono definite nel formato Underlandscape e possono essere modificati';
  propertiesList.appendChild(editableAttributesTitle);
// Per ogni proprietà della feature genera una riga con una etichetta ed un box di editing
  properties.formitems.forEach( property =>
  {
    if ( property.key !== "ulsp_type" ) {
      let nome = document.createTextNode(`${property.key}: `);
      propertiesList.appendChild(nome);
      if ( ! Object.hasOwn(geojson.features[featureIndex].properties,property.key) ) {
// Crea la proprietà se non esistente nel geojson (non sono sicuro che sia una buona idea)
		    geojson.features[featureIndex].properties[property.key] = "";
	    }
      let present = geojson.features[featureIndex].properties[property.key];
      switch (property.type) {
        case "string":
        case "date": 
        case "time": 
        case "pictures":
          editString(present,property);
          break;
        case "stringcombo": 
          editStringcombo(present,property);
          break;
        case "stringmulti": 
          editStringmulti(present,property);
          break;
        case "double": 
        case "integer": 
          editDouble(present,property);
          propertiesList.appendChild(document.createTextNode(property.unit));
          break;
        default:
          editString("nil",property);
          break;
      }
    propertiesList.appendChild(document.createElement("br"));
  }
  });
  document.getElementById("FeatureList").style.display = "none";
  document.getElementById("FileList").style.display = "none";
  document.getElementById("upload").style.display = "none";

}

function closeEdit() {
// Disabilita il pannello di feature edit
  document.getElementById("FeatureEditor").style.display="none";
  document.getElementById("PropertiesList").replaceChildren();
  document.getElementById("WrongAttributes").replaceChildren();
// Abilita il pannello di scelta della feature
  document.getElementById("FeatureList").style.display="block";
  document.getElementById("FileList").style.display = "block";
  document.getElementById("upload").style.display = "block";
  
  console.log(geojson);
}

