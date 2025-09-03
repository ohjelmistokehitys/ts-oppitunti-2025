import { readFile, readFileSync } from 'fs';
import path from 'path';
import City, { RawCityData } from './City';

const jsonFile: string = path.join(__dirname, '..', 'data.json');
const jsonData = readFileSync(jsonFile, "utf-8");

const rawCities = JSON.parse(jsonData) as RawCityData[];

const cities: City[] = rawCities.map(raw => City.parse(raw));

cities.forEach(city => console.log(
    city.name.padEnd(20),
    city.population.toString().padEnd(20),
    city.populationDensity.toFixed(2)
));
