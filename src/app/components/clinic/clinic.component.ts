import {Clinic} from "../../persistence/domain/clinic";
import {ClinicService} from "../../persistence/service/clinic-service";
import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {ToastyUtils} from "../../common/ToastUtils";

@Component({
    selector: 'clinic',
    templateUrl: './clinic.component.html'
})
export class ClinicComponent implements OnInit {

    clinic: Clinic;

    constructor(private clinicService: ClinicService,
                private activatedRoute: ActivatedRoute,
                private toastyUtils: ToastyUtils,
                private router: Router) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            const id = +params['id'];
            this.clinicService.exists(id).subscribe(exists => {
                if (exists) {
                    this.clinicService.findOne(id).subscribe(clinic => {
                        this.clinic = clinic;
                    });
                } else {
                    this.clinic = new Clinic();
                    if (id) {
                        this.toastyUtils.error('Not found', `A clinic with id ${id} not found`);
                    }
                }
            });
        });
    }

    save() {
        this.clinicService.save(this.clinic).subscribe(() => {
            this.router.navigate(['/clinics']);
        });
    }


}