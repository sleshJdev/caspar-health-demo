import {Injectable} from "@angular/core";
import {Clinic} from "../domain/clinic";
import {CrudService} from "./crud.service";

@Injectable()
export class ClinicService extends CrudService<Clinic> {

    protected getKey(): string {
        return Clinic.KEY;
    }

}