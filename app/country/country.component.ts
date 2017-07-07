import { Component, Input, OnChanges } from '@angular/core';
import { ICountry, IEmergencyPhoneNumber } from '../shared/interfaces/country';

@Component({
    moduleId: module.id,
    selector: 'country',
    templateUrl: 'country.component.html'
})

export class CountryComponent {

    @Input() country: ICountry;
    @Input() emergencies: IEmergencyPhoneNumber;

}
