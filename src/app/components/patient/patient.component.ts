import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {PatientService} from "../../persistence/service/patient.service";
import {Patient} from "../../persistence/domain/patient";
import {TherapistService} from "../../persistence/service/therapist.service";
import {Therapist} from "../../persistence/domain/therapist";
import {ToastyUtils} from "../../common/ToastUtils";

@Component({
    selector: 'patient',
    templateUrl: './patient.component.html'
})
export class PatientComponent implements OnInit {

    therapistId: number;
    patient: Patient;
    therapists: Array<Therapist>;

    constructor(private patientService: PatientService,
                private therapistService: TherapistService,
                private toastyUtils: ToastyUtils,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            const id = +params['id'];
            this.patientService.exists(id).subscribe(exists => {
                if (exists) {
                    this.patientService.findOne(id).subscribe(patient => {
                        this.patient = patient;
                    });
                } else {
                    this.patient = new Patient();
                    if (id) {
                        this.toastyUtils.error('Not found', `A patient with id ${id} not found`);
                    }
                }
            });
        });

        this.therapistService.getAll().subscribe(therapists => {
            this.therapists = therapists;
        });
    }

    save() {
        const selectedTherapist = this.therapists.find(it => it.id === +this.patient.therapist.id);
        this.patient.therapist = selectedTherapist;
        this.patientService.save(this.patient).subscribe(() => {
            this.router.navigate(['/patients']);
        });
    }

}