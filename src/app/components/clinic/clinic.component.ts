import {Clinic} from "../../persistence/domain/clinic";
import {ClinicService} from "../../persistence/service/clinic-service";
import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'clinic',
    templateUrl: './clinic.component.html'
})
export class ClinicComponent implements OnInit {

    clinic: Clinic;

    constructor(private clinicService: ClinicService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            const id = params['id'];
            if (id) {
                this.clinicService.findOne(+id).subscribe(clinic => {
                    this.clinic = clinic;
                });
            } else {
                this.clinic = new Clinic();
            }
        });
    }

    save() {
        this.clinicService.remove(this.clinic).subscribe(() => {
            this.clinicService.save(this.clinic).subscribe(() => {
                this.router.navigate(['/clinics']);
            });
        });
    }


}