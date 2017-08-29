import {Injectable} from "@angular/core";
import {Patient} from "../domain/patient";
import {CrudService} from "./crud.service";

@Injectable()
export class PatientService extends CrudService<Patient> {

    protected getKey(): string {
        return Patient.KEY;
    }

}