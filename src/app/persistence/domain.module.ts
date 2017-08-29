import {NgModule} from "@angular/core";
import {LocalStorageModule} from "angular-2-local-storage";
import {ClinicService} from "./service/clinic-service";
import {PatientService} from "./service/patient.service";
import {TherapistService} from "./service/therapist.service";

@NgModule({
    imports: [
        LocalStorageModule.withConfig({
            prefix: 'caspart-health-app',
            storageType: 'localStorage'
        })
    ],
    providers: [ClinicService, PatientService, TherapistService]
})
export class DomainModule {

}