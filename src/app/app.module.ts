import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';
import {AppRoutesModule} from "./app-routes.module";
import {ToastyModule} from 'ng2-toasty';
import {DomainModule} from "./persistence/domain.module";

import {AppComponent} from "./app.component";
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";
import {ClinicsComponent} from "./components/clinic/clinics.component";
import {ClinicComponent} from "./components/clinic/clinic.component";
import {PatientComponent} from "./components/patient/patient.component";
import {PatientsComponent} from "./components/patient/patients.component";
import {TherapistComponent} from "./components/therapist/therapist.component";
import {TherapistsComponent} from "./components/therapist/therapists.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {ToastyUtils} from "./common/ToastUtils";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ToastyModule.forRoot(),
        AppRoutesModule,
        DomainModule
    ],
    providers: [
        AppComponent,
        ToastyUtils,
        {provide: LocationStrategy, useClass: HashLocationStrategy}],
    declarations: [
        AppComponent,
        HomeComponent, AboutComponent,
        ClinicsComponent, ClinicComponent,
        TherapistsComponent, TherapistComponent,
        PatientsComponent, PatientComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}