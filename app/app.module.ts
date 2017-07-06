import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports:      [ BrowserModule,
                    HttpModule,
                    RouterModule.forRoot([
                        { path: '', component: HomeComponent },
                        { path: 'search', component: SearchComponent },
                        { path: 'about', component: AboutComponent }
                    ])],
  declarations: [ AppComponent, HomeComponent, SearchComponent, AboutComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
