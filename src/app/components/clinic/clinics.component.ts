import {Component, OnInit} from "@angular/core";
import {ClinicService} from "../../persistence/service/clinic-service";
import {Clinic} from "../../persistence/domain/clinic";
import {Router} from "@angular/router";

@Component({
    selector: 'clinics',
    templateUrl: './clinics.component.html',
})
export class ClinicsComponent implements OnInit {

    private clinics: Array<Clinic> = [];

    constructor(private clinicService: ClinicService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getAll();
    }

    private getAll() {
        this.clinicService.getAll()
            .subscribe(clinics => this.clinics = clinics);
    }

    remove(clinic: Clinic) {
        this.clinicService.remove(clinic).subscribe(() => this.getAll());
    }

    add() {
        this.router.navigate(['/clinics/add']);
    }

    edit(clinic: Clinic) {
        this.router.navigate(['/clinics', clinic.id]);
    }

}