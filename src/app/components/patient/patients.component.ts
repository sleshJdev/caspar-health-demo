import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {PatientService} from "../../persistence/service/patient.service";
import {Patient} from "../../persistence/domain/patient";

@Component({
    selector: 'patients',
    templateUrl: './patients.component.html',
})
export class PatientsComponent implements OnInit {

    private patients: Array<Patient> = [];

    constructor(private patientService: PatientService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getAll();
    }

    private getAll() {
        this.patientService.getAll()
            .subscribe(clinics => this.patients = clinics);
    }

    remove(patient: Patient) {
        this.patientService.remove(patient).subscribe(() => this.getAll());
    }

    add() {
        this.router.navigate(['/patients/add']);
    }

    edit(patient: Patient) {
        this.router.navigate(['/patients', patient.id]);
    }

}