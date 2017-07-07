import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ICountry, IEmergencyPhoneNumber, ICountryName } from './interfaces/country';
import 'rxjs/add/operator/map';

@Injectable()
export class CountryService {

    constructor(private _http: Http){}

    getCountryName(): Observable<ICountryName> {
        return this._http
                    .get('https://freegeoip.net/json/')
                    .map((response: Response) => <ICountryName>response.json());
    }

    getCountries(): Observable<ICountry[]> {
        return this._http
                    .get('http://83.212.115.201/api.php/country')
                    .map((response: Response) => <ICountry[]>response.json());
    }

    getCountry(country: ICountry): Observable<ICountry> {
        return this._http
                    .get('http://83.212.115.201/api.php/country/' + country.Name)
                    .map((response: Response) => <ICountry>response.json());
    }

    getCountryString(country: string): Observable<ICountry> {
        return this._http
                    .get('http://83.212.115.201/api.php/country/' + country)
                    .map((response: Response) => <ICountry>response.json());
    }

    getEmergencyPhoneNumbers(country: ICountry): Observable<IEmergencyPhoneNumber[]> {
        return this._http
                    .get('http://83.212.115.201/api.php/country/emergency/' + country.Name)
                    .map((response: Response) => <IEmergencyPhoneNumber[]>response.json());
    }

}
