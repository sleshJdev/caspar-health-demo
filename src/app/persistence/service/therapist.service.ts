import {Injectable, OnInit} from "@angular/core";
import {Therapist} from "../domain/therapist";
import {CrudService} from "./crud.service";
import {PatientService} from "./patient.service";
import {LocalStorageService} from "angular-2-local-storage";
import {Clinic} from "../domain/clinic";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TherapistService extends CrudService<Therapist> {

    protected getKey(): string {
        return Therapist.KEY;
    }

    constructor(storage: LocalStorageService,
                private patientService: PatientService) {
        super(storage);
    }

    findByClinic(clinic: Clinic): Observable<Array<Therapist>> {
        return super.applyAction(dataSet => {
            return Array.from(dataSet.values()).filter(therapist => {
                return therapist.clinic.id === clinic.id;
            })
        })
    }

    save(therapist: Therapist): Observable<Therapist> {
        const o = super.saveOne(therapist);

        o.subscribe(value => {
            this.patientService.findByTherapist(value)
                .subscribe(patients => {
                    patients.forEach(patient => {
                        patient.therapist = value;
                        this.patientService.save(patient);
                    });
                });
        });

        return o;
    }

}