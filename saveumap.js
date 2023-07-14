function saveUmap() {

	let umap = {
    "type": "umap",
    "uri": "https://umap.openstreetmap.fr/it/map/underlandscape-template_931888#13/44.1398/10.1003",
    "properties": {
      "easing": false,
      "embedControl": true,
      "fullscreenControl": true,
      "searchControl": true,
      "datalayersControl": true,
      "zoomControl": true,
      "permanentCreditBackground": true,
      "slideshow": {

      },
      "captionMenus": true,
      "captionBar": false,
      "limitBounds": {

      },
      "overlay": {

      },
      "tilelayer": {
        "tms": false,
        "name": "OSM OpenTopoMap",
        "maxZoom": 20,
        "minZoom": 1,
        "attribution": "Kartendaten: © [[https://openstreetmap.org/copyright|OpenStreetMap]]-Mitwirkende, [[http://viewfinderpanoramas.org/|SRTM]] | Kartendarstellung: © [[https://opentopomap.org/|OpenTopoMap]] ([[https://creativecommons.org/licenses/by-sa/3.0/|CC-BY-SA]])",
        "url_template": "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
      },
      "licence": "",
      "description": "",
      "name": "underlandscape-template",
      "displayPopupFooter": false,
      "miniMap": false,
      "moreControl": true,
      "scaleControl": true,
      "scrollWheelZoom": true,
      "zoom": 13
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
          10.1,
          44.14
      ]
    },
    "layers": [ 
      {
        "_umap_options": {
          "name": "Percorso",
          "displayOnLoad": true,
          "browsable": true,
          "remoteData": { },
          "id": 2846146
        },
        "type": "FeatureCollection",
        "features": [ ]
      },
      {
        "_umap_options": {
          "name": "Foto",
          "displayOnLoad": true,
          "browsable": true,
          "id": 2846167,
          "remoteData": { },
          "color": "Brown",
          "iconClass": "Ball",
          "popupShape": "Panel",
          "popupTemplate": "Table",
          "popupContentTemplate": "# {name}\n{{https://drive.google.com/uc?id={Foto}|300}}\n##  ( [[https://sites.google.com/view/prin-underlandscape/home-page/attivit%C3%A0-sul-campo/{Link}|link]])\n{description}\n---\nScattata il {date_created}\nda {autore}\ncon {strumento}"
        },
        "type": "FeatureCollection",
        "features": [ ]
      },
      {
        "_umap_options": {
          "name": "Sito",
          "displayOnLoad": true,
          "browsable": true,
          "id": 2846167,
          "remoteData": { },
          "color": "Blue",
          "iconClass": "Drop",
          "popupShape": "Panel",
          "popupTemplate": "Table",
          "popupContentTemplate": `
# SITO {Sito}
{{https://drive.google.com/uc?id={Foto}|300}}
## {name} ( [[https://sites.google.com/view/prin-underlandscape/home-page/attivit%C3%A0-sul-campo/{Link}|link]])
{description}
---
**Tipologia** {Tipologia}
**Definizione**: {Definizione}
**Cronologia iniziale**: {Cronologia iniziale}
**Cronologia finale**: {Cronologia finale}
**Reperti ceramici**: {Reperti ceramici}
**Reperti geologici**: {Reperti geologici}
**Reperti biologici**: {Reperti biologici}
**Altri manufatti**: {Altri manufatti}
---
**Dimensioni**: {Dimensioni}
**Altitudine**: {Altitudine}
**Orientamento**: {Orientamento}
**Sicurezza**: {Sicurezza}
**Accessibilità**: {Accessibilita}
**Copertura rete mobile**: {Copertura rete mobile}
**Copertura GPS**: {Copertura GPS}
---
**Provincia**: {Provincia}
**Comune**: {Comune}
**Toponimo**: {Toponimo}
**Microtoponimo**: {Microtoponimo}
**Strada di accesso**: {Strada accesso}
**Altra localizzazione**: {Altra localizzazione}
---
**Prima visita**: {date} {time}
[[https://sites.google.com/view/prin-underlandscape/home-page/bibliografie/{Sito}|bibliografia]]
`
        },
        "type": "FeatureCollection",
        "features": [ ]
      }

    ]
  };

  let allowedTypes = umap.layers.map( l => l._umap_options.name );
  console.log(allowedTypes);
//  percorsi.features.push(lxpercorso);
//  foto.features.push(lxfoto);
//  siti.features.push(lxsito);

  geojson.features.map( feature => {
    console.log(feature.properties.ulsp_type);
    if ( allowedTypes.includes(feature.properties.ulsp_type) ) {
      feature.properties._umap_options = {};
      feature.properties._umap_options.popupTemplate = "Default";
      let layer = umap.layers.find(l => l._umap_options.name === feature.properties.ulsp_type);
      layer.features.push(feature);
    }
  });

  console.log(geojson);

	const a = document.createElement("a");
	a.href = URL.createObjectURL(new Blob([JSON.stringify(umap, null, 2)], {
	type: "text/plain"
	}));
	a.setAttribute("download", "map.umap");
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);


	//$("#FeatureList").hide();
	//$("#upload").show();
}
