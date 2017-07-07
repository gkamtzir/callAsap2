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
    ip: string;
    country_code: string;
    country_name: string;
    region_code: string;
    region_name: string;
    city: string;
    zip_code: string;
    time_zone: string;
    latitude: number;
    longitude: number;
    metro_code: number;
}
