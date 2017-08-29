import {NgModule} from "@angular/core";
import {LocalStorageModule} from "angular-2-local-storage";
import {ClinicService} from "./service/clinic-service";

@NgModule({
    imports: [
        LocalStorageModule.withConfig({
            prefix: 'caspart-health-app',
            storageType: 'localStorage'
        })
    ],
    providers: [ClinicService]
})
export class DomainModule {

}