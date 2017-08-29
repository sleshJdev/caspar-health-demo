import {Component} from "@angular/core";
import {ClinicService} from "../../persistence/service/clinic-service";
import {Clinic} from "../../persistence/domain/clinic";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'clinic',
    templateUrl: './clinic.component.html',
})
export class ClinicComponent {

    clinic: Clinic = new Clinic(null, '');

    constructor(private clinicService: ClinicService) {
    }

    add() {
        this.clinicService.save(this.clinic);
        this.clinic = new Clinic(null, '');
    }

    getAll(): Array<Clinic> {
        return this.clinicService.getAll();
    }

}