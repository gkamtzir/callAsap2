import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/country.service';
import { ICountry, ICountryName, IEmergencyPhoneNumber } from '../shared/interfaces/country';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    countryName: ICountryName;
    country: ICountry;
    emergencyPhoneNumbers: IEmergencyPhoneNumber[]

    constructor(private _countryService: CountryService){}

    ngOnInit(): void {

        this._countryService.getCountryName()
            .subscribe(
                countryName => {

                    this.countryName = countryName;
                    this._countryService.getCountryString(this.countryName.country_name)
                        .subscribe(
                            country => {
                                this.country = country;
                                this._countryService.getEmergencyPhoneNumbers(this.country)
                                    .subscribe(
                                        emergencyPhoneNumbers => this.emergencyPhoneNumbers = emergencyPhoneNumbers
                                    );
                             }
                        )

                }
            )

    }

}
