export interface ICountry {
    ID: string;
    Name: string;
    Language: string;
    Responsiveness: string;
    LastUpdate: string;
    SimNeeded112: string;
    OnlyNumber: string;
}

export interface IEmergencyPhoneNumber {
    Type: string;
    Number: string;
    LastUpdate: string;
}

export interface ICountryName {
    as: string;
    city: string;
    country: string;
    countryCode: string;
    isp: string;
    lat: number;
    lon: number;
    org: string;
    query: string;
    region: string;
    regionName: string;
    status: string;
    timezone: string;
    zip: string;
}
