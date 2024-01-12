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
        "zoom": 13,
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
                "displayOnLoad": true,
                "browsable": true,
                "remoteData": {

                },
                "name": "percorso"
            }
        },
        {
            "type": "FeatureCollection",
            "features": [ ],
            "_umap_options": {
                "displayOnLoad": true,
                "browsable": true,
                "name": "POI",
                "remoteData": {

                },
                "color": "Brown",
                "iconClass": "Ball",
                "popupShape": "Panel",
                "popupTemplate": "Table",
                "popupContentTemplate": "# {name}\n{{https://drive.google.com/uc?id={Foto}|300}}\n##  ( [[https://sites.google.com/view/prin-underlandscape/home-page/attivit%C3%A0-sul-campo/{Link}|link]])\n{description}\n---\nScattata il {date_created}\nda {autore}\ncon {strumento}"
            }
        },
        {
            "type": "FeatureCollection",
            "features": [ ],
            "_umap_options": {
                "displayOnLoad": true,
                "browsable": true,
                "remoteData": {

                },
                "popupShape": "Panel",
                "popupTemplate": "Table",
                "popupContentTemplate": "# SITO {Sito}\n{{{Foto}|300}}\n## {name} ( [[https://sites.google.com/view/prin-underlandscape/{Link}|link]])\n{Descrizione}\n---\n**Tipologia**: {Tipologia sito}\n**Definizione**: {Definizione}\n**Cronologia iniziale**: {Cronologia iniziale}\n**Cronologia finale**: {Cronologia finale}\n**Reperti ceramici**: {Reperti ceramici}\n**Reperti geologici**: {Reperti geologici}\n**Reperti organici**: {Reperti organici}\n**Altri manufatti**: {Altri manufatti}\n---\n**Altitudine**: {Altitudine}\n**Sicurezza**: {Sicurezza}\n**Accessibilità**: {Accessibilità}\n**Copertura rete mobile**: {Copertura rete mobile}\n**Copertura GPS**: {Copertura GPS}\n---\n**Provincia**: {Provincia}\n**Comune**: {Comune}\n**Toponimo**: {Toponimo}\n**Microtoponimo**: {Microtoponimo}\n**Strade d'accesso**: {Strade d'accesso}\n**Altra localizzazione**: {Altri elementi di localizzazione}\n---\n**Prima visita**: {Data} {Ora}\n[[https://sites.google.com/view/prin-underlandscape/home-page/bibliografie/{Sito}|bibliografia]]",
                "name": "Sito"
            }
        }
    ]
}
