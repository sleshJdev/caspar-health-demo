import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';
import {AppRoutesModule} from "./app-routes.module";
import {DomainModule} from "./persistence/domain.module";

import {AppComponent} from "./app.component";
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";
import {ClinicsComponent} from "./components/clinic/clinics.component";
import {ClinicComponent} from "./components/clinic/clinic.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutesModule,
        DomainModule
    ],
    providers: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent, AboutComponent,
        ClinicsComponent, ClinicComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}