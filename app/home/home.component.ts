import { Component } from '@angular/core';
import { CountryService } from '../shared/country.service';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent {

    constructor(private _countryService: CountryService){}

}
