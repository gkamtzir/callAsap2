import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/country.service';
import { ICountry, IEmergencyPhoneNumber } from '../shared/interfaces/country';

@Component({
    moduleId: module.id,
    templateUrl: 'search.component.html'
})

export class SearchComponent implements OnInit{

    countries: ICountry[];
    emergencyPhoneNumbers: IEmergencyPhoneNumber[];
    country: ICountry;


    constructor(private _countryService: CountryService) {}

    ngOnInit(): void {

        this._countryService.getCountries()
            .subscribe(
                countries => this.countries = countries
            );

    }

    changeCountry(country: ICountry): void {

        this._countryService.getEmergencyPhoneNumbers(country)
            .subscribe(
                emergencyPhoneNumbers => this.emergencyPhoneNumbers = emergencyPhoneNumbers
            );

    }

}
