import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";
import {ClinicsComponent} from "./components/clinic/clinics.component";
import {ClinicComponent} from "./components/clinic/clinic.component";
import {TherapistsComponent} from "./components/therapist/therapists.component";
import {TherapistComponent} from "./components/therapist/therapist.component";
import {PatientsComponent} from "./components/patient/patients.component";
import {PatientComponent} from "./components/patient/patient.component";

const routes: Routes = [
    {
        path: 'clinics',
        component: ClinicsComponent
    }, {
        path: 'clinics/add',
        component: ClinicComponent
    }, {
        path: 'clinics/:id',
        component: ClinicComponent
    }, {
        path: 'therapists',
        component: TherapistsComponent
    }, {
        path: 'therapists/add',
        component: TherapistComponent
    }, {
        path: 'therapists/:id',
        component: TherapistComponent
    }, {
        path: 'patients',
        component: PatientsComponent
    }, {
        path: 'patients/add',
        component: PatientComponent
    }, {
        path: 'patients/:id',
        component: PatientComponent
    }, {
        path: 'about',
        component: AboutComponent
    }, {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutesModule {

}