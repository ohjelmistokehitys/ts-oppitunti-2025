export default class City {
    constructor(public name: string, public population: number, public area: number) {
    }

    get populationDensity() {
        return this.population / this.area;
    }

    static parse(raw: RawCityData): City {
        return new City(raw.Kaupunki, raw.Väkiluku, raw['Maapinta-ala (km²)']);
    }
}

// format in data source
export type RawCityData = {
    Kaupunki: string;
    Maakunta: string;
    Väkiluku: number;
    "Maapinta-ala (km²)": number;
}
