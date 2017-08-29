import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {Clinic} from "../../persistence/domain/clinic";
import {ClinicService} from "../../persistence/service/clinic-service";
import {TherapistService} from "../../persistence/service/therapist.service";
import {Therapist} from "../../persistence/domain/therapist";

@Component({
    selector: 'therapist',
    templateUrl: './therapist.component.html'
})
export class TherapistComponent implements OnInit {

    therapist: Therapist;
    clinics: Array<Clinic>;

    constructor(private therapistService: TherapistService,
                private clinicService: ClinicService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            const id = params['id'];
            if (id) {
                this.therapistService.findOne(+id).subscribe(therapist => {
                    this.therapist = therapist;
                });
            } else {
                this.therapist = new Therapist();
            }
        });

        this.clinicService.getAll().subscribe(clinics => this.clinics = clinics);
    }

    save() {
        this.therapistService.save(this.therapist).subscribe(() => {
            this.router.navigate(['/therapists']);
        });
    }

}