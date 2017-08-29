import {Injectable} from "@angular/core";
import {Clinic} from "../domain/clinic";
import {CrudService} from "./crud.service";
import {LocalStorageService} from "angular-2-local-storage";
import {TherapistService} from "./therapist.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ClinicService extends CrudService<Clinic> {

    protected getKey(): string {
        return Clinic.KEY;
    }

    constructor(storage: LocalStorageService,
                private therapistService: TherapistService) {
        super(storage);
    }

    save(clinic: Clinic): Observable<Clinic> {
        const o = super.saveOne(clinic);

        o.subscribe(value => {
            this.therapistService.findByClinic(value)
                .subscribe(therapists => {
                    therapists.forEach(therapist => {
                        therapist.clinic = value;
                        this.therapistService.save(therapist);
                    });
                })
        });

        return o;
    }

}