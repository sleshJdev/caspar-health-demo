import {Injectable} from "@angular/core";
import {Therapist} from "../domain/therapist";
import {CrudService} from "./crud.service";

@Injectable()
export class TherapistService extends CrudService<Therapist> {

    protected getKey(): string {
        return Therapist.KEY;
    }

}