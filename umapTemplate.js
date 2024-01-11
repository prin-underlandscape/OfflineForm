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
                "popupContentTemplate": "# SITO {07_Sito}\n{{https://drive.google.com/uc?id={27_Foto}|300}}\n## {01_name} ( [[https://sites.google.com/view/prin-underlandscape/home-page/attivit%C3%A0-sul-campo/{28_Link}|link]])\n{02_description}\n---\n**Tipologia** {15_Tipologia}\n**Definizione**: {16_Definizione}\n**Cronologia iniziale**: {17_CronologiaIniziale}\n**Cronologia finale**: {18_CronologiaFinale}\n**Reperti ceramici**: {19_RepertiCeramici}\n**Reperti geologici**: {20_RepertiGeologici}\n**Reperti biologici**: {21_RepertiBiologici}\n**Altri manufatti**: {22_AltriManufatti}\n---\n**Dimensioni**: {05_Dimensioni}\n**Altitudine**: {12_Altitudine}\n**Orientamento**: {06_Orientamento}\n**Sicurezza**: {23_Sicurezza}\n**Accessibilità**: {24_Accessibilita}\n**Copertura rete mobile**: {25_CoperturaReteMobile}\n**Copertura GPS**: {26_CoperturaGPS}\n---\n**Provincia**: {08_Provincia}\n**Comune**: {09_Comune}\n**Toponimo**: {10_Toponimo}\n**Microtoponimo**: {11_Microtoponimo}\n**Strada di accesso**: {13_StradaAccesso}\n**Altra localizzazione**: {14_AltraLocalizzazione}\n---\n**Prima visita**: {03_date} {04_time}\n[[https://sites.google.com/view/prin-underlandscape/home-page/bibliografie/{07_Sito}|bibliografia]]",
                "name": "Sito"
            }
        }
    ]
}
