import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ICountry, IEmergencyPhoneNumber, ICountryName } from './interfaces/country';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CountryService {

    constructor(private _http: Http){}

    private handleError(error: Response){
        let errorMessage = 'The service is not available right now. Sorry for the inconvenience';
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }

    getCountryName(): Observable<ICountryName> {
        return this._http
                    .get('https://freegeoip.net/json/')
                    .map((response: Response) => <ICountryName>response.json())
                    .catch(this.handleError);
    }

    getCountries(): Observable<ICountry[]> {
        return this._http
                    .get('http://83.212.115.201/api.php/country')
                    .map((response: Response) => <ICountry[]>response.json())
                    .catch(this.handleError);
    }

    getCountry(country: ICountry): Observable<ICountry> {
        return this._http
        .get('http://83.212.115.201/api.php/country/' + country.Name)
                    .map((response: Response) => <ICountry>response.json())
                    .catch(this.handleError);
    }

    getCountryString(country: string): Observable<ICountry> {
        return this._http
                    .get('http://83.212.115.201/api.php/country/' + country)
                    .map((response: Response) => <ICountry>response.json())
                    .catch(this.handleError);
    }

    getEmergencyPhoneNumbers(country: ICountry): Observable<IEmergencyPhoneNumber[]> {
        return this._http
                    .get('http://83.212.115.201/api.php/country/emergency/' + country.Name)
                    .map((response: Response) => <IEmergencyPhoneNumber[]>response.json())
                    .catch(this.handleError);
    }

}
