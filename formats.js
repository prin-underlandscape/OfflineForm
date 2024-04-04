const tagList = 
[
  {
    "item": "",
    "iconURL": "/uploads/pictogram/hotel.svg"
  },
  {
    "item": "Albergo",
    "iconURL": "/uploads/pictogram/hotel.svg"
  },
  {
    "item": "Ristorante",
    "iconURL": "/uploads/pictogram/restaurant.svg"
  },
  {
    "item": "Bar",
    "iconURL": "/uploads/pictogram/cafe.svg"
  },
  {
    "item": "Parco giochi",
    "iconURL": "/uploads/pictogram/playground.svg"
  },
  {
    "item": "Monumento",
    "iconURL": "/uploads/pictogram/monument.svg"
  },
  {
    "item": "Parcheggio",
    "iconURL": "/uploads/pictogram/parking-car.svg"
  },
  {
    "item": "Segnalazione",
    "iconURL": "/uploads/pictogram/guide-post.svg"
  },
  {
    "item": "Fermata Bus",
    "iconURL": "/uploads/pictogram/bus-stop.svg"
  }
]


const formatDescriptions = 
// To define/modify the description of the formats edit the lines below
// and check they are legal JSON at https://jsonlint.com/. Do not touch
// the first line of this file
[
  {
    "formname": "Sito",
    "formitems": [
      {
        "key": "Sito",
        "value": "",
        "islabel": "true",
        "type": "string",
        "mandatory": "yes"
      },
      {
        "key": "ulsp_type",
        "value": "",
        "type": "string"
      },
      {
        "key": "Titolo",
        "value": "",
        "type": "string"
      },
      {
        "key": "Provincia",
        "value": "",
        "type": "string"
      },
      {
        "key": "Comune",
        "value": "",
        "type": "string"
      },
      {
        "key": "Toponimo",
        "value": "",
        "type": "string"
      },
      {
        "key": "Microtoponimo",
        "value": "",
        "type": "string"
      },
      {
        "key": "Altitudine",
        "value": "",
        "type": "double",
        "unit": "m"
      },
      {
        "key": "Strade d'accesso",
        "value": "",
        "type": "string"
      },
      {
        "key": "Altri elementi di localizzazione",
        "value": "",
        "type": "string"
      },
      {
        "key": "Tipologia sito",
        "values": {
          "items": [
            {
              "item": ""
            },
            {
              "item": "Frequentazione antropica"
            },
            {
              "item": "Insediamento civile"
            },
            {
              "item": "Insediamento ecclesiastico"
            },
            {
              "item": "Insediamento fortificato"
            },
            {
              "item": "Infrastruttura"
            },
            {
              "item": "Struttura devozionale"
            },
            {
              "item": "Insediamento produttivo"
            },
            {
              "item": "Area funeraria"
            },
            {
              "item": "ND"
            }
          ]
        },
        "value": "",
        "type": "stringcombo"
      },
      {
        "key": "Definizione",
        "values": {
          "items": [
            {
              "item": ""
            },
            {
              "item": "Corpo di fabbrica"
            },
            {
              "item": "Complesso architettonico composto da più corpi di fabbrica"
            },
            {
              "item": "Struttura muraura"
            },
            {
              "item": "Grotta"
            },
            {
              "item": "Riparo sotto roccia"
            },
            {
              "item": "Struttura produttiva"
            },
            {
              "item": "Viabilità"
            },
            {
              "item": "Elemento funzionale"
            },
            {
              "item": "Elemento decorativo"
            },
            {
              "item": "Elemento devozionale"
            },
            {
              "item": "Elemento erratico"
            },
            {
              "item": "Area di dispersione di materiale"
            },
            {
              "item": "Area di concentrazione di materiale"
            },
            {
              "item": "Anomalia morfologica"
            }
          ]
        },
        "value": "",
        "type": "stringcombo"
      },
      {
        "key": "Descrizione",
        "value": "",
        "type": "string"
      },
      {
        "key": "Cronologia iniziale",
        "values": {
          "items": [
            {
              "item": ""
            },
            {
              "item": "Preistoria (2.5 milioni-3000 anni fa)"
            },
            {
              "item": "Paleolitico (2.5 milioni-11.000 anni fa)"
            },
            {
              "item": "Paleolitico inferiore (2.5 milioni-120.000 anni fa)"
            },
            {
              "item": "Paleolitico medio (120.000-36.000 anni fa)"
            },
            {
              "item": "Paleolitico superiore (36.000-11.000 anni fa)"
            },
            {
              "item": "Neolitico (11.000-3500 a.C.)"
            },
            {
              "item": "Eneolitico (3500-2300 a.C.)"
            },
            {
              "item": "Protostoria (2300-720 a.C.)"
            },
            {
              "item": "Età del bronzo (2300-950 a.C.)"
            },
            {
              "item": "Età del ferro (950-720 a.C.)"
            },
            {
              "item": "Civiltà preromane (720- 89 a.C.)"
            },
            {
              "item": "Età romana repubblicana (509-27 a.C.)"
            },
            {
              "item": "Età romana imperiale (27 a.C.- 476 d.C.)"
            },
            {
              "item": "Età tardoantica (476-700 d.C.)"
            },
            {
              "item": "Alto medioevo (700-1000 d.C.)"
            },
            {
              "item": "Basso medioevo (1000-1492 d.C.)"
            },
            {
              "item": "Età moderna (1492-1789 d.C.)"
            },
            {
              "item": "Prima età moderna (1492-1600 d.C.)"
            },
    {
              "item": "Tarda età moderna (1600-1789 d.C.)"
            },
    {
              "item": "Età contemporanea (1789-2000 d.C.)"
            },
            {
              "item": "Età subattuale (2000-oggi)"
            },
    {
              "item": "ND (Non determinata)"
            }
          ]
        },
        "value": "",
        "type": "stringcombo"
      },
      {
        "key": "Cronologia finale",
        "values": {
          "items": [
            {
              "item": ""
            },
            {
              "item": "Preistoria (2.5 milioni-3000 anni fa)"
            },
            {
              "item": "Paleolitico (2.5 milioni-11.000 anni fa)"
            },
            {
              "item": "Paleolitico inferiore (2.5 milioni-120.000 anni fa)"
            },
            {
              "item": "Paleolitico medio (120.000-36.000 anni fa)"
            },
            {
              "item": "Paleolitico superiore (36.000-11.000 anni fa)"
            },
            {
              "item": "Neolitico (11.000-3500 a.C.)"
            },
            {
              "item": "Eneolitico (3500-2300 a.C.)"
            },
            {
              "item": "Protostoria (2300-720 a.C.)"
            },
            {
              "item": "Età del bronzo (2300-950 a.C.)"
            },
            {
              "item": "Età del ferro (950-720 a.C.)"
            },
            {
              "item": "Civiltà preromane (720- 89 a.C.)"
            },
            {
              "item": "Età romana repubblicana (509-27 a.C.)"
            },
            {
              "item": "Età romana imperiale (27 a.C.- 476 d.C.)"
            },
            {
              "item": "Età tardoantica (476-700 d.C.)"
            },
            {
              "item": "Alto medioevo (700-1000 d.C.)"
            },
            {
              "item": "Basso medioevo (1000-1492 d.C.)"
            },
            {
              "item": "Età moderna (1492-1789 d.C.)"
            },
            {
              "item": "Prima età moderna (1492-1600 d.C.)"
            },
    {
              "item": "Tarda età moderna (1600-1789 d.C.)"
            },
    {
              "item": "Età contemporanea (1789-2000 d.C.)"
            },
            {
              "item": "Età subattuale (2000-oggi)"
            },
    {
              "item": "ND (Non determinata)"
            }
          ]
        },
        "value": "",
        "type": "stringcombo"
      },
      {
        "key": "Reperti ceramici",
        "values": {
          "items": [
            {
              "item": ""
            },
            {
              "item": "SI"
            },
            {
              "item": "NO"
            }
          ]
        },
        "value": "",
        "type": "stringcombo"
      },
      {
        "key": "Reperti geologici",
        "values": {
          "items": [
            {
              "item": ""
            },
            {
              "item": "SI"
            },
            {
              "item": "NO"
            }
          ]
        },
        "value": "",
        "type": "stringcombo"
      },
      {
        "key": "Reperti organici",
        "values": {
          "items": [
            {
              "item": ""
            },
            {
              "item": "SI"
            },
            {
              "item": "NO"
            }
          ]
        },
        "value": "",
        "type": "stringcombo"
      },
      {
        "key": "Altri manufatti",
        "value": "",
        "type": "string"
      },
      {
        "key": "Sicurezza",
        "label": "Descrizione delle condizioni di fruizione del sito",
        "value": "",
        "type": "string"
      },
      {
        "key": "Accessibilità",
        "values": {
          "items": [
            {
              "item": ""
            },
            {
              "item": "Facile"
            },
            {
              "item": "Media difficoltà"
            },
            {
              "item": "Difficile"
            },
            {
              "item": "Non accessibile"
            }
          ]
        },
        "value": "",
        "type": "stringcombo"
      },
      {
        "key": "Copertura GPS",
        "values": {
          "items": [
            {
              "item": ""
            },
            {
              "item": "Completa"
            },
            {
              "item": "Parziale"
            },
            {
              "item": "Assente"
            }
          ]
        },
        "value": "",
        "type": "stringcombo"
      },
      {
        "key": "Copertura rete mobile",
        "values": {
          "items": [
            {
              "item": ""
            },
            {
              "item": "Completa"
            },
            {
              "item": "Parziale"
            },
            {
              "item": "Assente"
            }
          ]
        },
        "value": "",
        "type": "stringcombo"
      },
      {
        "key": "Foto",
        "label": "Foto",
        "value": "",
        "type": "string"
      },
      { "key": "Link",
		"label": "Link",
		"value": "",
		"type": "string"
	  },
      {
        "key": "Bibliografia",
        "value": "",
        "type": "string"
      },
      {
        "key": "Strumento",
        "value": "",
        "type": "string"
      },
      {
        "key": "Data",
        "value": "",
        "type": "date"
      },
      {
        "key": "Ora",
        "value": "",
        "type": "time"
      }
    ]
  },
  {
    "formname": "POI",
    "formitems": [
        {
          "key": "ulsp_type",
          "value": "",
          "type": "string"
        },
        {
          "key": "Titolo",
          "value": "",
          "type": "string"
        },
        {
          "key": "Foto",
          "value": "",
          "type": "string"
        },
        {
          "key": "Descrizione",
          "value": "",
          "type": "string"
        },
        {
          "key": "Altitudine",
          "value": "",
          "type": "integer",
          "unit": "m"
        },
        {
          "key": "Autore",
          "value": "",
          "type": "string"
        },
        {
          "key": "Strumento",
          "value": "",
          "type": "string"
        },
        {
          "key": "Data",
          "value": "",
          "type": "date"
        },
        {
          "key": "Ora",
          "value": "",
          "type": "time"
        },
        {
          "key": "Tag primario",
          "values": {
            "items": tagList
          },
          "value": "",
          "type": "stringcombo"
        },
        {
        "key": "Altri tag",
        "values": {
          "items": tagList
        },
        "value": "",
        "type": "stringmulti"
      },
      ]
},
{
      "formname": "Percorso",
      "formitems": [
          {
            "key": "ulsp_type",
            "value": "",
            "type": "string"
          },
          {
            "key": "Titolo",
            "value": "",
            "type": "string"
          },
          {
            "key": "Provincia",
            "value": "",
            "type": "string"
          },
          {
            "key": "Comune",
            "value": "",
            "type": "string"
          },
          {
            "key": "Punto d'accesso",
            "value": "",
            "type": "string"
          },
          {
            "key": "Foto accesso",
            "label": "Foto",
            "value": "",
            "type": "pictures"
          },
          {
            "key": "Descrizione",
            "value": "",
            "type": "string"
          },
          {
            "key": "Difficoltà",
            "values": {
              "items": [
                {
                  "item": ""
                },
                {
                  "item": "Facile"
                },
                {
                  "item": "Media difficoltà"
                },
                {
                  "item": "Difficile"
                }
              ]
            },
            "value": "",
            "type": "stringcombo"
          },
          {
            "key": "Lunghezza",
            "value": "",
            "type": "integer",
            "unit": "km"
          },
          {
            "key": "Durata",
            "value": "",
            "type": "string"
          },
          {
            "key": "Dislivello in salita",
            "value": "",
            "type": "integer",
            "unit": "m"
          },
          {
            "key": "Dislivello in discesa",
            "value": "",
            "type": "integer",
            "unit": "m"
          },
          {
            "key": "Segnaletica",
            "values": {
              "items": [
                {
                  "item": ""
                },
                {
                  "item": "Congruente"
                },
                {
                  "item": "Assente"
                },
                {
                  "item": "Non sufficiente"
                }
              ]
            },
            "value": "",
            "type": "stringcombo"
          },
          {
            "key": "Copertura GPS",
            "values": {
              "items": [
                {
                  "item": ""
                },
                {
                  "item": "Completa"
                },
                {
                  "item": "Parziale"
                },
                {
                  "item": "Assente"
                }
              ]
            },
            "value": "",
            "type": "stringcombo"
          },
          {
            "key": "Copertura rete mobile",
            "values": {
              "items": [
                {
                  "item": ""
                },
                {
                  "item": "Completa"
                },
                {
                  "item": "Parziale"
                },
                {
                  "item": "Assente"
                }
              ]
            },
            "value": "",
            "type": "stringcombo"
          },
          {
            "key": "Strumento",
            "value": "",
            "type": "string"
          },
          {
            "key": "Data",
            "value": "",
            "type": "date"
          },
          {
            "key": "Ora",
            "value": "",
            "type": "time"
          }
        ]
      },
{
      "formname": "QRtag",
      "formitems": [
          {
            "key": "ulsp_type",
            "value": "",
            "type": "string"
          },
          {
            "key": "Titolo",
            "value": "40",
            "type": "string"
          },
          {
            "key": "Foto",
            "value": "",
            "type": "string"
          },
          {
            "key": "fid",
            "value": "",
            "type": "string"
          },
          {
            "key": "Descrizione",
            "value": "",
            "type": "string"
          },
          {
            "key": "Testo",
            "value": "700",
            "type": "string"
          }
        ]
      }
]
