import {Injectable} from "@angular/core";
import {Patient} from "../domain/patient";
import {CrudService} from "./crud.service";
import {LocalStorageService} from "angular-2-local-storage";
import {Therapist} from "../domain/therapist";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PatientService extends CrudService<Patient> {

    protected getKey(): string {
        return Patient.KEY;
    }

    constructor(storage: LocalStorageService) {
        super(storage);
    }

    findByTherapist(therapist: Therapist): Observable<Array<Patient>> {
        return super.applyAction(dataSet => {
            return Array.from(dataSet.values()).filter(patient => {
                return patient.therapist.id === therapist.id;
            })
        })
    }

    save(patient: Patient): Observable<Patient> {
        return this.saveOne(patient);
    }

}