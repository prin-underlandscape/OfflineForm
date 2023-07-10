class Format {

	formats = [ {	
	"sectionname": "Sito",
	"forms": [{
		"formname": "Scheda Sito",
		"formitems": [{
				"key": "Sito",
				"value": "",
				"islabel": "true",
				"type": "integer",
				"mandatory": "yes"
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
				"type": "double"
			},
			{
				"key": "LONGITUDE",
				"value": "",
				"type": "double"
			},
			{
				"key": "LATITUDE",
				"value": "",
				"type": "double"
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
					"items": [{
							"item": ""
						},
						{
							"item": "insediamento civile"
						},
						{
							"item": "insediamento ecclesiastico"
						},
						{
							"item": "insediamento fortificato"
						},
						{
							"item": "infrastruttura"
						},
						{
							"item": "struttura devozionale"
						},
						{
							"item": "insediamento produttivo"
						},
						{
							"item": "area funeraria"
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
					"items": [{
							"item": ""
						},
						{
							"item": "corpo di fabbrica"
						},
						{
							"item": "complesso architettonico composto da più corpi di fabbrica"
						},
						{
							"item": "struttura muraura"
						},
						{
							"item": "grotta"
						},
						{
							"item": "riparo sotto roccia"
						},
						{
							"item": "struttura produttiva"
						},
						{
							"item": "viabilità"
						},
						{
							"item": "elemento funzionale"
						},
						{
							"item": "elemento decorativo"
						},
						{
							"item": "elemento devozionale"
						},
						{
							"item": "elemento erratico"
						},
						{
							"item": "area di dispersione di materiale"
						},
						{
							"item": "area di concentrazione di materiale"
						},
						{
							"item": "anomalia morfologica"
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
				"key": "Cronologia Iniziale",
				"values": {
					"items": [{
							"item": ""
						},
						{
							"item": "Preistoria"
						},
						{
							"item": "Protostoria"
						},
						{
							"item": "Età del bronzo"
						},
						{
							"item": "Età del ferro"
						},
						{
							"item": "Periodo preromano"
						},
						{
							"item": "Periodo etrusco"
						},
						{
							"item": "Periodo ligure"
						},
						{
							"item": "Età romana repubblicana"
						},
						{
							"item": "Età romana imperiale"
						},
						{
							"item": "Alto medioevo"
						},
						{
							"item": "Basso medioevo"
						},
						{
							"item": "Età moderna"
						},
						{
							"item": "Prima età moderna"
						},
						{
							"item": "Tarda età moderna"
						},
						{
							"item": "Età contemporanea"
						},
						{
							"item": "Età subcontemporanea"
						},
						{
							"item": "Età subattuale"
						},
						{
							"item": "Età attuale"
						}
					]
				},
				"value": "",
				"type": "stringcombo"
			},
			{
				"key": "Cronologia Finale",
				"values": {
					"items": [{
							"item": ""
						},
						{
							"item": "Preistoria"
						},
						{
							"item": "Protostoria"
						},
						{
							"item": "Età del bronzo"
						},
						{
							"item": "Età del ferro"
						},
						{
							"item": "Periodo preromano"
						},
						{
							"item": "Periodo etrusco"
						},
						{
							"item": "Periodo ligure"
						},
						{
							"item": "Età romana repubblicana"
						},
						{
							"item": "Età romana imperiale"
						},
						{
							"item": "Alto medioevo"
						},
						{
							"item": "Basso medioevo"
						},
						{
							"item": "Età moderna"
						},
						{
							"item": "Prima età moderna"
						},
						{
							"item": "Tarda età moderna"
						},
						{
							"item": "Età contemporanea"
						},
						{
							"item": "Età subcontemporanea"
						},
						{
							"item": "Età subattuale"
						},
						{
							"item": "Età attuale"
						}
					]
				},
				"value": "",
				"type": "stringcombo"
			},
			{
                  "key":"Reperti Ceramici",
                  "values":{
                  "items":[{
                           "item":""
                        },
                        {
                           "item":"SI"
                        },
                        {
                           "item":"NO"
                        }
						]
						},
				  "value":"",
                  "type":"stringcombo"
            },
			{
                  "key":"Reperti geologici",
                  "values":{
                  "items":[{
                           "item":""
                        },
                        {
                           "item":"SI"
                        },
                        {
                           "item":"NO"
                        }
						]
						},
				  "value":"",
                  "type":"stringcombo"
            },
			{
                  "key":"Reperti organici",
                  "values":{
                  "items":[{
                           "item":""
                        },
                        {
                           "item":"SI"
                        },
                        {
                           "item":"NO"
                        }
						]
						},
				  "value":"",
                  "type":"stringcombo"
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
					"items": [{
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
					"items": [{
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
					"items": [{
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
				"type": "pictures"
			},
			{
				"key": "Bibliografia",
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
	}]
 },
  {
		"sectionname":"POI"
	},
 {    "sectionname":"Percorso",
      "forms":[{
            "formname":"Percorso",
            "formitems":[
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
                  "key":"Definizione percorso",
                  "value":"",
                  "type":"string"
            },
			{
				"key": "Punto d'accesso",
				"value": "",
				"type": "string"
			},
            {
                  "key":"Foto accesso",
                  "label":"Foto",
                  "value":"",
                  "type":"pictures"
            },
			{
				"key": "Descrizione",
				"value": "",
				"type": "string"
			},
			{
				"key": "Difficoltà",
				"values": {
					"items": [{
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
			    "key": "Dislivello metri",
				"value": "",
				"type": "integer"
				},
				{
			    "key": "Segnaletica",
				"values": {
					"items": [{
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
					"items": [{
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
					"items": [{
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
				"key": "Note",
				"value": "",
				"type": "string"
			   },
               {
                  "key":"Data",
                  "value":"",
                  "type":"date"
               },
               {
                  "key":"Ora",
                  "value":"",
                  "type":"time"
               },
               {
                  "key":"LONGITUDE",
                  "value":"",
                  "type":"double"
               },
               {
                  "key":"LATITUDE",
                  "value":"",
                  "type":"double"
               }
            ]
         }
      ]
}
];

  constructor() {
  }

	format(type) {
		return this.formats.find(x => x.sectionname === type);
	}
}
