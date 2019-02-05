export interface Country {
    name: string;
    alpha2Code: string;
    callingCodes: string;
    capital: string;
    region: string;
    population: number;
    borders: string[];
    currencies: JSON[];
    languages: JSON[];
    flag: string;
}