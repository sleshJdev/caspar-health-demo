import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {PatientService} from "../../persistence/service/patient.service";
import {Patient} from "../../persistence/domain/patient";
import {Clinic} from "../../persistence/domain/clinic";
import {ClinicService} from "../../persistence/service/clinic-service";
import {TherapistService} from "../../persistence/service/therapist.service";
import {Therapist} from "../../persistence/domain/therapist";

@Component({
    selector: 'patient',
    templateUrl: './patient.component.html'
})
export class PatientComponent implements OnInit {

    patient: Patient;
    therapists: Array<Therapist>;

    constructor(private patientService: PatientService,
                private therapistService: TherapistService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            const id = params['id'];
            if (id) {
                this.patientService.findOne(+id).subscribe(patient => {
                    this.patient = patient;
                });
            } else {
                this.patient = new Patient();
            }
        });

        this.therapistService.getAll().subscribe(therapists => {
            console.log('therapists:', therapists);
            this.therapists = therapists;
        });
    }

    save() {
        this.patientService.save(this.patient).subscribe(() => {
            this.router.navigate(['/patients']);
        });
    }

}