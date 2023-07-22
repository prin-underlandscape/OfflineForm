class Format {

  formats =
#INIZIO
Qui viene incluso il file tags.json con il comando "make build"
#FINE
;

  constructor() {
  }

	format(type) {
		return this.formats.find(x => x.sectionname === type);
	}	
	types() {
		return this.formats.map(f => f.sectionname);
	}
}
