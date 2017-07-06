import { Component } from '@angular/core';
import { CountryService } from '../shared/country.service';

@Component({
    moduleId: module.id,
    templateUrl: 'search.component.html'
})

export class SearchComponent {

    constructor(private _countryService: CountryService) {}

}
