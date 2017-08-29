import {Injectable} from "@angular/core";
import {LocalStorageService} from "angular-2-local-storage";
import {Clinic} from "../domain/clinic";
import {Entity} from "../domain/entiy";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ClinicService {

    private readonly KEY = 'clinic';

    constructor(private localStorageService: LocalStorageService) {
    }

    save(entity: Clinic): Clinic {
        let clinics: Array<Clinic> = this.localStorageService.get(this.KEY);
        if (!clinics) {
            clinics = [];
        }
        entity.id = clinics.length + 1;
        clinics.push(entity);
        this.localStorageService.set(this.KEY, clinics);
        return entity;
    }

    getAll(): Array<Clinic> {
        return this.localStorageService.get(this.KEY);
    }

}