import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {Clinic} from "../../persistence/domain/clinic";
import {ClinicService} from "../../persistence/service/clinic-service";
import {TherapistService} from "../../persistence/service/therapist.service";
import {Therapist} from "../../persistence/domain/therapist";
import {ToastData, ToastOptions, ToastyConfig, ToastyService} from "ng2-toasty";
import {ToastyUtils} from "../../common/ToastUtils";

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
                private toastyUtils: ToastyUtils,
                private router: Router) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            const id = +params['id'];
            this.clinicService.exists(id).subscribe(exists => {
                if (exists) {
                    this.therapistService.findOne(id).subscribe(therapist => {
                        this.therapist = therapist;
                    });
                } else {
                    this.therapist = new Therapist();
                    if (id) {
                        this.toastyUtils.error('Not found', `A therapist with id ${id} not found`);
                    }
                }
            })
        });

        this.clinicService.getAll().subscribe(clinics => this.clinics = clinics);
    }

    save() {
        this.therapistService.save(this.therapist).subscribe(() => {
            this.router.navigate(['/therapists']);
        });
    }

}