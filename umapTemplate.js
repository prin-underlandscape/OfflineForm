// umap template derived from a umap download
// assigning the json to a variable and removing
// from the template the features, the map uri
// and the layers id numbers
const umapTemplate = {
    "type": "umap",
    "geometry": {
        "type": "Point",
        "coordinates": [
            10.1,
            44.14
        ]
    },
    "properties": {
        "name": "underlandscape-template",
        "zoom": 15,
        "easing": false,
        "licence": "",
        "miniMap": false,
        "overlay": {

        },
        "slideshow": {

        },
        "tilelayer": {
            "tms": false,
            "name": "OSM OpenTopoMap",
            "maxZoom": 20,
            "minZoom": 1,
            "attribution": "Kartendaten: © [[https://openstreetmap.org/copyright|OpenStreetMap]]-Mitwirkende, [[http://viewfinderpanoramas.org/|SRTM]] | Kartendarstellung: © [[https://opentopomap.org/|OpenTopoMap]] ([[https://creativecommons.org/licenses/by-sa/3.0/|CC-BY-SA]])",
            "url_template": "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
        },
        "captionBar": false,
        "description": "",
        "limitBounds": {

        },
        "moreControl": true,
        "zoomControl": true,
        "captionMenus": true,
        "embedControl": true,
        "scaleControl": true,
        "searchControl": true,
        "scrollWheelZoom": true,
        "datalayersControl": true,
        "fullscreenControl": true,
        "displayPopupFooter": false,
        "permanentCreditBackground": true
    },
    "layers": [
        {
            "type": "FeatureCollection",
            "features": [ ],
            "_umap_options": {
                "name": "Percorso",
                "displayOnLoad": true,
                "browsable": true,
                "remoteData": {

                },
                "color": "Brown",
                "popupShape": "Panel",
                "popupTemplate": "Table",
                "popupContentTemplate": `
# {Titolo} 
##   ( [[https://sites.google.com/view/prin-underlandscape/home-page/attivit%C3%A0-sul-campo/{Link}|link]]) 
{Descrizione}
--- 
**Lunghezza** (km): {Lunghezza}
**Durata**: {Durata}
**Dislivello in salita** (m): {Dislivello in salita}
**Dislivello in discesa** (m): {Dislivello in discesa} 
--- 
Registrato il {Data} alle {Ora} 
con {Strumento} 
da {Autore}`
            }
        },
        {
            "type": "FeatureCollection",
            "features": [ ],
            "_umap_options": {
                "name": "POI",
                "displayOnLoad": true,
                "browsable": true,
                "remoteData": {

                },
                "color": "Brown",
                "iconClass": "Ball",
                "popupShape": "Panel",
                "popupTemplate": "Table",
                "popupContentTemplate": `
# {Titolo} 
{{{Foto}|300}} 
##   ( [[https://sites.google.com/view/prin-underlandscape/home-page/attivit%C3%A0-sul-campo/{Link}|link]]) 
{Descrizione}
**Altitudine** (m): {Altitudine}
--- 
Scattata il {Data} alle {Ora} 
con {Strumento} 
da {Autore}`
           }
        },
        {
            "type": "FeatureCollection",
            "features": [ ],
            "_umap_options": {
                "name": "Sito",
                "displayOnLoad": true,
                "browsable": true,
                "remoteData": {

                },
                "color": "DarkBlue",
                "iconClass": "Ball",
                "popupShape": "Panel",
                "popupTemplate": "Table",
                "popupContentTemplate": `
# SITO {Sito}
{{{Foto}|300}}
## {Titolo} ( [[https://sites.google.com/view/prin-underlandscape/{Link}|link]])
{Descrizione}
---
**Tipologia**: {Tipologia sito}
**Definizione**: {Definizione}
**Cronologia iniziale**: {Cronologia iniziale}
**Cronologia finale**: {Cronologia finale}
**Reperti ceramici**: {Reperti ceramici}
**Reperti geologici**: {Reperti geologici}
**Reperti organici**: {Reperti organici}
**Altri manufatti**: {Altri manufatti}
---
**Altitudine** (m): {Altitudine}
**Sicurezza**: {Sicurezza}
**Accessibilità**: {Accessibilità}
**Copertura rete mobile**: {Copertura rete mobile}
**Copertura GPS**: {Copertura GPS}
---
**Provincia**: {Provincia}
**Comune**: {Comune}
**Toponimo**: {Toponimo}
**Microtoponimo**: {Microtoponimo}
**Strade d'accesso**: {Strade d'accesso}
**Altra localizzazione**: {Altri elementi di localizzazione}
---
**Prima visita**: {Data} {Ora}
**Strumento**: {Strumento}
[[https://sites.google.com/view/prin-underlandscape/home-page/bibliografie/{Sito}|bibliografia]]`
            }
        }
    ]
}
