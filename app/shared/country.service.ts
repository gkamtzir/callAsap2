import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CountryService {

    constructor(private _http: Http){}

    getCountryName(ip: string): object {
        return this._http
                    .get('http://ip-api.com/json/' + ip)
                    .map((response: Response) => response.json());
    }

    getCountries(): Observable<object[]> {
        return this._http
                    .get('http://83.212.115.201/api.php/country')
                    .map((response: Response) => response.json());
    }
    getCountry(country: string): Observable<object> {
        return this._http
                    .get('http://83.212.115.201/api.php/country/' + country)
                    .map((response: Response) => response.json());
    }

    getEmergencyPhoneNumbers(country: string): Observable<object[]> {
        return this._http
                    .get('http://83.212.115.201/api.php/country/emergency/' + country)
                    .map((response: Response) => response.json());
    }

}
