import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {PatientService} from "../../persistence/service/patient.service";
import {Patient} from "../../persistence/domain/patient";
import {Therapist} from "../../persistence/domain/therapist";
import {TherapistService} from "../../persistence/service/therapist.service";

@Component({
    selector: 'therapists',
    templateUrl: './therapists.component.html',
})
export class TherapistsComponent implements OnInit {

    private therapists: Array<Therapist>;

    constructor(private therapistService: TherapistService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getAll();
    }

    private getAll() {
        this.therapistService.getAll()
            .subscribe(therapists => this.therapists = therapists);
    }

    remove(therapist: Therapist) {
        this.therapistService.remove(therapist).subscribe(() => this.getAll());
    }

    add() {
        this.router.navigate(['/therapists/add']);
    }

    edit(therapist: Therapist) {
        this.router.navigate(['/therapists', therapist.id]);
    }

}